const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]
const totalvalue=grades.reduce(function(grad,total){
    return grad + total
})

console.log(`The class average is:` + totalvalue)