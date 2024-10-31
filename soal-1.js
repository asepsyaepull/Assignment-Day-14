// Fungsi getFullName yang menerima parameter bertipe Person
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
// Contoh penggunaan fungsi getFullName
var person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: John Doe
