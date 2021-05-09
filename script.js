function ranInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}

var comic
var url = ""
var finalComic = 2985
var day = new Date()
var milliseconds = day.getTime()
var days = Math.floor((milliseconds - 25200000) / 86400000)
days -= 18756
weeks = Math.floor(days / 7) // The number of weeks since I made this on 2021-05-09, the Sunday between comics 2985 and 2986
finalComic += 3 * weeks
var dayOfWeek = day.getDay()
for (i = 0; i < 5; i += 2) {
  if (dayOfWeek > i) {
    finalComic++
  }
}

var anyComic = document.getElementById("anycomic")
var volumeZero = document.getElementById("volumezero")
var classic = document.getElementById("classic")
var noosehead = document.getElementById("noosehead")
var fyp = document.getElementById("fyp")
var avf = document.getElementById("avf")
var uti = document.getElementById("uti")
var re = document.getElementById("re")
var mi = document.getElementById("mi")
var sye = document.getElementById("sye")
var rttb = document.getElementById("rttb")
var postnms = document.getElementById("postnms")

anyComic.onclick = function() {
  comic = ranInt(1, finalComic)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

volumeZero.onclick = function() {
  comic = ranInt(1, 98)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

classic.onclick = function() {
  comic = ranInt(99, 565)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

noosehead.onclick = function() {
  comic = ranInt(566, 1045)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

fyp.onclick = function() {
  comic = ranInt(1046, 1232)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

avf.onclick = function() {
  comic = ranInt(1233, 1428)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

uti.onclick = function() {
  comic = ranInt(1429, 1606)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

re.onclick = function() {
  comic = ranInt(1607, 1835)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

mi.onclick = function() {
  comic = ranInt(1836, 2124)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

sye.onclick = function() {
  comic = ranInt(2125, 2227)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

rttb.onclick = function() {
  comic = ranInt(2227, 2757)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}

postnms.onclick = function() {
  comic = ranInt(2756, finalComic)
  url = "https://www.samandfuzzy.com/" + comic
  window.open(url, "_blank")
  alert("Comic #" + comic + ": " + url)
}
