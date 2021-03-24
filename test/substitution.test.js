// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should encode the message", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });

    it("should encode the message including spaces", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });

    it("should decode the message", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("should encode the message including special characters", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });

    it("should decode the message including special characters", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet is not 26 characters", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return false is the alphabet has duplicate characters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    
})