//OBJECTS

let user1 = {  //apply value of the memory cell
    name: "Bob",
    age: 23,
    array: [1, 2, 3]
}
//command to create an object
//command creates an object in a browser's memory
//the number of memory cell (link) with the object is written to the variable


let user2 = user1
//copy link to the object, but not the object

// user2 = 7
//change link to the object to new value
//no changes in the object in user1

console.log(user1 === user2) //true

const copyObject = {...user1} //без вложенности

const deepCopyObject = {...user1, friends: [...user1.array, "NewValue for Array"]}
// result:
let result = {
    age: 23,
    array: [1, 2, 3],
    friends: [1, 2, 3, 'NewValue for Array'],
    name: "Bob"
}

//ARRAY's methods MAP & FILTER

// ------------MAP method

const students = [
    {
        name: "B",
        score: 5,
        isStudent: false
    }, {
        name: "A",
        score: 4,
        isStudent: false
    }
]

//create a function which goes through all array's elements and perform action.
//which action? action based on send additional function (callback)

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}
//map-method:
// 1) creates new array
// 2) goes through each element anf change it based on our function
// 3) returns new array with changed elements

const getNames = (object) => object.name
const getScores = (object) => object.score
const getStudent = (object) => ({...object, isStudent: true})

//three variants with the same

getMappedArray(students, getNames)
getMappedArray(students, (obj) => obj.name)
students.map((obj) => obj.name)

// - - - -
function selfMadeMap(func) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i])
    }
    return result
}

Array.prototype.selfMadeMap = selfMadeMap
students.selfMadeMap(getNames)

// ------------FILTER method

const getFilteredArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}
//two variants with the same
getFilteredArray(students, st => st.age >= 21)
students.filter(st => st.age >= 21)

// ------------PUSH method

const getPushedArray = (array, newElement) => {
    array[array.length] = newElement
    return array.length;
};