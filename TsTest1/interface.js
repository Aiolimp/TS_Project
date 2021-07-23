function greeter3(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "jack", lastName: 'coco' };
document.body.innerHTML = greeter3(user3);
