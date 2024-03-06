const chalk = require('chalk');
const inquirer = require('inquirer');

//função principal que executa
function main(){
    console.log("ola");
    console.log(chalk.bgRed.white('bem vindo ao questionario'));

    //perguntar ao ususario seu nome 
    inquirer.prompt({
        name: 'name',
        message: 'qual é seu nome?'
    })
    //promise - javascript
    .then((nomeResponder) =>{
        //pergunta ao usuario sua idade
        return inquirer.prompt({
            name: 'age',
            message: 'quantos anos voce tem?'
        })
        .then((idadeResponder) =>{
            //imprimir mensagem na tela
            console.log(chalk.bgRed.black(`ola ${nomeResponder.name}! voce tem ${idadeResponder.age} anos!`))
        })
    })
}

main();