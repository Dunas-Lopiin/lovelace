const apiUrl = 'http://localhost:3000/calculadora/:';
const BOTOES = document.getElementById("bt-calculadora");

function pesquisarGeral(tipo){
    fetch(apiUrl + tipo)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
            console.log("X");
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
};

BOTOES.addEventListener('click', e =>{
    if (e.target.matches('button')) {
        let valor = e.target.value;
        pesquisarGeral(valor);
    }
});
