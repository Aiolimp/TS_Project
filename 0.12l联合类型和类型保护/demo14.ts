//1.联合类型    只有联合类型存在的情况下，才需要类型保护。
interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher {
    anjiao: boolean;
    skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
    // animal.say();  //会报错
}
//2.类型保护

//类型断言  通过断言animal as Teacher
function judgeWho2(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill();
    } else {
        (animal as Waiter).say();
    }
}

//in语法
function judgeWhoTwo(animal: Waiter | Teacher) {
    if ("say" in animal) {
        animal.say();
    } else {
        animal.skill();
    }
}
//typeof 语法
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }
    return first + second;
} 
//instanceof 语法  instanceof 只能用在类上。
class NumberObj {
    count: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
