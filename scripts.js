let clicks = 0;

document.getElementById('clicker').onclick = function () 
{
  clicks++
  document.getElementById("rizz").textContent = clicks
}


document.addEventListener("keypress", function(event) {
    if (event.key == "c") {
      let song = new Audio("steves-lava-chicken.mp3");
song.play();
    }
});
document.getElementById("rizz").textContent = clicks