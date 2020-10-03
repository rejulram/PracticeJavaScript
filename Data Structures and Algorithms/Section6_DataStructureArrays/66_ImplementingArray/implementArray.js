class MyArray{
  constructor(){
    this.length = 0;
    this.data = {}
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index ;i < this.length -1; i++ ){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

const myarray1 = new MyArray()
console.log(myarray1.get(0));
myarray1.push("Hi");
console.log(myarray1.get(0));
console.log(myarray1);
myarray1.push("Hello");
myarray1.push("!");
console.log(myarray1);
myarray1.pop();
console.log(myarray1);
myarray1.push("anusree");
myarray1.delete(1)
console.log(myarray1);
