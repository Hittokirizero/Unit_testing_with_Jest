// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (a) => {
    return (a / oneEuroIs.USD) * oneEuroIs.JPY
}

const fromEuroToDollar = (a) => {
    return oneEuroIs.USD * a
}

const fromYenToPound = (a) => {
    return oneEuroIs.GBP * (a / oneEuroIs.JPY)
}

module.exports = { sum, fromDollarToYen ,fromEuroToDollar, fromYenToPound };
