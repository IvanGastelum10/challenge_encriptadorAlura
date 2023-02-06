const textArea = document.querySelector(".espaciotexto");
const mensaje = document.querySelector(".mensaje-encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage= "none";
}


function encriptar (frase){
    let matrizCodigo= [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    frase = frase.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i ++){
        if (frase.includes(matrizCodigo[i][0])){

            frase= frase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return frase
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value= ""
}

function desencriptar (fraseEncriptada){
    let matrizCodigo= [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for (let i = 0; i< matrizCodigo.length; i ++){
        if (fraseEncriptada.includes(matrizCodigo[i][1])){
            fraseEncriptada= fraseEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return fraseEncriptada
}

    function botonCopiar(){
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const copia = document.querySelector(".copiar");
    }


    function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")

}

