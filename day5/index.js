// Day 5 — Event Loop & Async Model (Node.js)

// 1. Synchronous Code runs FIRST
console.log('1. Synchronous: Starting up!');

// 2. Timers Phase: setTimeout(0) schedules for "timers"
setTimeout(() => {
  console.log('5. Timers: setTimeout(0) callback (Timers Phase)');
}, 0);

// 3. Check Phase: setImmediate() runs in the "check" phase
setImmediate(() => {
  console.log('6. Check: setImmediate() callback (Check Phase)');
});

// 4. Microtasks: process.nextTick runs before Promise microtasks in Node
process.nextTick(() => {
  console.log('3. Microtask: process.nextTick (runs before Promises)');
});

// 5. Microtasks: Promise.then runs after nextTick, before timers/immediate
Promise.resolve().then(() => {
  console.log('4. Microtask: Promise.then');
});

// 6. More Synchronous Code
console.log('2. Synchronous: Finishing main script execution.');

 