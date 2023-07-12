
const inquirer = require('inquirer');
require('colors');

const choices = [
    { value: '1', name: `${'1.'.green} Crear tarea` },
    { value: '2', name: `${'2.'.green} Listar tarea` },
    { value: '3', name: `${'3.'.green} Listar tareas completadas` },
    { value: '4', name: `${'4.'.green} Listar tareas pendientes` },
    { value: '5', name: `${'5.'.green} Completar tarea(s)` },
    { value: '6', name: `${'6.'.green} Borar tareas` },
    { value: '0', name: `${'0.'.green} Salir`},
]

module.exports = { choices };