$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000", { placeholder: "(xx) xxxxx-xxxx" });

  $("#cpf").mask("000.000.000-00", { placeholder: "xxx.xxx.xxx-xx" });

  $("#cep").mask("00000-000", { placeholder: "xxxxx-xxx" });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome.",
      email: "Por favor, insira seu e-mail.",
      phone: "Por favor, insira seu telefone.",
      cpf: "Por favor, insira seu CPF.",
      endereco: "Por favor, insira seu endereço.",
      cep: "Por favor, insira seu CEP.",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
