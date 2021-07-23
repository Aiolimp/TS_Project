//1.简单的类
class Person1 {
    name: string;
}

const person1 = new Person1();
person1.name = "jspang.com";

console.log(person1.name);
//2.public 允许在类的内部和外部被调用.
class Person2 {
    public name:string;
    public sayHello(){
        console.log(this.name + ' say Hello') //this.name就是类的内部调用
    }
}

//-------以下属于类的外部--------
const person2 = new Person2()
person2.name = 'jspang.com'
person2.sayHello()
console.log(person2.name)

//3.private  只允许再类的内部被调用，外部不允许调用
class Person3 {
    private name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}
//-------以下属于类的外部--------
const person3 = new Person3()
// person3.name = 'jspang.com'    //此处报错
person3.sayHello()
// console.log(person3.name)  //此处报错

//4.protected   允许在类内及继承的子类中使用

class Person {
    protected name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}

class Teacher extends Person{
    public sayBye(){
        this.name;
    }
}
