const form = document.querySelector('#form-exercicio');


let button = document.querySelector("#button");


function validaNumeros(a,b) {
  if (a > b || a == b) {
    result.textContent = "O formulário está inválido"
   return false;
  } else if (a < b) {
   result.textContent = "O formulário está válido"
    return true
  }
}

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  let a = Number(document.querySelector("#a").value);
  let b = Number(document.querySelector("#b").value);
  let result = document.querySelector("#result");

  let eValido = validaNumeros(a,b);

  if (eValido) {
    result.classList.remove("alert-light");
    result.classList.remove("alert-danger");
    result.classList.add("alert-success");
  } else {
    result.classList.remove("alert-light");
    result.classList.remove("alert-warning");
    result.classList.add("alert-danger");
  }
});

button.addEventListener('click', function(e) {
  e.preventDefault();
  let a = Number(document.querySelector("#a").value);
  let b = Number(document.querySelector("#b").value);

  if (validaNumeros(a,b)) {
    alert("Muito bem. O formulário está valido.")
  } else {
    alert("Sinto muito. O formulário está inválido. O valor B precisa ser maior que o valor A.")
  }
})