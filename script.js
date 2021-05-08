function ranInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}

var comic = ranInt(1,2985)
var url = "https://www.samandfuzzy.com/"+comic
window.open(url,"_blank")
alert("Comic #" + comic + ": " + url)
