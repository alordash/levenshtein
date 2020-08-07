const { distance, closest } = require('../lib/levenshtein');

describe('levenshtein-test', function () {
    it('distance 0', async function () {
        let val = distance("polynomial", "exponential");
        expect(val).toBe(6);
    });

    it('closest 0', async function () {
        let val = closest("test", ["teeeeest", "testtest", "tset", "tet", "est test"]);
        expect(val.closest_string).toBe("tet");
        expect(val.distance).toBe(1);
    });
});