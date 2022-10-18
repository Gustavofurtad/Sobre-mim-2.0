var abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionado")){ 
        return
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
  
  var abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  var idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  var informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

  
  var informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  
  informacaoASerMostrada.classList.add("selecionado");
}



