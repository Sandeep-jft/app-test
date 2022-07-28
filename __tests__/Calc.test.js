
const Calculator = require('../src/calculator/Calculator')

describe('Calculator functionality',()=> {
    test('It should return addition of two integers',()=>{
        const obj = new Calculator();
        const result = obj.addition(3,5);
        expect(result).toBe(8);
    })
    test('It should return sub of two integers',()=>{
        const obj = new Calculator();
        const result = obj.subtraction(3,5);
        expect(result).toBe(-2);
    })
})