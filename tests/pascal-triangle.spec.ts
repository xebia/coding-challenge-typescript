import {triangleRow} from '../src/pascal-triangle';
import {describe, expect, it} from "vitest";

describe("Pascal's Triangle", () => {
    it(`should return pascal row 0`, () => {
        expect(triangleRow(0)).toEqual([1])
    });

    it(`should return pascal row 1`, () => {
        expect(triangleRow(1)).toEqual([1, 1])
    });

    it(`should return pascal row 2`, () => {
        expect(triangleRow(2)).toEqual([1, 2, 1])
    });

    it(`should return pascal row 3`, () => {
        expect(triangleRow(3)).toEqual([1, 3, 3, 1])
    });

    it(`should return pascal row 4`, () => {
        expect(triangleRow(4)).toEqual([1, 4, 6, 4, 1])
    });
});
