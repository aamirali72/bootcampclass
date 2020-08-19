var cloudElement = document.getElementById("cloud-div")


var animatedElem = cloudElement.animate([
  { transform: 'translate(1200px,0)' },
  { transform: 'translate(-1400px,0)' },

], {
  duration: 5000,
  iterations: Infinity,
  playbackRate: -4,
})

var planeElement = document.getElementById("plane-div")

var planInAnimation = planeElement.animate(
  [
    { transform: 'translate(0,-400px)' },
    { transform: 'translate(600px,-200px)' },
    { transform: 'translate(800px,0)' },
    { transform: 'translate(1000px,200px)' },
    { transform: 'translate(1200px,200px)' },
    { transform: 'translate(100%,200px)' },
  ],
  {
    duration: 10000,
    iterations: Infinity,
  }
);