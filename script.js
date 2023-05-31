/* 
    As "chaves" de criptografia que utilizaremos são:
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
*/

document.querySelector("#copiar").style.display = 'none';
document.querySelector("#limpar").style.display = 'none';
document.querySelector("#msgCriptografada").style.display = 'none';
document.querySelector("#descriptografar").disabled = true;
document.querySelector("#semMensagem").style.display = '';
document.querySelector("#msgTxt").focus()
document.querySelector("#msgTxt").addEventListener('keypress', pegarMensagem);

function pegarMensagem(msg) {
    var msg = document.querySelector('#msgTxt').value.toLowerCase();
    if (msg === '') {
        document.querySelector("#descriptografar").disabled = true;
    } else {
        document.querySelector("#descriptografar").disabled = false;
        return msg
    }
}

function mostrarMensagem() {
    var criptoTxt = document.querySelector('#msgCriptografada');
    if (criptoTxt === '') {
        document.querySelector("#semMensagem").style.display = '';
    } else {
        document.querySelector("#semMensagem").style.display = 'none';
        document.querySelector("#copiar").style.display = '';
        document.querySelector("#limpar").style.display = '';
        document.querySelector("#msgCriptografada").style.display = '';
        return criptoTxt
    }
}

function copiarTexto() {
    var textoCopia = mostrarMensagem();
    textoCopia.select();
    textoCopia.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.querySelector("#msgTxt").focus();
}

function limparTexto() {
    msgTxt = mostrarMensagem();
    if (msgTxt !== '') {
        document.querySelector("#copiar").style.display = 'none';
        document.querySelector("#msgCriptografada").value = '';
        document.querySelector("#msgCriptografada").style.display = 'none';
        document.querySelector("#limpar").style.display = 'none';
        document.querySelector("#semMensagem").style.display = '';
        document.querySelector("#msgTxt").focus();
    }
}

function criptografar() {
    var msgTxt = pegarMensagem(msgTxt);

    var alfabetoEncriptar = {
        'a': 'ai',
        'á': 'ái',
        'à': 'ài',
        'ã': 'ãi',
        'â': 'âi',
        'e': 'enter',
        'é': 'énter',
        'è': 'ènter',
        'ê': 'ênter',
        'i': 'imes',
        'í': 'ímes',
        'ï': 'ïmes',
        'o': 'ober',
        'ó': 'óber',
        'ô': 'ôber',
        'õ': 'õber',
        'ö': 'öber',
        'u': 'ufat',
        'ú': 'úfat'
    }

    var msgCriptografada = msgTxt.replace(/[aáàâãeéèêiíïoóôõöuú]/img, function (i) {
        return alfabetoEncriptar[i];
    });
    
    mostrarMensagem().value = msgCriptografada;
}

function descriptografar() {
    var msgTxt = pegarMensagem(msgTxt);

    var alfabetoDecriptar = {
        'ai': 'a',
        'ái': 'á',
        'ài': 'à',
        'ãi': 'ã',
        'âi': 'â',
        'enter': 'e',
        'énter': 'é',
        'ènter': 'è',
        'ênter': 'ê',
        'imes': 'i',
        'ímes': 'í',
        'ïmes': 'ï',
        'ober': 'o',
        'óber': 'ó',
        'ôber': 'ô',
        'õber': 'õ',
        'öber': 'ö',
        'ufat': 'u',
        'úfat': 'ú'
    }
    
    for (i in alfabetoDecriptar) {
        if (msgTxt.includes(i)) {
            msgTxt = msgTxt.replaceAll(i, alfabetoDecriptar[i]);
        }
    }

    mostrarMensagem().value = msgTxt;
}