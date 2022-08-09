let result = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    result += "* ";
  }

  result = result.trim() + "\n";
}

console.log(result);
