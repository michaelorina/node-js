const person = {
    name:'Michael',
    age: 21,
    school: 'TUK',

    greet(){
        console.log("Hello, my name is " + this.name);
    },

    age(){
        console.log("My age is "+ this.age);
    },

    school(){
        console.log("I am walking to my school " + this.school);
    }
};

person.greet();
person.age();
person.school();
person.name;