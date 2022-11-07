async function entrarPainel() {

    let dadosFetch = await fetch("../Painel/usuario.json");
    let dadosJson = await dadosFetch.json();

    let usuario = document.querySelector('#email').value;
    let senha = document.querySelector('#password').value;

    dadosJson["users"].forEach(user => {
        console.log(user);
        if(user.user == usuario && user.pws == senha) {
            let form = document.forms[0]

            form.submit();
        }
    })
}