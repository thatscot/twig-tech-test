const groupArrayElements = (array, N) => {
    const noOfArrays = Math.ceil(array.length / N)
    const currentArr = [...array]
    const output = []
  
    while(currentArr.length > 0) {
      output.push(currentArr.splice(0, noOfArrays));
    }
    console.log('output', output)
    return output;
  }

module.exports = {groupArrayElements};