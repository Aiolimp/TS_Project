//1.类的构造函数

class person{
  public name:String;
  constructor(name:String){
      this.name = name;
  }
}

const per = new person('Aiolimp')
console.log(per.name)

//简单写法
class person6{
    constructor(public name:String){
    }
}
const per6 = new person6('Aiolimp')
console.log(per.name)
//类继承中的构造器写法
//这就是子类继承父类并有构造函数的原则，就是在子类里写构造函数时，
// 必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。
// 就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
class Teacher2 extends person6{
    constructor(public age:Number){
        super('Aiolimp')
    }
}

const teacher2 = new Teacher2(18);
console.log(teacher2.name)
console.log(teacher2.age)


