const form = document.getElementById("form");
const input_day = document.getElementById("input_day");
const input_month = document.getElementById("input_month");
const input_year = document.getElementById("input_year");
const idade_anos = document.getElementById("resultados_anos");
const idade_meses = document.getElementById("resultados_meses");
const idade_dias = document.getElementById("resultados_dias");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const day = parseInt(input_day.value);
  const month = parseInt(input_month.value);
  const year = parseInt(input_year.value);

  let validationResults = [
    validityDay(day),
    validityMonth(month),
    validityYear(year),
  ];

  for (element of validationResults) {
    if (element === false) {
      return;
    }
  }

  const data = year + "-" + month + "-" + day;

  const resultado = calcularIdade(data);

  if (resultado) {
    idade_anos.textContent = resultado.anos;

    idade_meses.textContent = resultado.meses;

    idade_dias.textContent = resultado.dias;
  }
});

cleanAlert();
