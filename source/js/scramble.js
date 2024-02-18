var scramble = ""
var Possible = ["F", "R", "U", "B", "L", "D"]
var Modifiers = ["", "'", "2"]
var i = 1
for (i in 20);
  var scramble = scramble + " " + Math.random(Possible) + Math.random(Modifiers)
  i = i + 1
console.log(scramble)
