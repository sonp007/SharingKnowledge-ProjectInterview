function notify(r) {
  console.log("Your result is " + r);
}

function calculation(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

calculation(10, 20, notify);
