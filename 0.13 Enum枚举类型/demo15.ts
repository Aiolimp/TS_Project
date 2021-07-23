enum Status {
    MASSAGE,
    SPA,
    DABAOJIAN,
}

function getServe(status: any) {
    if (status === Status.MASSAGE) {
        return "massage";
    } else if (status === Status.SPA) {
        return "spa";
    } else if (status === Status.DABAOJIAN) {
        return "dabaojian";
    }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);

const result2 = getServe(2);//传入2

console.log(`我要去${result}`);//打印DABAOJIAN，枚举类型是有对应的数字值的，默认是从 0 开始的

console.log(Status.MASSAGE); //0
console.log(Status.SPA); //1
console.log(Status.DABAOJIAN); //2

//如果不想从0开始
// enum Status {
//     MASSAGE = 1,
//     SPA,
//     DABAOJIAN,
//   }
console.log(Status.MASSAGE, Status[1]);  //可以通过下标 得到枚举的值。
