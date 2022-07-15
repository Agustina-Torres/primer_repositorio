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
    document.getElementById('txtsaludar').innerHTML = texto;
};

// Permite modificar el contenido de la seccion correspondiente

function CambiarParrafo(){
    document.getElementById('edit_sobre-mi').style.display = "block";
    let texto = document.getElementById('text_sobre-mi').innerText;
    console.log(texto);
};

// Para poder cambiar el parrafo con el nuevo texto ingresado
function NuevoTexto(valor){
    document.getElementById('text_sobre-mi').innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

// verifica si se presiono enter
let textarea = document.getElementById('edit_sobre-mi')
textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById('edit_sobre-mi').style.display="none"
    };
});


// Carga el contenido de un archivo de texto y lo muestra en el parrafo
function ShowFile(input){
    let file = input.file[0]; // tomo el nombre del archivo y lo asigno como variable
    alert(`File name: ${file.name}`); // por ejemplo imagen.png
    alert(`Last modified: ${file.lastModified}`); // por ejemplo 122234565342

    let reader = new FileReader(); // creamos un obj del tipo FileReader
    reader.readAsText(file); 
    reader.onload = function() {    
        console.log(reader.result); // cargo el contenido del documento y lo asigno al parrafo editable
        document.getElementById('text_sobre-mi').innerText=reader.result;
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
};
