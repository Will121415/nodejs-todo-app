require('colors');

const { menu } = require('../data/menu');

const { option } = require('./messages');

const showMenu = async() => {
    
    let index;
    console.clear();

    menu.forEach((e,i) => {
        index = (++i === menu.length) ? 0 : i;
        console.log(`${index}.`.green,`${e}`);
    });

    return await option();
}

module.exports = { showMenu }