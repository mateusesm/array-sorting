const array = [9,8,7,6,5,4,3,2,1]

console.log('Original')
console.table(array)

const startQuickSort = (values, left, right) => {

    const partition = (values, left, right) => {
        let pivot = values[left]
        let i = left
        let aux = 0
    
        for (let j = left + 1; j <= right; j++) {
            if (values[j] <= pivot) {
                i += 1
                aux = values[j]
                values[j] = values[i]
                values[i] = aux
            }
        }
    
        aux = values[left]
        values[left] = values[i]
        values[i] = aux
    
        return i
    }
    
    const quickSort = (values, left, right) => {
        if (left < right) {
            let indexPivot = partition(values, left, right)
            quickSort(values, left, indexPivot - 1)
            quickSort(values, indexPivot + 1, right)
        }
    }

    quickSort(values, left, right)

    console.log('Quick')
    console.table(values)
}

startQuickSort(array, 0, array.length - 1)