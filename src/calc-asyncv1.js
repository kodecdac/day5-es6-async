async function sum(n1, n2) {
  return n1 + n2;
}

function sum2(n1, n2) {
  return new Promise((resolve, reject) => {
    resolve(n1 + n2);
  });
}

let output = sum(1, 1);
let output2 = sum2(1, 1);
console.log(output, output2);
