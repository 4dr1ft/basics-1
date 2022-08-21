// console.log('Hello World!');

// function calk(operator, a, b) {
//     const isNotValid = (typeof a !== 'number') || (typeof b !== 'number') || (operator === '');
//
//     if(isNotValid) {
//         return 'Error' ;
//     } else if(operator === 'add') {
//         return a + b;
//     } else if(operator === 'sub') {
//         return a - b;
//     } else if(operator === 'multy') {
//         return a * b;
//     } else if(operator === 'div') {
//         return a / b;
//     }
// }
//
// console.log(calk('add', 33, 4));
//
// function Calk(operator, a, b) {
//     switch (operator) {
//         case 'add':
//             return a + b;
//             break;
//         case 'multy':
//             return a * b;
//             break;
//         case 'div':
//             return a - b;
//             break;
//     }
// }
//
// console.log(Calk('div', 15, 4));


// for (let i = 1; i < 20; ++i) {
//     console.log(i);
// }

const operations = {
    add: '+',
    sub: '-',
    multy: '*',
    div: '/',
};

function Calk(operator, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number') || (operator === '');

    if(isNotValid) {
        return 'Error' ;
    } else if(operator === operations.add) {
        return a + b;
    } else if(operator === operations.sub) {
        return a - b;
    } else if(operator === operations.multy) {
        return a * b;
    } else if(operator === operations.div) {
        return a / b;
    }
}

console.log(Calk('+', 5, 5));