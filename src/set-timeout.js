class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`woff woof, I am ${this.name}`)
  }
  barkLater() {
    setTimeout(function() {
      console.log(`woff woof, I am ${that.name}`)
    }, 1000)
  }
}

const dog = new Dog("Fido");
dog.bark();
// dog.barkLater();