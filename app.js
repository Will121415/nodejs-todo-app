require('colors');

const { pause } = require('./helpers/messages');
const { showMenu } = require('./helpers/showMenu');

const main = async() => {
    let opt = '' ;
    do {
        opt = await showMenu();
        console.log(opt);
        
        if (opt !== '0') await pause();

    } while(opt !== '0')

    
}

main();