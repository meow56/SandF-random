  function ranInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }
  
  var comic
  var url = ""

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
    comic = ranInt(1, 2985)
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
    comic = ranInt(2756, 2985)
    url = "https://www.samandfuzzy.com/" + comic
    window.open(url, "_blank")
    alert("Comic #" + comic + ": " + url)
  }
