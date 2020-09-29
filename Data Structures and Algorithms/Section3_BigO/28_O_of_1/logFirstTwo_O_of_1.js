const boxes = [0,1,2,3,4,5];

function logFirstTwo(boxes){
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwo(boxes); //O(2) --> O(1) Constant Time