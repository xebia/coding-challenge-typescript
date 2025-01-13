/**
 * Custom expectation handlers for test assertions
 * These handlers provide more readable error messages for common test scenarios
 */

/**
 * Provides a cleaner error message when comparing arrays in tests
 */
export const expectArraysToBeEqual = (actual: number[], expected: number[]) => {
    try {
        expect(actual).toEqual(expected);
    } catch (error) {
        throw new Error(
            `Expected: [${expected.join(', ')}]\n` +
            `Actual:   [${actual.join(', ')}]`
        );
    }
}; 