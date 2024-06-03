export const runArrayDestructure = () => {
    const numbers = [6, 4, 2];
    let num1;
    let num2;
    [num1, num2] = numbers;
    console.log(num1, num2);
}

export const runObjectDestructure = () => {
    const myPersona = {
        name: 'Laci',
        age: 33,
        home: 'home'
    }

    let {name, age} = myPersona;
    console.log('name:' + name);
    console.log('age:' + age);
}