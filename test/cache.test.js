import {Cache} from "../src/cache";

describe('it works!', () => {

    test('getCache', () => {
        let test = new Cache();
        test.setCache("cat", "doesn't like TDD");

        expect(test.getCache("cat")).toBe("doesn't like TDD");
        expect(test.getCache("cat")).toBe(null);
        expect(test.getCache("cat")).toBe(null);
    });
    
    test('getStatistics', () => {
        let test = new Cache();
        test.setCache("cat", "doesn't like TDD");
        test.setCache("dog", "likes TDD", 5);
        test.setCache("I", "tired");

        expect(test.getStatistics()).toBe("cat: doesn't like TDD 1\ndog: likes TDD 5\nI: tired 1");
    });

});