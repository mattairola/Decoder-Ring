const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("using a 5x5 alphabet grid, the input should return the coordinates(col, row) of each letter", () => {
        const input = [
            "whats up"
        ];
        const expected = [
            "2532114434 5453"
        ];
        const actual = polybius(input, encode = true);

        expect(actual).to.equal(expected);
    });

    it("should decode by turning the number values into a string", () => {
        const input = [
            "4432423352125413"
        ];
        const expected = [
            "thinkful"
        ];
        const actual = polybius(input, encode = false);

        expect(actual).to.equal(expected);
    });
});