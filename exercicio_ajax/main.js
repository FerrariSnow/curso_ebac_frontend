$(document).ready(function () {
    let usernamePrompt = window.prompt("Informe seu username do github.");

    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const repositorioElement = document.querySelector("#repositorios");
    const seguidoresElement = document.querySelector("#seguidores");
    const seguindoElement = document.querySelector("#seguindo");
    const linkElement = document.querySelector("#link");
    const endpoint = `https://api.github.com/users/${usernamePrompt}`;

    // console.log(usernameElement.innerText);

    if (usernamePrompt == "" || usernameElement == undefined) {
        alert("Por favor informe um username.");
    } else {
        fetch(endpoint)
            .then(function (resposta) {
                return resposta.json();
            })
            .then(function (json) {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                repositorioElement.innerText = json.public_repos;
                seguidoresElement.innerText = json.followers;
                seguindoElement.innerText = json.following;
                linkElement.href = json.html_url;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }
    // console.log(usernameElement.innerText);
});
