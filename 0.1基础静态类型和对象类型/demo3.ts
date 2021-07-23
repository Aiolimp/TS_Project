//对象类型
const xiaojiejie:{
    name:String,
    age:number
} = {
    name:'鸹貔',
    age:18
};
console.log(xiaojiejie.name)

//数组类型
const xiaoJieJies: String[] = ["谢大脚", "刘英", "小红"];
/* 
 const xiaoJieJies2: String[] = ["谢大脚", "刘英", 123];//报错：数组里内容必须是字符串
*/

//类类型
class  Person{}
const guapi:Person = new Person();
/*
guapi必须是一个Person类对应的对象才可以
*/ 

//函数类型

const shuaige:()=> String =() =>{
    return "鸹貔"
}