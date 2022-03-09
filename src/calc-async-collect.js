async function sum(n1, n2) {
  // some intensive computation
  return n1 + n2;
}

// collec the output from async
sum(1, 1).then((output) => console.log(output));
