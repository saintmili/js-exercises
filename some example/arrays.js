let my_array = []
my_array.push('first')
my_array.push(2)
my_array.push(true)
for (i in my_array) {
    console.log(my_array[i])
};
console.log(my_array)
console.log(my_array.toString())
console.log(my_array.join(', '))

let my_string = my_array.join(', ')
console.log(my_string.split(', '))