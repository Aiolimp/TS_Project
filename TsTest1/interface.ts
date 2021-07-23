//接口
interface Person {
    firstName: string;
    lastName: string;
}
function greeter3(person: Person){
    return "Hello,"+person.firstName + " " + person.lastName;
}
let user3 = { firstName :"jack",lastName :'coco'};
document.body.innerHTML = greeter3(user3);
