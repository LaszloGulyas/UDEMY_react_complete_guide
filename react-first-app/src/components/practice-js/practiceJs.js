import {Person} from "./classes/classes";
import {PersonOther} from "./classes/classesES7Style";
import * as spreadAndRest from "./operators/spreadAndRest";
import * as destructuring from "./destructuring/destructuring";

const logHealthiness = livingObject => {
    console.log('The person is '
        + (livingObject.isAlive ? 'alive' : 'dead')
        + '.');
}

const myPerson = new Person('default test name');
myPerson.name = 'test-class-name';
console.log(myPerson.name);
console.log(myPerson.nameToUpperCase());
logHealthiness(myPerson);
myPerson.die();
logHealthiness(myPerson);

console.log('-----');

const myPersonOther = new PersonOther();
myPersonOther.name = 'default person other name';
myPersonOther.nameToUpperCase();
console.log(myPersonOther.name);

console.log('-----');

spreadAndRest.runWithSpread();
spreadAndRest.runWithoutSpread();
spreadAndRest.printSecondPersonWithSpread();
console.log(spreadAndRest.filterWithRestOperator(0, 1, 2, 3));
spreadAndRest.copyObjectWithSpread();

console.log('-----');

destructuring.runArrayDestructure();
destructuring.runObjectDestructure();
