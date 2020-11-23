//un spaghetti de codigo con todas las variables que no sabia donde meter, hay que averiguar para que sirve cada una y agruparlas segun su funcion
var d = document.getElementsByTagName("body");
d[0].bgColor = "#273A4C";
var p = document.getElementById("piedra")
var piedra = p.addEventListener("click", funcion);
var v = document.getElementById("papel")
var papel = v.addEventListener("click", funcion);
var t = document.getElementById("tijeras")
var tijeras = t.addEventListener("click", funcion);
var bot;
var z;
var usuario;
var boton;
var opcionesbot = [];
opcionesbot[1] = "piedra";
opcionesbot[2] = "papel";
opcionesbot[3] = "tijeras";
var results = [];
var intentos = 3;
//********************************************************************************************************************************************************************************************************* */
//control En esta parte del codigo el programa comprueba si ya has hecho mas de 3 intentos, de ser asi el programa continua, de lo contrario todo acaba
function funcion (boton) {
    if (intentos < 1){
        
        return("minigame_end");
    }
//En esta parte del codigo se crea un numero aleatorio que define la respuesta del bot, luego se comprueba la respuesta del usuario y se invoca a la funcion control a la que se le pasan los datos del usuario y el bot
    console.log("usuario = " + boton.target.id);
    z = Math.floor(Math.random()*(4 - 1)) + 1;
    bot = opcionesbot[z];
    console.log("bot = " + bot);
    usuario = boton.target.id;
    control(usuario, bot);
    intentos = intentos - 1;
    if (intentos < 1){
        console.log("minigame_end")
        
    }
    animations();
}
//********************************************************************************************************************************************************************************************************* */
//La funcion control toma los datos del usuario y el bot y a partir de ellos decide quien gana , una vez que decide quien gana imprime los datos en pantalla (hay que refactorizar)
var salida;
function control (user, bot) {
    if (user == "piedra" && bot == "piedra"){
        console.log("draft");
        salida = "draft";
    }
    else if (user == "piedra" && bot == "papel"){
        console.log("you lose");
        salida = "lose";
    }
    else if (user == "piedra" && bot == "tijeras"){
        console.log("you win");
        salida = "win";
    }
    else if (user == "papel" && bot == "piedra"){
        console.log("you win");
        salida = "win";
    }
    else if (user == "papel" && bot == "papel"){
        console.log("draft");
        salida = "draft";
    }
    else if (user == "papel" && bot == "tijeras"){
        console.log("lose");
        salida = "lose";
    }
    else if (user == "tijeras" && bot == "piedra"){
        console.log("lose");
        salida = "lose";
    }
    else if (user == "tijeras" && bot == "papel"){
        console.log("win");
        salida = "win";
    }
    else if (user == "tijeras" && bot == "tijeras"){
        console.log("draft");
        salida = "draft";
    }
    //Esta es la parte que imprime los datos en pantalla
    document.getElementById("output").innerHTML = salida;
    results.push("<li>" + "bot = " + bot + ", " + "tu respuesta = " + usuario + ", " + "resultado = " + salida +  "</li>");
    document.getElementById("results").innerHTML = results + "</br>";
    fondo(salida);
    //***************************************************************************************************************************************************************** */
}
//La funcion fondo cambia el color del fondo del documento
function fondo (salida){
    if (salida == "win") {
        d[0].bgColor = "#008C00";
    }
    else if (salida == "lose"){
        d[0].bgColor = "#E60000";
    }
    else if (salida == "draft"){
        d[0].bgColor = "#0033CF";
    }
}
//Esta funcion "animations" de momento no hace nada, el desarrollo debe continuar a partir de aqui
function animations(){
    console.log("animation_start");
    console.log("animation_end")
}