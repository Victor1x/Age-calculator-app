const form = document.getElementById("form");
const input_day = document.getElementById("input_day");
const input_month = document.getElementById("input_month");
const input_year = document.getElementById("input_year");
const span = document.querySelectorAll(".mensagem_erro");
const idade_anos = document.getElementById("resultados_anos");
const idade_meses = document.getElementById("resultados_meses");
const idade_dias = document.getElementById("resultados_dias");

form.addEventListener("submit", () => {
  ev.preventDefault();
  const day = parseInt(input_day.value);
  const month = parseInt(input_month.value);
  const year = parseInt(input_year.value);

  if (day > 31 || day <= 0) {
    alert_day();
    return;
  }

  if (isNaN(day)) {
    alert_day();
    return;
  }

  if (month > 12) {
    alert_month();
    return;
  }

  if (isNaN(month)) {
    alert_month();
    return;
  }

  if (year <= 1920) {
    alert_year();
    return;
  }

  if (isNaN(year)) {
    alert_year();
    return;
  }

  if (9999 < year) {
    verificarLarguraTela();
    return;
  }

  const data = year + "-" + month + "-" + day;

  const resultado = calcularIdade(data);

  if (resultado) {
    idade_anos.textContent = resultado.anos;

    idade_meses.textContent = resultado.meses;

    idade_dias.textContent = resultado.dias;
  }
});

// document.querySelectorAll(".Input").forEach((input, index) => {
//   input.addEventListener("input", () => {
//     span[index].textContent = "";
//     input[index].classList.remove("active");
//     remove_pessoa_do_futuro();
//   });
  // span[0].textContent = "";
  // span[0].classList.remove("active");
  // input_day.classList.remove("active");
// });

input_day.addEventListener("input", () => {
  remove_alert_day();
  remove_pessoa_do_futuro();
});
input_month.addEventListener("input", () => {
  remove_alert_month();
  remove_pessoa_do_futuro();
});
input_year.addEventListener("input", () => {
  remove_alert_year();
  remove_pessoa_do_futuro();
});
