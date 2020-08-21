//creating object using a constructor function prototype

function User(_firstName, _lastName, _gender, _age){
    this._firstName = _firstName
    this._lastName = _lastName
    this._gender= _gender
    this._age = _age
}
User.prototype.country = "Rwanda"

// creting Object using Object literal

const User1 = {
    _firstName: "James",
    _lastName: "Ouma",
    _gender: "Male",
    _age: 36
}

let james = new User('James', 'Ouma', 'male', 36)
console.log(`First Name is : ` +james._firstName +` 
Last Name is: `+james._lastName+ ` 
of Gender : `+james._gender+` 
Aged : `+james._age+` Years of age`)



console.log(Object.keys(james))
console.log(Object.values(james))
console.log(Object.entries(james))
console.log(Object.getOwnPropertyNames(james))
console.log(Object.getPrototypeOf(james))
