//1.一般数组类型的定义
const numberArr = [1, 2, 3] //TS可以通过类型推断出来是number类型

const numberArr2: number[] = [1, 2, 3]  //类型注解

const StringArr: String[] = ['1', '2', '3']

const undefinedArr: undefined[] = [undefined, undefined];

//多个类型的情况

const arr: (String | number)[] = [1, '2']

//2.数组中对象类型的定义

//类型别名 （type）

type man = { name: String, age: number }

const Shuaige: man[] = [
    { name: "吴彦祖", age: 18 },
    { name: "吴亦凡", age: 18 },
]

//class类进行定义也可以

class womam { name: String; age: number }

const xiaojj: womam[] = [
    { name: '刘亦菲', age: 20 }
]

