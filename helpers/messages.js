const readline = require('readline');

const pause = () => {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question(`\nPresione ${'ENTER'.green} para continuar...\n`, () => {
            rl.close();
            resolve();
        });
    })
}

const option = () => {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('\nSeleccione una opción: ', (opt) => {
            resolve(opt);
            rl.close();
        });
    })
}

module.exports = { pause, option }

