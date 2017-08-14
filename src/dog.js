// @\flow disabled

class Dog {
  // name: string // Flow type-checking disabled

  constructor(name) { // constructor(name: string) { // Flow type-checking disabled
    this.name = name
  }
  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

// module.exports = Dog
export default Dog
