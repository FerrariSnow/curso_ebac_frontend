$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const inputTarefa = $("#tarefa").val();
    const novaTarefa = $(`<li class='li'> </li>`);
    $(`<p>${inputTarefa}</p>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo("ul");
    $("#tarefa").val("");
    $("#tarefa").focus();

    $(".li").on("click", function () {
      $(this).toggleClass("text-decoration-line-through");
    });
  });
});
