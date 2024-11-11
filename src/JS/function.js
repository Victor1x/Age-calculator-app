const span = document.querySelectorAll(".mensagem_erro");

function cleanAlert() {
  document.querySelectorAll(".Input").forEach((input, index) => {
    input.addEventListener("input", () => {
      span[index].textContent = "";
      input.classList.remove("active");
    });
  });
}
function validityDay(day) {
  const max_day = 31;
  if (day > max_day || day <= 0 || isNaN(day)) {
    showError(0, "Dia inválida", input_day);
    return false;
  }
  return true;
}
function validityMonth(month) {
  const max_month = 12;
  if (month > max_month || month <= 0 || isNaN(month)) {
    showError(1, "Mês inválida", input_month);
    return false;
  }
  return true;
}
function validityYear(year) {
  if (year <= 1920 || year > 9999 || isNaN(year)) {
    showError(2, "Ano inválida", input_year);
    return false;
  }
  return true;
}
function showError(index, mensagem, input) {
  span[index].textContent = mensagem;
  input.classList.add("active");
}

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  if (nascimento > hoje) {
    span[2].textContent = "Ano inválida";
    input_year.classList.add("active");
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
    anos,
    meses,
    dias,
  };
}
