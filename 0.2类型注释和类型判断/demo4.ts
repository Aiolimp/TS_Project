//type annotation 类型注解
let count2: number;
count2 = 123;

/*
这段代码就是类型注解，意思是显示的告诉代码，我们的count 变量就是一个数字类型，这就叫做类型注解
*/


//type inferrence 类型推断
let countInference = 123;  //TS可以自动进行类型推断


// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

//不需要类型注解：
const one =1;
const two = 2;
const three = one + two;

//需要类型注解：

function getTotal(one,two){
    return one + two;
}

const total = getTotal(1,2);//此时one和two隐式的包含'any'属性，必须加上类型注解



function getTotal2(one:number,two:number){
    return one + two;
}
const total2 = getTotal2(1,2) //one 和 two加上类型注解后 taotal2会自动通过类型判断，分析出变量的类型。


//TypeScript 也可以推断出对象中属性的类型
const XiaoJieJie = {
    name: "刘英",
    age: 18,
  };

