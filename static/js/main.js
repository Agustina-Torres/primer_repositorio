// Muestra un saludo al visitante en funcion a la hora del dia 

function Saludar(){
    fecha = new Date(); 
    hora = fecha.getHours();
    if(hora >= 0 && hora < 12){
        texto = "¡Buenos días! Gracias por visitar mi portfolio";
    }
    if(hora >= 12 && hora < 18){
        texto = "¡Buenas tardes! Gracias por visitar mi portfolio";
    }
    if(hora >= 18 && hora < 24){
        texto = "¡Buenas noches! Gracias por visitar mi portfolio";
    }
    document.getElementById('txtsaludo').innerHTML = texto;
}


