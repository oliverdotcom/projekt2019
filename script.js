onload = start;

function start() {
    var i = 1;

    function Move() {
        i = (i % 5) + 1; // 4 is the Number of image in slider
        document.getElementById('i' + i).checked = true;
    }


    setInterval(Move, 4000); /* Adjust time before picture switch */
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
