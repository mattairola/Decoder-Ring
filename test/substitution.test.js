const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("using a substitution alphabet with a real alphabet, the input will return an encripted code matching index values from the two alphabets.", () => {
        const input = [
            "thinkful"
        ];
        const expected = [
            "jrufscpw"
        ];
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, encode = true);

        expect(actual).to.equal(expected);
    });

    it("should decode using the specified alphabet and the real alphabet to decode the string", () => {
        const input = [
            "y&ii$r&"
        ];
        const expected = [
            "message"
        ];
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, encode = false);

        expect(actual).to.equal(expected);
    });
});