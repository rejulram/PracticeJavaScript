// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

//Answer O(n)