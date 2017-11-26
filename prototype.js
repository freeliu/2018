function People(age) {
    this.age = age || 1
}

var p = new People()

var someOne = Object.create(p)
someOne.name = "olive"

console.dir(p)

console.dir(someOne)

function Adult(age, sex) {
    People.call(this, age)
    this.sex = sex;
    // this.prototype = Object.create(People.prototype)
    // this.prototype.constructor = Adult
}

Adult.prototype=Object.create(People.prototype)
// Adult.prototype.constructor=Adult

var ad = new Adult(30, "男")

console.dir(ad)