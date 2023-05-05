const array = [9,8,7,6,5,4,3,2,1]

console.log('Original')
console.table(array)

const startMergeSort = (values, left, right) => {
    const merge = (values, left, middle, right) => {

        let helper = []

        for (let i = left; i <= right; i++) {
            helper[i] = values[i]
        }

        let i = left
        let j = middle + 1
        let k = left

        while (i <= middle && j <= right) {
            if (helper[i] <= helper[j]) {
                values[k] = helper[i]
                i++
            } else {
                values[k] = helper[j]
                j++
            }

            k++
        }

        while (i <= middle) {
            values[k] = helper[i]
            i++
            k++
        }

        while (j <= middle) {
            values[k] = helper[j]
            j++
            k++
        }

    }

    const mergeSort = (values, left, right) => {

        if (left >= right) {
            return
        } else {
            let middle = Math.floor((left + right)/2)

            mergeSort(values, left, middle)
            mergeSort(values, middle + 1, right)

            merge(values, left, middle, right)
        }

    }

    mergeSort(values, left, right)

    console.log('Merge')
    console.table(values)
}

startMergeSort(array, 0, array.length - 1)