let form = document.querySelector("form");
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let email = inputEmail.value
    let password = inputPassword.value
    if(validarUsuario(email,password)){
        console.log("Usuario logado com sucesso");
    }
    else{
        console.log("Erro");
    }
});

let emailFicticio = "lolódocreú@gmail.com";
let passwordFicticio = "03070929";

function validarUsuario(email,senha){
    if(email == emailFicticio && senha === ""){
        return true;
    
    }
    else if(email == "" || senha === ""){
         message.innferText = "Não deixe campos vazios";
        message.style.color = "red"
        return false;
    }
    else if (senha.length < 8) {
        message.innferText = "Senha muito curta";
        message.style.color = "red"
        return false;
    }
    else{
           message.innferText = "email ou senha incorretos";
        message.style.color = "red"
    }
}