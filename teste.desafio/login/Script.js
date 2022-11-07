async function entrarPainel() {

    let dadosFetch = await fetch("../Painel/usuario.json");
    let dadosJson = await dadosFetch.json();

    let usuario = document.querySelector('#email').value;
    let senha = document.querySelector('#password').value;

    let correto;
    let form;
    
    dadosJson["users"].forEach(user => {
        console.log(user);
        if(user.user == usuario && user.pws == senha) {
           form = document.forms[0];
           correto = true;

        
        }
    });
        if(correto){
            form.submit();
        }else{
            alert("Usuário ou senha incorreta. Favor digite um usuário ou senha válido.");
        }
}
