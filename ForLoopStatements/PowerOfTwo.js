// Get the command-line argument (n)
const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

console.log(`Table of Powers of 2 (Up to 2^${n}):`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}