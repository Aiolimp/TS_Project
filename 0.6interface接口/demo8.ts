//1.接口的使用
//将两个重复的类型注解，定义成统一的接口
interface Girl {
    name: string;
    age: number;
    bust: number;
}
const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
};

screenResume(girl);
getResume(girl);

//2.接口和类型别名的区别
//类型别名可以直接给类型，比如string，而接口必须代表对象。


//3.接口非必选值得定义 
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
  }
  const getResum2 = (girl: Girl) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
    girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);//:前  面添加？ 控制显示和不显示
  };
  getResum2(girl)
  
  //4.允许加入任意值
  interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;//这个的意思是，属性的名字是字符串类型，属性的值可以是任何类型。
  }

  const girl2 = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
  };
  //5.接口里的方法
  interface Girl3 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname2: string]: any;
    say(): string;
  }

  const girl3 = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    },
  };
  //6.接口和类的约束
  class XiaoJieJie implements Girl3 {
    name = "刘英";
    age = 18;
    bust = 90;
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    }
  }

  //7.接口间的继承
  interface Teacher extends Girl {
    teach(): string;
  }

  const girl4 = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    },
    teach() {
      return "我是一个老师"; //必须添加teach()方法
    },
  };
  