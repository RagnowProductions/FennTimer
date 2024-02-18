var scramble = ""
var Possible = ["F", "R", "U", "B", "L", "D"]
var Modifiers = ["", "'", "2"]
var i = 1
while (i != 20);
  var scramble = scramble + " " + Possible[Math.floor(Math.random() * Possible.length)] + Modifiers[Math.floor(Math.random() * Modifiers.length)]
  i = i + 1
console.log(scramble)
