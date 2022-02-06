const bandas = ["Sonata Arctica", "Steam Powered Giraffe", "Van Canto", "Kamelot"];
const jogos = ["Megaman X2", "White Knight Chronicles", "Resonance of Fate", "Risen", "Elex"];

function favoritos(_vetor1, _vetor2){
    const favoritos = [..._vetor1, ..._vetor2];
    return favoritos;
}

let fav = favoritos(jogos, bandas);
console.log(fav);
