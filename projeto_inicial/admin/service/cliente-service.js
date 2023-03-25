
//const listaClientes = () => {
    // const promise = new Promise ((resolve, reject) => {
    //     const http = new XMLHttpRequest();   // Faz a Comunicação
    //     http.open('GET', 'http://localhost:3000/profile');   // abre a comunicação da aplicação com a API
    //     http.onload = () => {   // Indicando pro JS oque irá acontecer depois que ele enviar a requisição  metodo "onload" ao carregar a página, vai executar alguma coisa. 
    //         if( http.status >= 400){
    //             reject(JSON.parse(http.response));  // transformando essa "response" que vem em texto em um objeto JavaScript
    //         }else {
    //             resolve(JSON.parse(http.response));
    //         }
    //     }
    //     http.send();
    // })
    // return promise;
//}

// Outro jeito de fazer requisições
// Reduzindo esse código usando a "fetch api"
// por padrão a  fetch já faz um "GET" e devolve uma " Promese"


const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then ( resposta => {
        return resposta.json(); // Pegando a Resposta, transformnando em um JavaScript válido e retornando
    })
}
const criaCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',   // Uma postagem normal, a gente escreve e mandando pro servidor, e dps aparece na timelime
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({  // Passa um método JS para texto
            nome: nome,
            email: email
        })
    })
    .then(resposta =>{
        return resposta.body
    })
}

export const clienteService = {

    listaClientes, criaCliente
}
