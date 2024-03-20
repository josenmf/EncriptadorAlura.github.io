const textArea = document.querySelector(".main__textarea");
const mensaje = document.querySelector(".main__mesaje");

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["u","ufat"],["o","ober"],["a","ai"],["i","imes"],["e", "enter"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}

let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})
