console.log("Está pronto!")

var nome;
var senha;
var nomeCerto = "Vanessa";
var senhaCerto = "Amora";

function handleInput(){
    nome = document.getElementById("nome").value;
    console.log("nome!", nome)
}

function handleInputo(){
    senha = document.getElementById("senha").value;
    console.log("senha!", senha)
}

function login(){
    console.log(`nome: ${nome} senha: ${senha}`)
    if (nome == nomeCerto){
        if(senha == senhaCerto){
            window.location="https://www.netflix.com"
        }
        else{
            alert(`Senha incorreta!`)
        }

    }
    else{
        alert(`Usuário Drogado!`)
    }
        
    
}

