/**
 * Menu
 * Coffee $2
 * Sandwich $5
 * Salad $4
 * Lemon Cake $3
*/

// "you ordered XYZ. That will be XYZ dollars"

function orderItem(item) {
    let priceStr = ''

    switch (item) {
/*
Challenge:
   1. Add the remaing menu items as cases.
*/
        case 'coffee':
            priceStr = '$2'
            break
        case 'sandwich':
            priceStr = '$5'
            break
        case 'salad':
            priceStr = '$4'
            break
        case 'lemon cake':
            priceStr = '$3'
            break
        default:
            return `I'm sorry, ${item} is not on the menu today.`    
    }
    return `You ordered ${item}. That will be ${priceStr}.`
}

console.log(orderItem('tea'))