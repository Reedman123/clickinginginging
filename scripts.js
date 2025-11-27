let clicks = 0;
let upgrades = 0;
let price = 10;
document.getElementById('clicker').onclick = function () 
{
  clicks++
  document.getElementById("rizz").textContent = clicks
}
document.getElementById('upgrade').onclick = function ()
{
  if (clicks >= price) {
    clicks=clicks-price
    price=price+10
    upgrades++
    document.getElementById("cps").textContent = upgrades
    document.getElementById("rizz").textContent = clicks
  }
}
setInterval(function(){
  clicks=clicks+upgrades
  document.getElementById("rizz").textContent = clicks
},1000)

document.addEventListener("keypress", function(event) {
    if (event.key == "c") {
      let song = new Audio("steves-lava-chicken.mp3");
song.play();
    }
});

