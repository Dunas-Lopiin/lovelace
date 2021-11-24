function ava(){
    document.getElementById("avaliacao").style.padding = '10px';
    document.querySelector("#comentario fieldset").style.boxShadow = '2px 2px 5px';
    document.querySelector("#comentario fieldset").style.backgroundColor = 'white';
    document.getElementById("titulo").innerHTML = document.getElementById("titu").value;
    document.getElementById("paragrafo").innerHTML = document.getElementById("desc").value;
}