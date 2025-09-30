
// Example 1: Try/catch synchronous error
function divide(a, b) {
if (b === 0) throw new Error("Cannot divide by zero");
return a / b;
}

try {
console.log("Result:", divide(10, 2));
console.log("Result:", divide(5, 0));
} catch (err) {
console.error("Caught error:", err.message);
}

// Example 2: Handling async errors with Promises
function fetchData(id) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (id === 0) reject(new Error("Invalid ID"));
else resolve({ id, name: `mame${id}` });
}, 100);
});
}

fetchData(1)
.then((data) => console.log("Fetched:", data))
.catch((err) => console.error("Promise error:", err.message));

// Example 3: Async/await with try/catch
async function run() {
try {
const user = await fetchData(2);
console.log("Async/await fetched:", user);

await fetchData(0);  


} catch (err) {
console.error("Async/await error:", err.message);
}
}

run();

// Example 4: Debugging with node --inspect
console.log("Debugging example, set a breakpoint here.");
let sum = 0;
for (let i = 0; i < 5; i++) {
sum += i;
}
console.log("Sum =", sum);