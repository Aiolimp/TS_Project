//类，支持基于类的面向对象编程
class Student {
    fullName: string;
    //构造函数的参数上使用public等同于创建了同名的成员变量。
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
//类和接口可以一起共作
interface Person {
    firstName: string;
    lastName: string;
}

function greeter4(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter4(user4);