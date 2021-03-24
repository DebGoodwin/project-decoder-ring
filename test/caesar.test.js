// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should shift letters to the right by shift amount", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });

    it("should shift letters to the left by shift amount", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });

    it("should decode the message if encode is assigned 'false'", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is not present or equal to 0", () => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout, and keep other non-alphabetic symbols", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
    });

    it("should wrap around a letter to the front of the alphabet, if shifted so that it goes 'off' the alphabet", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
    });
})