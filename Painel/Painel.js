
import{clientes} from '../clientes.js'
import{produtos} from '../produtos.js'

const clicaveis = document.querySelectorAll('.clicaveis');
// console.log(clicaveis)
const formClientes = document.forms[0];
const formProdutos = document.forms[1];
const formPedidos = document.forms[2];

for(let cliclado of clicaveis){
    cliclado.addEventListener('click', (evento) => {
        
        if(evento.target.id == 'clientes')
        {
            if(formClientes.classList.contains('desativado')) {
                formClientes.classList.remove('desativado')
                navegarClientes(1)
            }
            else
                formClientes.classList.add('desativado')
        }

        else if(evento.target.id == 'produtos')
        {
            if(formProdutos.classList.contains('desativado')) {
            formProdutos.classList.remove('desativado');
            navegarProdutos(1)
        }
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
        evento.target.parentElement.form.classList.add("desativado");
    })

}

const navegar = document.querySelectorAll(".navegarClientes");

console.log(navegar);

for (let clicado of navegar){

    clicado.addEventListener('click', (evento) => {
        let codigo = formClientes[1].value;
    if (evento.target.classList.contains("voltar")){
        navegarClientes(Number(codigo) -1);
    } else {
        navegarClientes(Number(codigo)+1);    
    }

    })
}
// console.log(clientes[1]);

function navegarClientes(codigo) {
    if(codigo-1 >= 0 && codigo <= clientes.length){
        formClientes[1].value = clientes[codigo-1].codCliente;
        formClientes[2].value = clientes[codigo-1].nomeCliente;
        formClientes[3].value = clientes[codigo-1].dataCadCli;
        
    }
    else{
        alert('Fim da lista')
    }
    console.log(clientes)
}


//////////////// PRODUTOS ////////////////


const procurar = document.querySelectorAll(".navegarProdutos");

    for(let clicado of procurar) {

        clicado.addEventListener('click', (evento) => {
            let codigo = formProdutos[1].value;

        if (evento.target.classList.contains("voltar"))  {
            navegarProdutos(Number(codigo) -1);

        } else {
            navegarProdutos(Number(codigo)+1);
        } 
        })

    }
// console.log(produtos);


function navegarProdutos(codigo) {

    formProdutos[1].value = produtos[codigo-1].codProduto;
    formProdutos[2].value = produtos[codigo-1].descProduto;
    formProdutos[3].value = produtos[codigo-1].precoProduto;
    formProdutos[4].value = produtos[codigo-1].qtdEstoqueProd;

}

const botoes = document.querySelectorAll(".novo");

    for(let clicado of botoes){
        clicado.addEventListener('click', (evento) => {
            if(evento.target.form.id == 'clientes')
                novoCliente();
            else 
            novoProduto();    
        })
    }

function novoCliente(){

    const dataAtual = new Date()

    formClientes[1].value = Number(clientes[clientes.length-1].codCliente)+1;
    formClientes[2].value = "";
    formClientes[3].value = dataAtual.toLocaleDateString();
}

function novoProduto(){
    formProdutos[1].value = produtos[produtos.length-1].codProduto+1;
    formProdutos[2].value = "";
    formProdutos[3].value = "";
    formProdutos[4].value = "";
}

const salvar = document.querySelectorAll(".salvar");
    for(let clicado of salvar){
        clicado.addEventListener('click', (evento) => {
          if(evento.target.form.id=="clientes"){
              salvarClientes();
                navegarClientes(1);
          }
            else 
            salvarProduto();
        }) 
    }

    function salvarClientes(){
        let novoCliente = 
            {
            "codCliente": formClientes[1].value,
            "nomeCliente": formClientes[2].value,
            "dataCadCli": formClientes[3].value,
            }
        
        clientes.push(novoCliente);    
    }

    function salvarProduto(){
        let novoProduto = 
            {
            "codProduto": formProdutos[1].value,
            "descProduto": formProdutos[2].value,
            "precoProduto": formProdutos[3].value,
            "qtdEstoqueProd":formProdutos[4].value,
            }
        
        produtos.push(novoProduto);    
    }

///////////////////////////
let idCliente = document.getElementById('idCliente')
idCliente.addEventListener('focusout', function(){
    let index = idCliente.value-1
    if(index < 0){
        index = 0
    }
    document.getElementById('nomeCliente').value = clientes[index]['nomeCliente']
})

// let idProduto = document.getElementById('idProduto')
// idProduto.addEventListener('focusout', function(){
//     let index = idProduto.value-1
//     if(index < 0){
//         index = 0
//     }
//     document.getElementById('codProduto').value = produtos[index]['codprodutos']
// })





