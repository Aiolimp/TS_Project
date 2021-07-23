//1.初始类的泛型
class SelectGirl<T>{
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index];
    }
}
const selectGirl = new SelectGirl(["cici", "jacv", "vava"]);
console.log(selectGirl.getGirl(1))
//2.泛型中的继承
interface Girl {
    name: string;
}
class SelectGirl2<T extends Girl> {
    constructor(private girls: T[]) { }
    getGirl(index: number): string {
        return this.girls[index].name;
    }
}

const selectGirl2 = new SelectGirl([
    { name: "大脚" },
    { name: "刘英" },
    { name: "晓红" },
]);
console.log(selectGirl2.getGirl(1));
//3.泛型约束
class SelectGirl3<T extends number | string> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
  }
  
  const selectGirl3 = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
  console.log(selectGirl3.getGirl(1));
  
