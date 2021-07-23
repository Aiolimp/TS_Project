//1.元祖的基本应用(元祖一般作用于CVS类型的文件)

const people1 : (String | number)[] = ['熊大','熊二',20]

const people2 : (String | number)[] = ['熊大',20,'熊二'] //数组中元素掉换位置不会报错

//使用元祖将固定数组中的元素类型
// const people3 : [String,String,Number] = ['熊大',20,'熊二'] //报错

const people4 : [String,String,Number] = ['熊大','熊二',20,] 


