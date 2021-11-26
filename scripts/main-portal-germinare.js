function mostrarSenha() {
    var senha = document.getElementById("password")
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function validaUser() {
    let useradm = "germinares"
    var id = document.getElementById("user")

    if(useradm === id.value) {
        user.classList.add("correct")
        user.classList.remove("incorrect")
        limpaErro()

        var msg = document.getElementById("user-msg")
        msg.style.display = "none"
    } else {
        user.classList.remove("correct")
        user.classList.add("incorrect")
        mensagemErro()
    }
}

function validaPassword() {
    let senhaadm = "escola2021"
    let senha = document.getElementById("password")

    if(senhaadm === senha.value) {
        password.classList.remove("incorrect")
        password.classList.add("correct")
        limpaErro()

        var msg = document.getElementById("password-msg")
        msg.style.display = "none"
    } else {
        password.classList.remove("correct")
        password.classList.add("incorrect")
        mensagemErros()
    }
}

function enterPage() {
    if(password.classList.contains("correct") && user.classList.contains("correct")){
        var link = document.getElementById("jezus")
        link.href = "page-workspace.html"
    } else {
        return
    }
}

function mensagemErro() {
    var x = document.getElementById("user-msg")
    x.innerText = `
    Usuário incorreto
    `
}

function mensagemErros() {
    var x = document.getElementById("password-msg")
    x.innerText = `
    Senha incorreta
    `
}

function limpaErro() {
    var x = document.getElementById("user-msg")
    x.innerText = `
    `
}