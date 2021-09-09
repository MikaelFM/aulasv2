var x = 0;
var hora = 0;
var minuto = 0;
var link = '';
var d = '';
function();
document.getElementById('Pp2').innerHTML = d + ' - ' + hora + ':' + minuto; 
const getDia = function(){
        now = new Date;
        var x = now.getDay();
        var hora = now.getHours();
        var minuto = now.getMinutes();
        const ingles = 'https://meet.google.com/xdy-vzqw-mvm';
        const sociologia = 'https://meet.google.com/mfb-ozep-qtn?hs=224';
        const historia = 'https://meet.google.com/xks-fhea-rvo';
        const matematica = 'https://meet.google.com/xbn-tyzt-dtr';
        const dw = '';
        const quimica = 'http://meet.google.com/fwb-yhjq-jbh';
        const domingo = 0;
        const segunda = 1;
        const terca = 2;
        const quarta = 3;
        const quinta = 4;
        const sexta = 5;
        const sabado = 6;
        if (x == domingo){
        d = 'SEGUNDA-FEIRA'
        window.alert("hoje não tem aula!")
        } 
        else if(x == segunda){
            window.location.href = '#';
            d = 'SEGUNDA-FEIRA';
        }
        else if(x == terca){
            window.location.href = '#';
            d = 'TERÇA-FEIRA';
        }
        else if(x == quarta){
             d = 'QUARTA-FEIRA'
            if (hora >= 15 && minuto > 10){
                window.location.href = matematica
            } else {
                window.location.href = historia
            }
        }
        else if(x == quinta){
            d = 'QUINTA-FEIRA'
            window.location.href = quimica
        }
        else if(x == sexta){
             d = 'SEXTA-FEIRA'
            window.location.href = '#'
        }
        else if(x == sabado){
            window.alert("hoje não tem aula!");
             d = 'SÁBADO'
        }

}
function sleep(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

var c = 10
function gato(){
if (c <= 100){
    document.getElementsByClassName('value')[0].innerHTML = c + '%';				
    setTimeout('gato()', 250);	
    c += 10;
} /*else {
    redirecionar();
}*/
}

const redirecionar = function() {
        
}
