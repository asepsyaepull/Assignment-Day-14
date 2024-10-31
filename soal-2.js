// Fungsi wrapInArray menggunakan generic type T
function wrapInArr(item) {
    return [item];
}
// Contoh penggunaan fungsi wrapInArray
var numbArray = wrapInArr(5); // Tipe hasil: number[], Output: [5]
var strArray = wrapInArr("hello"); // Tipe hasil: string[], Output: ["hello"]
var objArray = wrapInArr({ name: "Alice" }); // Tipe hasil: { name: string }[], Output: [{ name: "Alice" }]
console.log(numbArray); // Output: [5]
console.log(strArray); // Output: ["hello"]
console.log(objArray); // Output: [{ name: "Alice" }]
