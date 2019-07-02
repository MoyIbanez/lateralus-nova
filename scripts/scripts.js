let slider = document.getElementById("slides");

function videoFinished() {
    setTimeout(function() {
        window.location.href = "menu.html";
        console.log("Redirigiendo");
    }, 11000);
}

function nextSlide() {

    console.log("next");

}

function prevSlide() {

    console.log("prev");

}