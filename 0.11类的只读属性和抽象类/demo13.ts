//1.类的只读属性readonly
class Person7 {
    public readonly _name: string;
    constructor(name: string) {
        this._name = name;
    }
}

const person7 = new Person7('jspang')
// person7._name= '谢广坤'  报错，_name是只读属性
console.log(person7._name)

//2.抽象类的使用
abstract class Girl {
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号

}
// 有了这个抽象类，三个类就可以继承这个类，然后会要求必须实现skill()方法，

class Waiter extends Girl {
    skill() {
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl {
    skill() {
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl {
    skill() {
        console.log('大爷，来个SPA全身按摩吧！')
    }
}

