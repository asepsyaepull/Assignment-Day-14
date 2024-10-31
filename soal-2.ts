// Fungsi wrapInArray menggunakan generic type T
function wrapInArr<T>(item: T): T[] {
    return [item];
}

// Contoh penggunaan fungsi wrapInArray
const numbArray = wrapInArr(5); // Tipe hasil: number[], Output: [5]
const strArray = wrapInArr("hello"); // Tipe hasil: string[], Output: ["hello"]
const objArray = wrapInArr({ name: "Alice" }); // Tipe hasil: { name: string }[], Output: [{ name: "Alice" }]

console.log(numbArray); // Output: [5]
console.log(strArray); // Output: ["hello"]
console.log(objArray); // Output: [{ name: "Alice" }]