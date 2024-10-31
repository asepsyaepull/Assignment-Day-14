// Definisikan type alias Person
type Person = {
    firstName: string;
    lastName: string;
};

// Fungsi getFullName yang menerima parameter bertipe Person
function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

// Contoh penggunaan fungsi getFullName
const person: Person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: John Doe