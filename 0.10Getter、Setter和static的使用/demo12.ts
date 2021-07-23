//1.类的Getter和Setter
class Cici{
    constructor(private _age:number){}
    //getter属性的关键字是get 可以获取到用private修饰的属性 并且可以做出改变
    get getAge(){
        return this._age + 20;
    }
    set setAge(age:number){
        this._age = age - 5;
    }
}

const cici = new Cici(18);
cici.setAge = 50;
// console.log(cici.getAge)
console.log(cici.setAge)

//2.类中的static
//不想new出对象而直接使用方法， 用static声明的属性和方法，不需要进行声明对象，就可以直接使用
class Girl {
    static sayLove() {
      return "I Love you";
    }
  }
  console.log(Girl.sayLove());