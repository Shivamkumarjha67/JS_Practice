const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

console.log(`Powers of 2 up to 2^${n} or 256:`);

let i = 0;
let power = 1; // 2^0 = 1

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}