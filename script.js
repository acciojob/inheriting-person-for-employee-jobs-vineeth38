
//complete this code
class Person {
    age;
    name;
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
    set setAge(age){
        this.age=age;
    }
    get getName(){
        return this.name;
    }
}

class Student extends Person {
    constructor(name,age){
        super(name,age);
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name,age){
        super(name,age);
    }
    teach(){
        console.log(`${this.name} is teaching`);
    }
}

let student1=new Student('Ramesh',21);
console.log(student1);
// student1.teach();
student1.study();
let teacher1=new Teacher('Max',30);
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;