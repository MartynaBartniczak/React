var total = 0;
function dooStuff() {
  for (var i = 0; i < 10; i += 1) {
    setTimeout(function () {
      total += i
    }, 1000)
  }
  return total;
}
console.log(dooStuff());
console.log(total);
setInterval(function () {
  console.log('weteran: ', total);
}, 200);
setTimeout(function () {
  console.log('kaboom');
}, 400);