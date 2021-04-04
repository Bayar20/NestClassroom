const chalk = require('chalk')
const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Burger' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80,  name: 'Small snack' },
  ];

// Coins available
const coins = [500, 200, 100, 50, 20, 10]

const changeCalculator = (choice, amount) => {
    // console.log('Choice: ', choice, 'Paid amount: ', amount)
    let change = amount - choice.price
    let changeCoins = []
    coins.forEach(item => {
        if (change >= item){
            let count = parseInt(change / item)
            for (i = 0; i < count; i++) {
                changeCoins.push(item)
            }
            change -= item * count    
        } 
    })
    console.log(`product: ${chalk.green(choice.name.padEnd(15))} `, `change: `, changeCoins)
}

const vendingMachine = (products, amount, productNumber) => {
    if (productNumber < 1 || productNumber > 9) {
        console.log(chalk.red('Enter a valid product number!'))
    } else if (amount < products[productNumber - 1].price) {
        console.log(chalk.red('Not enough money for this product.'))
    } else if (amount % 10 !== 0) {
        console.log(chalk.red('You entered wrong amount! Money must be divisible by 10'))
    } else {
        choice = products.find(choice => choice.number === productNumber)
        changeCalculator(choice, amount);
    }
}

// vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
// vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
// vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

vendingMachine(products, 500, 0)
vendingMachine(products, 90, 1)
vendingMachine(products, 100, 1)
vendingMachine(products, 230, 2)
vendingMachine(products, 300, 3)
vendingMachine(products, 1255, 4)
vendingMachine(products, 1380, 5)
vendingMachine(products, 1000, 6)
vendingMachine(products, 220, 7)
vendingMachine(products, 700, 8)
vendingMachine(products, 1230, 9)



