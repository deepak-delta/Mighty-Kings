document.addEventListener("DOMContentLoaded", function(event) {
    var cont = document.getElementsByClassName('ninja-contain')[0];
    var ninja = document.getElementById('ninja-slider');
    var ninjaBottom = document.getElementsByClassName('ninja-top-contain')[0];
    setTimeout(function s() {
        for (var i = 0; i < cont.childNodes.length; i++) {
            if (cont.childNodes[i] === ninja){
                if (cont.childNodes.length === 16){
                    cont.removeChild(cont.childNodes[i-2]);
                }
            }
        }
        if(ninjaBottom.childNodes.length === 8) {
            ninjaBottom.removeChild(ninjaBottom.childNodes[2])
        }
    },100);

});