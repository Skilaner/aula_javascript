
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://gmail.com/")
    window.location.href = "https://gmail.com/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}
/*function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));


/*var d = new Date();
alert(d);*/

/*var count;
for(count=0; count<=5; count++){
    alert(count);
}*/


/*var count = 0;
while (count <5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}*/


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas)
alert(frutas[1].nome)*/

/*var fruta = {nome:"maça", cor:"vermelha"}

console.log(fruta.nome);*/


//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));





/*var nome = "João Pedro";
var idade = "22";
var frase = "Japão é o melhor time do mundo"

//alert(nome + " tem " + idade " anos ");

console.log(nome);
console.log(idade)
console.log(frase.replace("Japão", "Brasil"))*/
