//1.类的基本使用
class lady {
    conten = '帅哥';
    sayHello() {
        return this.conten;
    }
}
const goddess = new lady();
console.log(goddess.sayHello())

//类的继承（extends）

class man {
    content = '爸爸';
    sayFather(){
        return this.content;
    }
}

class boy extends man{
    name ="儿子";
    sayBoy(){
        return this.name
    }
}

const son = new boy();
console.log(son.sayBoy());
console.log(son.sayFather());

//类的重写

class boy2 extends man{
    sayFather(){
        return '二爸'
    }
}
const son2 = new boy2();
console.log(son2.sayFather())

// super关键字的使用(super关键字代表父类的方法)

class boy3 extends man{
    sayFather(){
        return super.sayFather() + '的儿子';
    }
}
const son3 = new boy3();
console.log(son3.sayFather())
