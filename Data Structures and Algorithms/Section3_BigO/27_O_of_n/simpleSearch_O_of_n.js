const nemo = ["nemo"];

const large = new Array(10).fill('nemo');

function findNemo(array){
  for (let i=0; i < array.length ; i++){
    if (array[i] === "nemo"){
      console.log("Find NEMO!");
    }
  }

}

findNemo(nemo); // O(n)
findNemo(large);