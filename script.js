onload = strt;

/* Slideshow */

function start() {
    var i = 1;

    function Move() {
        i = (i % 5) + 1;
        document.getElementById('i' + i).checked = true;
    }


    setInterval(Move, 4000);
}

/* Navigation menu */

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
