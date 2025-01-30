// iteration methods
const numms = [1, 2, 3, 4, 5];
console.log(numms.length);

//for loop

for (let i = 0; i < numms.length; i++) {
  const element = numms[i];
  console.log(i);
  console.log(element);
}

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

//forEach
numms.forEach(function (num, index) {
  console.log(index);
  console.log(num);
});
numms.forEach((num, index) => {
  console.log(num);
  console.log(index);
});

//filter method
const filter = numms.filter((value) => {
  if (value < 3) {
    return value;
  }
});

console.log(filter);
console.log(numms);

//map method

const modified = numms.map((value) => {
  return value + 1;
});
console.log(numms);
console.log(modified);

//reduce -aggregates all the values in an array

const sum = numms.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  return prev + curr;
}, 0);
console.log(sum);
