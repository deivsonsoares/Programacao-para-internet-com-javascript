

//exemplificando a diferenca da variavel global * de escopo
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);


//funcao troca palavra na frase com replace + funcao soma
/*
function soma(n1,n2) {
    return n1 + n2;
}

function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/