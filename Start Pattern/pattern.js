let rows = 6;

let output = "";

for (let n = 1; n <= rows; n++) {

  for (let numbers = 1; numbers <= n; numbers++) {

    pattern += "*";
  }
  output+= "\n";
}
console.log(pattern);