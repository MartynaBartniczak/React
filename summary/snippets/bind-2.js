var total = 0;
function foo(zupa) { total += zupa; }
function dooStuff() {
  for (var i = 0; i < 5; i += 1) {
    let f = foo.bind(null, i)
    setTimeout(f, 1000)
  }
  return total;
}
console.log(dooStuff());
console.log(total);
setInterval(function () {
  console.log(total);
}, 200);