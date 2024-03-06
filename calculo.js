const chalk = require('chalk');
const inquirer = require('inquirer');

//função para somar dois numeros
function multiplicarNumeros(num1, num2){
    return num1 * num2;
}

function main(){
    console.log(chalk.bgRed.white('ola seja bem vindo!'));

    //perguntar ao usario dois numeros
    inquirer.prompt([
        {
            name:'numero1',
            message: 'Digite o primeiro numero'
        },
        {
            name:'numero2',
            message: 'Digite o segundo numero'
        },
    
    ])
        //promise - javascript
        .then((resposta) => {
            //converter numeros para valores numericos
            const numero1 = Number(resposta.numero1);
            const numero2 = Number(resposta.numero2);

            //calcular soma
            const resultado = multiplicarNumeros(numero1, numero2);

            //imprimir
            console.log(chalk.bgRed(`A multiplicaçã de ${numero1} e ${numero2} é ${resultado}`))
        })
    
}

main();