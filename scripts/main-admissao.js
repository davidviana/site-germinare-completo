function leiaMais(butao){
    butao.previousSibling.classList.toggle('aparece');

    if (butao.previousSibling.classList.contains('aparece')){
        butao.innerHTML = ' - leia menos'
        console.log('menos')
    } else{
        butao.innerHTML = ' + leia mais'
    }
}

$('.carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1
});

// POPUP

// Get the modal
function modalFirst() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}}}

function modalSecond() {
    var modal = document.getElementById("myModal-dois");
    var btn = document.getElementById("myBtn-dois");
    var span = document.getElementsByClassName("close")[1];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}}}

function modalThird() {
    var modal = document.getElementById("myModal-tres");
    var btn = document.getElementById("myBtn-tres");
    var span = document.getElementsByClassName("close")[2];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}}}

function modalForth() {
    var modal = document.getElementById("myModal-quatro");
    var btn = document.getElementById("myBtn-quatro");
    var span = document.getElementsByClassName("close")[3];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}}}

modalFirst()
modalSecond()
modalThird()
modalForth()