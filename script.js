function ranInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}

var comic
var url = "https://www.samandfuzzy.com/"
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

window.onload = function() {
  var anyComic = document.getElementById("anycomic")
  var volumeZero = document.getElementById("volumezero")
  var classic = document.getElementById("classic")
  var noosehead = document.getElementById("noosehead")
  var nms = document.getElementById("nms")
  var fyp = document.getElementById("fyp")
  var avf = document.getElementById("avf")
  var uti = document.getElementById("uti")
  var re = document.getElementById("re")
  var mi = document.getElementById("mi")
  var sye = document.getElementById("sye")
  var rttb = document.getElementById("rttb")
  var postnms = document.getElementById("postnms")

  function openComic(min,max) {
    comic = ranInt(min, max)
    window.open(url+comic, "_blank")
  }

  anyComic.onclick = function() {
    openComic(1, finalComic)
  }

  volumeZero.onclick = function() {
    openComic(1, 98)
  }

  classic.onclick = function() {
    openComic(99, 565)
  }

  noosehead.onclick = function() {
    openComic(566, 1045)
  }

  nms.onclick = function() {
    openComic(1046, 2757)
  }

  fyp.onclick = function() {
    openComic(1046, 1232)
  }

  avf.onclick = function() {
    openComic(1233, 1428)
  }

  uti.onclick = function() {
    openComic(1429, 1606)
  }

  re.onclick = function() {
    openComic(1607, 1835)
  }

  mi.onclick = function() {
    openComic(1836, 2124)
  }

  sye.onclick = function() {
    openComic(2125, 2227)
  }

  rttb.onclick = function() {
    openComic(2228, 2757)
  }

  postnms.onclick = function() {
    openComic(2758, finalComic)
  }
}