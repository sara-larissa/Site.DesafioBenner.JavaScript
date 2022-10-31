const clicaveis = document.querySelectorAll('.clicaveis');
// console.log(clicaveis)
const formClientes = document.forms[0];
const formProdutos = document.forms[1];
const formPedidos = document.forms[2];

for(let cliclado of clicaveis){
    cliclado.addEventListener('click', (evento) => {
        
        if(evento.target.id == 'clientes')
        {
            if(formClientes.classList.contains('desativado'))
                formClientes.classList.remove('desativado');
            else
                formClientes.classList.add('desativado')
        }

        else if(evento.target.id == 'produtos')
        {
            if(formProdutos.classList.contains('desativado'))
            formProdutos.classList.remove('desativado');

            else
            formProdutos.classList.add('desativado')  ;
        }
    
        else if(evento.target.id == 'pedidos')
        {
            if(formPedidos.classList.contains('desativado'))
            formPedidos.classList.remove('desativado');

            else
            formPedidos.classList.add('desativado');
        }
 
        if(evento.target.classList.contains("fechar"))
        evento.target.parentElement.form.classList.add("desativar");
    })
}