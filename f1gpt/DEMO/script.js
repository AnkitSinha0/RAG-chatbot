// class Person{
//     constructor({name,age}){
//         this.name = name,
//         this.age = age;
//     }

// }
// const obj1 = {
//     age : 23,
//     name : 'haunts',
// }

// const obj = new Person(obj1);
// console.log(obj.name);

class Person{
    constructor(obj){
        this.name = obj.name,
        this.age = obj.age;
    }

}
const obj1 = {
    age : 23,
    name : 'haunts',
}

const obj = new Person(obj1);
console.log(obj.name);

