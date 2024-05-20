let partidas = {
    "Cruz das almas": true,
    "Santo Antonio de Jesus": true,
    "Salvador": true,
    "Feira de santana": true
};

let destinos = {
    "Cruz das almas": true,
    "Santo Antonio de Jesus": true,
    "Salvador": true,
    "Feira de santana": true
};
document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); alert("por favor insira dados validos")
})

function verificarForm() {
    let partida = document.getElementById("Lpartida").value;
    let destino = document.getElementById("desstinos").value;
    let idavolta = document.getElementById("checkbox").checked;
    let passagens = parseInt(document.getElementById("Npassagens").value);
    let classe = document.getElementById("classes").value;

    if (!partidas.hasOwnProperty(partida) || !destinos.hasOwnProperty(destino)) {
        alert("Cidades indisponíveis");
        return;
    }
    if (destino === "Feira de santana" && idavolta) {
        alert("Passagem de ida e volta não disponível para destino selecionado");
        return
    }
    if (isNaN(passagens) || passagens <= 0) {
        alert("Selecione um número válido de passagens");
        return;
    }
    if (partida === "Cruz das almas" && classe === "executiva") {
        alert("classe indisponivel neste ponto de partida")
        return;
    }
    alert("passagens compradas, Boa viagem!");
};

