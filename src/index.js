const groupArrayElements = (array, N) => {

    if (N < 1) {
        throw new Error("Divisor must be greater than zero");
    }
    else if (array && array.length < 1) {
        throw new Error("Array is empty so cannot be divided");
    }
    else if (N === 1) {
        return array;
    }
    else {
        const noOfArrays = Math.ceil(array.length / N);
        const currentArr = [...array];
        const output = [];

        while (currentArr.length > 0) {
            output.push(currentArr.splice(0, noOfArrays));
        }
        return output;
    }
}

module.exports = { groupArrayElements };