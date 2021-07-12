// Write your solution in this file!

let employee = {

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee }

    newObject[key] = value
    return newObject

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value})
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = { ...employee }
    newObject[key] = value
    return Object.assign(employee, {[key]: value})

}