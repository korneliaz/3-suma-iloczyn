function sumMultiple(array) {
    let sum = 0
    let multiple = 1

    array.forEach(function(element) {
        sum = sum + array + element
        multiple = multiple * element
        // console.log(multiple)
        console.log(array[element])

    })
    console.log("suma: " + sum + "mnożenie: " + multiple)

}
sumMultiple([1,2,3,4,5,6])












// let array = [0,1,2,3,4,5];
// array.forEach( function(element, index)) {

// }

// let arrNumbers = [0, 1, 2, 3, 4, 5]
// arrNumbers.forEach = ( function(element, index)) {

// }



// console.log(odwrocString("Akademia108"));