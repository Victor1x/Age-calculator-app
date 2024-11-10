function alert_day() {
  span[0].textContent = "Dia inválida";
  // span[0].classList.add("active");
  input_day.classList.add("active");
}

function remove_alert_day() {
  span[0].textContent = "";
  // span[0].classList.remove("active");
  input_day.classList.remove("active");
}

function alert_month() {
  span[1].textContent = "Mês inválida";
  // span[1].classList.add("active");
  input_month.classList.add("active");
}

function remove_alert_month() {
  span[1].textContent = "";
  // span[1].classList.remove("active");
  input_month.classList.remove("active");
}

function alert_year() {
  span[2].textContent = "Ano inválida";
  // span[2].classList.add("active");
  input_year.classList.add("active");
}

function remove_alert_year() {
  span[2].textContent = "";
  // span[2].classList.remove("active");
  input_year.classList.remove("active");
}

function remove_pessoa_do_futuro() {
  span[3].textContent = "";
  document.querySelector(".div_sapn_data_do_futuro").style.display = "none";
  document.querySelector(".mensagem_erro_450px").style.display = "none";
  span[4].textContent = "";
}

function verificarLarguraTela() {
  var larguraTela = window.matchMedia("(min-width: 450px)");
  if (larguraTela.matches) {

    span[3].textContent = "Vc não é do futuro";
    document.querySelector(".div_sapn_data_do_futuro").style.display = "block";

    document.querySelector(".mensagem_erro_450px").style.display = "none";
  } else {

    document.querySelector(".div_sapn_data_do_futuro").style.display = "none";
    span[4].textContent = "Vc não é do futuro";

    document.querySelector(".mensagem_erro_450px").style.display = "block";
  }
} 

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  if (nascimento > hoje) {
    verificarLarguraTela()
    return;
  }

  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();
  let dias = hoje.getDate() - nascimento.getDate();

  if (dias < 0) {
    meses--;
    dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate(); 
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return {
    anos: anos,
    meses: meses,
    dias: dias,
  };
}

