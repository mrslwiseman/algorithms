const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]

function findMax(arr) {

    
    // size of the hourglass
    const hgWidth = 3;
    const hgHeight = 3;
    // temporary variable to hold all totals
    let allTotals = [];
    // reference point is top left of hourglass
    // this will return the total of the numbers in hourglass shape
    const calculateTotal = (y, x) => {
        // hourglass grid positions
            //  a b c
            //    d
            //  e f g
        const a = arr[y][x];
        const b = arr[y][x + 1];
        const c = arr[y][x + 2]
        const d = arr[y + 1][x + 1];
        const e = arr[y + 2][x];
        const f = arr[y + 2][x + 1];
        const g = arr[y + 2][x + 2];
        return [a, b, c, d, e, f, g].reduce((total, n) => (total + n), 0)
    }

    // loop over the rows on y axis
    for (let y = 0; y <= hgHeight; y++) {
        // loop over the columns on x axis
        for (let x = 0; x <= hgWidth; x++) {
            const shapeTotal = calculateTotal(y, x);
            allTotals.push(shapeTotal)
        }
    }
    return Math.max(...allTotals)
}





// tests

const assert = require('assert');
describe('findMax()', () => {
    it('should return 13', () => {
        assert.equal(findMax(arr), 13)
    })
})
