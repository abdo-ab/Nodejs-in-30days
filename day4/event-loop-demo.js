
// 1. Synchronous Code (Runs FIRST, blocks the Event Loop from starting)
console.log('1. Synchronous Code: Starting up!');

// 2. Timers Phase: setTimeout(0) schedules a callback for the next tick of the timers phase.
setTimeout(() => {
    console.log('3. Asynchronous Code: setTimeout callback executed (Timers Phase)');
}, 0);
 // Note: A delay of 0 milliseconds is often treated as "as soon as possible"

// 3. Check Phase: setImmediate() schedules a callback for the Check phase.
setImmediate(() => {
    console.log('4. Asynchronous Code: setImmediate callback executed (Check Phase)');
});

// 4. More Synchronous Code
console.log('2. Synchronous Code: Finishing main script execution.');

/*
To run this file, navigate to the directory in your terminal and run:
node event-loop-demo.js

Output is generally:
1. Synchronous Code: Starting up!
2. Synchronous Code: Finishing main script execution.
3. Asynchronous Code: setTimeout callback executed (Timers Phase)  <-- This order can sometimes flip
4. Asynchronous Code: setImmediate callback executed (Check Phase) <-- This order can sometimes flip

Key takeaway: All synchronous code must finish before any asynchronous callbacks can be processed.
*/
