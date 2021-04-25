/**
 * 
 */

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// Optimizado
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


// Exportamos para que pueda ser usado fuera del archivo
module.exports = {
    argv
}

/** Foma normal o larga */
// const argv = require('yargs')
// .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .help()
// .argv;