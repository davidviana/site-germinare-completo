///ACADEMIAS:

function friboiProfessores() {
    var arrow = document.querySelector('.arrow')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("friboi");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function searaProfessores() {
    var arrow = document.querySelector('.arrow-seara')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("seara");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function swiftProfessores() {
    var arrow = document.querySelector('.arrow-swift')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("swift");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function originalProfessores() {
    var arrow = document.querySelector('.arrow-original')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("original");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function picpayProfessores() {
    var arrow = document.querySelector('.arrow-picpay')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("picpay");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function germinareProfessores() {
    var arrow = document.querySelector('.arrow-germinare')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("germinare");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}