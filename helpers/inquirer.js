const inquirer = require('inquirer');
require('colors');

const { choices } = require('../data/choices');


const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices
    }
]

const inquirerMenu = async() => {
    
    console.clear();

    const {option} = await inquirer.prompt(questions);

    return option;
}

const pause = async() => {
    await inquirer.prompt([
        {
           type: 'input',
           name: 'option',
           message: `Presione ${'ENTER'.green} para continuar...`
        }
    ]);

}

const readInput = async(message = '') => {

    const questions = [
        { 
            type: 'input',
            name: 'value',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Debe ingresar algún valor';
                }
                return true;
            }
        }
    ]

    const { value } = await inquirer.prompt(questions);

    return value;
}

const todoListToDelete = async(todos = []) => {

    const choices = todos.map(({id, desc},index) => {
        return {
            value: id,
            name: `${index+1}.`.green + ` ${desc}`
        }
    })

    choices.unshift({value: '0', name: `${ '0'.green } Salir`});
    
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: '¿Que desea borrar?',
            choices
        }
    ]

    const { id }= await inquirer.prompt(questions);

    return id;
}

const confirm = async(message) => {

    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ] 

    const { ok } = await inquirer.prompt(questions);

    return ok;
}

module.exports = { inquirerMenu, pause, readInput, todoListToDelete, confirm}