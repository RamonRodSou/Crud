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

const http = new XMLHttpRequest()    // Faz a Comunicação
http.open('GET', 'http://localhost:3000/profile')   // abre a comunicação da aplicação com a API
http.send()

http.onload = () => {   // Indicando pro JS oque irá acontecer depois que ele enviar a requisição 
                        //metodo "onload" ao carregar a página, vai executar alguma coisa.                    
    const data = JSON.parse(http.response)   // transformando essa "response" que vem em texto em um objeto JavaScript

    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email))// colocando o elemento filho que  seria a tabela " TR"  dentro do elemento pai " data-tabela"

    })

}
