async function sum(n1, n2) {
  // some intensive computation
  return n1 + n2;
}

// collec the output from async
async function main() {
  let output = await sum(1, 1);
  console.log(output);
}

main();
