
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
                formProdutos.classList.add('desativado');
                formPedidos.classList.add('desativado');
            }
            else
                formClientes.classList.add('desativado')
        }

        else if(evento.target.id == 'produtos')
        {
            if(formProdutos.classList.contains('desativado')) {
            formProdutos.classList.remove('desativado');
            navegarProdutos(1)
            formClientes.classList.add('desativado');
            formPedidos.classList.add('desativado');
        }
            else
            formProdutos.classList.add('desativado')  ;
        }
    
        else if(evento.target.id == 'pedidos')
        {
            if(formPedidos.classList.contains('desativado')) {
            formPedidos.classList.remove('desativado');
            formClientes.classList.add('desativado');
            formProdutos.classList.add('desativado');
        }
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
    } else if(codigo != clientes.length){

        navegarClientes(Number(codigo)+1);    

    }else{
        alert('Você chegou no fim da lista');
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
        alert('Início da lista')
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

        } else if(codigo != produtos.length) {
            navegarProdutos(Number(codigo)+1);
        } else {
            alert('Você chegou ao fim da lista')
        }
        })

    }
// console.log(produtos);


function navegarProdutos(codigo) {


    if(codigo-1 >= 0 && codigo <= produtos.length){
        formProdutos[1].value = produtos[codigo-1].codProduto;
        formProdutos[2].value = produtos[codigo-1].descProduto;
        formProdutos[3].value = produtos[codigo-1].precoProduto;
        formProdutos[4].value = produtos[codigo-1].qtdEstoqueProd;
        
    }
    else{
        alert('Início da lista')
    }
    console.log(produtos)
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
              alert("Dados cadastrados com sucesso")
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

let codigoProduto = document.getElementById('codigoProduto');
codigoProduto.addEventListener('focusout', function(){
    let index = codigoProduto.value -1;
    if(index < 0){
       index = 0
    }
document.getElementById('descProd').value = produtos[index]['descProduto'] 
document.getElementById('valorProd').value = produtos[index]['precoProduto']
})

const adcnar = document.getElementById('adcnar');
adcnar.addEventListener('click', function(){
    listaTabela();
})


function listaTabela() {
    let tbody = document.getElementById('tabela');
    // .push(adc elemento no array e .length a gente sabe quantos elementos tem)
    // for (let i = 0; i < this.arrayProdutos.length; i++) {
        let tr = tbody.insertRow(-1);
        console.log(tr)

        let td_item = tr.insertCell(0);//insere uma nova coluna
        let td_descricao = tr.insertCell(1);
        let td_preco = tr.insertCell(2);
        let td_total = tr.insertCell(3);
        let td_acoes = tr.insertCell(4);
        // let tr = tbody.insertRow(tbody.parentElement.rows.length-1)

        td_item.textContent = codigoProduto.value;
        td_descricao.textContent = descProd.value;
        td_preco.textContent = valorProd.value;
        td_total.textContent = qntProd.value;
        td_acoes.textContent = (Number(valorProd.value) * Number(qntProd.value)).toFixed(2);
        let total = document.getElementById("total");
        total.textContent = (Number(total.textContent) + Number(td_acoes.textContent)).toFixed(2);
}

