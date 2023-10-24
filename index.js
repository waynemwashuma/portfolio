let a = []

function pairTest(a, b) {
  return (a + b) * (a + b + 1) / 2 + b
}

function testAll(no) {
  for (var i = 0; i < no; i++) {
    for (var j = 0; j < no; j++) {
      let e = pairTest(i, j)
      if (a.includes(e)) {
        console.log("found a repeat pair")
      }
      a.push(e)
    }
  }
}


testAll(10)