// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dolar should be 106.5 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(1)

    // is 1 dolar son 0.83 Euro, entonces 0.83 euros deberian ser = (0.83 * 127.9)
    const expected = 1/1.2 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})
// Hola
test("One Thousand Yen should be 6.25 GBP", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(1000)

    // is 1000 Yen son 7.81 Euro, entonces 7.81 euros deberian ser = (7.8186082877247851 * 0.8)
    const expected = 7.8186082877247851 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})