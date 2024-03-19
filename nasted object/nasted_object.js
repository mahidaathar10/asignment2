"use strict";
let coleagueName = {
    firstName: {
        name: "mahida",
        qualification: "intermediate",
        age: 20,
        siblings: 2,
        residence: "karachi/pakistan",
        interpassesfrom: "govt.girls degree college alnoor",
        secondName: {
            name: "sonia usman",
            class: "intermediate",
            age: 30,
            children: 2,
            thirdName: {
                name: "fizza",
                class: "intermediate",
                siblings: 2,
                age: 20,
            }
        }
    }
};
console.log(coleagueName.firstName.name);
console.log(coleagueName.firstName.qualification);
console.log(coleagueName.firstName.age);
console.log(coleagueName.firstName.siblings);
console.log(coleagueName.firstName.residence);
console.log(coleagueName.firstName.interpassesfrom);
