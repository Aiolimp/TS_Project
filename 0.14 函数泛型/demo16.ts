//1.初始泛型概念   
function join<t>(name: t, age: t) {
    return `${name}${age}`
}

const add2 = join<String>("hhhh", "哦哦哦")
console.log(add2)

//2.泛型中数组的使用
//第一种是直接使用[]

function myFn<T>(params: T[]) {
    return params
}

myFn<String>(["666", "777"])

//第二种是使用Array<泛型>

function myFn2<T>(params: Array<T>) {
    return params
}

myFn2<String>(["www", "ada"])

//3.多个泛型的定义

function myFn3<T, m>(name: T, age: m) {
    return `${name}${age}`
}

myFn3<string, number>("aaa", 123)

