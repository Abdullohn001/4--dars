
// 1-masala
// let k = prompt("k sonini kiriting:");
// let n = prompt("n sonini kiriting:");

// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

//2-masala
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let count = 0;
//
// for (let i = a; i <= b; i++) {
//  console.log(i);
//   count++;
//}
//console.log(`a dan b gacha ${count} ta son bor.`);

//3-masala
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let count = 0;

// for (let i = b - 1; i > a; i--) {
//   console.log(i);
//   count++;
// }
// console.log(`a dan b gacha ${count} ta son bor.`);

// 4-masala

// let price = +prompt(
//   "Narx kiriting:"
// );
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   let totalPrice = i * price;
//   console.log(`${i} kg uchun narx: ${totalPrice}`);
//   sum += totalPrice;
// }

// console.log(`Jami narx: ${sum}`);

// 5- masala

// let price = parseFloat(
//   prompt(
//     "Narxni kiriting va 0.1 kg dan 1 kg gacha bo'lgan narxlar ro'yhatini oling:"
//   )
// );
// let sum = 0;

// for (let i = 0.1; i <= 1; i += 0.1) {
//   let totalPrice = i.toFixed(1) * price;
//   console.log(`${i.toFixed(1)} kg uchun narx: ${totalPrice}`);
// }

// 6- masala

// let price = parseFloat(
//   prompt(
//     "Narxni kiriting va 0.1 kg dan 1 kg gacha bo'lgan narxlar ro'yhatini oling:"
//   )
// );
// let sum = 0;

// for (let i = 1; i <= 2; i += 0.2) {
//   let totalPrice = i.toFixed(1) * price;
//   console.log(`${i.toFixed(1)} kg uchun narx: ${totalPrice}`);
// }

// 7-masala
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 0;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {
//     sum += i;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 8-masala

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 1;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {

//     sum *= i;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 9-masala

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 0;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {
//     sum += i ** 2;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 10-masala

// let n = +prompt("n sonini kiriting:");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
//   console.log(`1 / ${i}`);
// }
// console.log(sum);

// 11-masala

// let n = +prompt("n sonini kiriting:");
// let sum = 0;

// for (let i = 0; i<=n; i++){
//   sum+=(n+i)**2
// }
// console.log(sum)

// 12-masala
// let n = +prompt("n sonini kiriting:");
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum *= 1 + i / 10;
// }
// console.log(`${sum.toFixed(3)}`);