let boxes = [0,1,2,3,4]
let boxes2 = [5,6,7,8,9]
function compressBoxesTwice(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes2.forEach(function(boxes){
    console.log(boxes);
  }); 

}

compressBoxesTwice(boxes,boxes2) // O(a+b)