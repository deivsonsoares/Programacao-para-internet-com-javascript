function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}
function redirecionar(){
    //outra aba
    window.open("https://web.dio.me/");  
    //mesma janela (opcap de voltar)
    window.location.href = "https://web.dio.me/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse"
    //alert("Trocar texto")
}

function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}