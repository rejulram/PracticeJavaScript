class Player {
  constructor(name,type){
    console.log('Player :', this);
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name,type){
    super(name,type);
    console.log('Wizard :', this);
  }
  play(){
    console.log(`WEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shown','Dark Magic');