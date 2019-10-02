var expect = require("chai").expect;
var disemvowel = require("./disemvowel");

describe("Disemvowel", function () {
    // When given a string, it should remove the vowels.
    it("should remove all lower case vowels", function () {
        expect(disemvowel("here are lower case letters")).to.equal("hr r lwr cs lttrs")
    });

    
})