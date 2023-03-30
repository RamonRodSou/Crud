import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
    `

    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async(evento)=> {

    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        try { // Vai tentar executar esse código
            const linhaCliente = evento.target.closest('[data-id]') // mais proximo da data-id
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
        }
        catch (erro){ // caso não consiga. vai ser direcionado para tela de erro
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})


const render = async() => {
    try {
        const listaClientes = await clienteService.listaClientes()  // Depois de executar a função listaCliente e pegar a promesa ele vai exibiti isso na tela.
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))// colocando o elemento filho que  seria a tabela " TR"  dentro do elemento pai " data-tabela"
        })
    }
    catch (erro){ // caso não consiga. vai ser direcionado para tela de erro
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()