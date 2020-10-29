const { groupArrayElements } = require('./index').default;

describe('index', () => {

    describe('groupArrayElements', () => {

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        test('should return accurate split array length when divisor is 3', () => {

            const divisor = 3;
            expect(groupArrayElements(arr, divisor).length).toEqual(3);

        });

        test('should return accurate split array length when divisor is 5', () => {

            const divisor = 5;
            expect(groupArrayElements(arr, divisor).length).toEqual(5);

        });

        test('should return an array length of 3 when divisor is 3 and match expected output', () => {
            const divisor = 3;
            const expectedOutput = [[1, 2], [3, 4], [5]];
            const array = [1, 2, 3, 4, 5]

            expect(groupArrayElements(array, divisor)).toEqual(expectedOutput);
        });


        test('should return an array length of 3 when divisor is 3 and match expected output', () => {
            const divisor = 5;
            const expectedOutput = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            expect(groupArrayElements(array, divisor)).toEqual(expectedOutput);
        });
    })
});