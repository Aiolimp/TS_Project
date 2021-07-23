//1.函数无返回值时定义方法
function sayHello():void{
    console.log('hello')
}
/*
添加viod类型注解，表示没有任何返回值，此时加入任何返回值都会报错。
*/

//2.never返回值类型

/*
如果一个函数永远执行不完，就可以定义一个返回值为never
*/

//抛出异常
function ErrorFunction():never {
    throw new Error();
}
//死循环
function forNever():never{
    while (true){}
}

//3.函数参数为对象（解构）时  参数和函数都需要加上类型

function add ({one,two}:{one:number,two:number}) : number{
    return one + two;
}
const three2 = add({one:1,two:2})
