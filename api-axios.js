// import
const http = require('http');
const axios = require('axios');



// função para lidar com as requisições
const requestMain = (request, response) =>{
    // URL da api que queremos acessar
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // fazendo uma requisição HTTP GET com API
    axios.get(apiUrl)
        .then((apiResponse) =>{
            //configurando o cabeçalho da resposta
            response.writeHead(200, {'Content-Type': 'text/plain'});

            //exibindo os dados retornados na resposta
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        .catch((error) =>{
            console.log('Erro ao acessar a API');
        })
    
    
        
    
}

//criando o servidor 
const server = http.createServer(requestMain);

//Definindo a porta 
const PORT = 3000;

//iniciando o servidor e ouvindo a porta definida 
server.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})