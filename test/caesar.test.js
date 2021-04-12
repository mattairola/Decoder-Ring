const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should encode an input by a shifting a specified distance either left or right on the alphabet", () => {
        const input = [
            "Hello friends"
        ];
        const expected = [
            "dahhk bneajzo"
        ];
        const shift = -4;
        const actual = caesar(input, shift, encode = true);

        expect(actual).to.equal(expected);
    });

    it("should decode by turning an encripted messeage into readable text by shifting the letters a specified distance", () => {
        const input = [
            "mtb fwj dtz?"
        ];
        const expected = [
            "how are you?"
        ];
        const shift = 5;
        const actual = caesar(input, shift, encode = false);

        expect(actual).to.equal(expected);
    });
});