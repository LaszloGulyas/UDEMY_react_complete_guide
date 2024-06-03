export const runWithSpread = () => {
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4];
    console.log('Using spread:');
    console.log(newNumbers);
}

export const runWithoutSpread = () => {
    const numbers = [1, 2, 3];
    const newNumbers = [numbers, 4];
    console.log('No spread:');
    console.log(newNumbers);
}

const firstPerson = {
    name: 'test-name'
}

const secondPerson = {
    ...firstPerson,
    age: 26
}

export const printSecondPersonWithSpread = () => {
    console.log('Second person:');
    console.log(secondPerson);
}

export const filterWithRestOperator = (...args) => {
    return args.filter(el => el === 1);
}

export const copyObjectWithSpread = () => {
    const myObject = {
        name: 'eredeti',
        age: 25
    }

    let newObject;
    newObject = {
        ...myObject
    }

    myObject.name = 'változott';
    console.log(newObject.name);
    newObject = myObject;
    console.log(newObject.name);
}