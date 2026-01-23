let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6];

a1.forEach((ele) => {
  if (a2.includes(ele)) {
    console.log(ele);
  }
});
