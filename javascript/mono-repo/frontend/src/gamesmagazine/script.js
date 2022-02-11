const apiUrl = 'http://localhost:3000/games'
$("#gravar").on("click", registrar);

function limparPesquisa(){
    $("#game-name").val("");
    $("#game-year").val("");
    $("#game-genre").val("");
    $("#game-mult").val("Sim");
    $("#game-off").val("Sim");
    $("#game-cross").val("Sim");
}

function registrar(){
    const nome = $("#game-name").val();
    const ano = $("#game-year").val();
    const genero = $("#game-genre").val();
    if(nome === "" || ano === "" || genero === ""){
        alert("Por favor preencha todos os campos!");
        return false;
    }
    let novoGame = {};
    novoGame.name = $("#game-name").val();
    novoGame.year = $("#game-year").val();
    novoGame.genre = $("#game-genre").val();
    novoGame.multiplayer = $("#game-mult").val();
    novoGame.offline = $("#game-off").val();
    novoGame.crossplataform = $("#game-cross").val();
    limparPesquisa();
    acessarBack(novoGame);
}

function limparTabela(){
  $("#tabela").html(`<tr><th colspan="6">Catálogo de Jogos</th></tr><tr><th>Jogo</th><th>Publicação</th><th>Gênero</th><th>Multiplayer</th><th>Offline</th><th>Cross-Plataform</th></tr>`);
}

function escreverTabela(_array){
  $("#tabela").append(`<tr><td>${_array.name}</td><td>${_array.year}</td><td>${_array.genre}</td><td>${_array.multiplayer}</td><td>${_array.offline}</td><td>${_array.crossplataform}</td></tr>`);

}

function pesquisa(){
  $.ajax({url: apiUrl})
  .done((data)=> {
      console.log(data);
      limparTabela();
      data.forEach(escreverTabela);
  });
}

function acessarBack(_game){
    fetch(apiUrl,{
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(_game)
    })
  .then(
    function (response){
      if (response.status !== 200) {
        console.log('Temos problemas: Código  ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("foi");
        pesquisa();
    })
    }
  )
}

pesquisa();