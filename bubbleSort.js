const array = [9,8,7,6,5,4,3,2,1]

console.log('Original')
console.table(array)

const bubbleSort = (values) => {
    let aux = 0

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < (values.length - i - 1); j++) {
            if (values[j] > values[j+1]) {
                aux = values[j]
                values[j] = values[j+1]
                values[j+1] = aux
            }
        }
    }
    
    console.log('Bubble')
    console.table(values)
}

bubbleSort(array)