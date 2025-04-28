import { dynamicRoutesParser } from "../src/index.js"
describe("Test dynamic routes parser", function() {
    it("contains a spec with an expectation", function() {
        const mask = "app/lang/:lang/id/:id";
        const route = "app/lang/en/id/7";
        expect(dynamicRoutesParser(mask, route)).toEqual({ lang: "en", id: "7" });
    });
});
 