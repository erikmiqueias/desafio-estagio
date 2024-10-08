function recursiveCalculation(n: number): number {
  if (n <= 1) {
    return n;
  }
  return recursiveCalculation(n - 1) + recursiveCalculation(n - 2);
}

function iterativeCalculation(n: number): number {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

const n = 10;

console.log(recursiveCalculation(n));
console.log(iterativeCalculation(n));
