// temp = list[index_1];
// list[index_1] = list[index_2];
// list[index_2] = temp ;
// or list[index_1], list[index_2] = list[index_2], list[index_1]



module.exports = (input)=> {
    //helper func:
    const swap = (arr, indexOne, indexTwo) => {
        const temp= arr[indexTwo];
      arr[indexTwo]=arr[indexOne];
      arr[indexOne]=temp;
      }
    let swapCount = 0
    let swapping = true;
    
    while (swapping) {
      swapping = false;
      for (let i = 0; i < input.length - 1; i++) {
        if (input[i] > input[i + 1]) {
          swap(input, i, i + 1);
          swapCount++;
          swapping = true;
        }
      }
    }
    console.log(`Swapped ${swapCount} times`);
    return input;
  };