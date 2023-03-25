import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email) => {

    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
    `

    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()  // Depois de executar a função listaCliente e pegar a promesa ele vai exibiti isso na tela.
.then (data => {  // "então" 

    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email))// colocando o elemento filho que  seria a tabela " TR"  dentro do elemento pai " data-tabela"

    })
})
