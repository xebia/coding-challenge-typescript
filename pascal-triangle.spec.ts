import { triangleRow } from './pascal-triangle';
import { expectArraysToBeEqual } from './expectation-handlers';

describe("Pascal's Triangle", () => {
  const testCases = [
    { row: 0, expected: [1] },
    { row: 1, expected: [1, 1] },
    { row: 2, expected: [1, 2, 1] },
    { row: 3, expected: [1, 3, 3, 1] },
    { row: 4, expected: [1, 4, 6, 4, 1] }
  ];

  testCases.forEach(({ row, expected }) => {
    test(`returns [${expected.join(', ')}] for row ${row}`, () => {
      expectArraysToBeEqual(
        triangleRow(row),
        expected
      );
    });
  });
});
