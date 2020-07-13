//const fs = require('fs');
//const fs = require('fs');


const { crearArchivo } = require('./multiplicar/multiplicar')
const { listraTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
var colors = require('colors');


let comando = argv._[0];


switch (comando) {

    case 'listar':
        console.log('Listar')

        listraTabla(argv.base, argv.limite)
            .then((result) =>
                console.log(`Lista: ${result}`)

            ).catch(error => {
                console.log(error)
            })


        break;

    case 'crear':
        console.log('Crear')

        crearArchivo(argv.base, argv.limite)
            .then((result) =>
                console.log(`Archivo creado: ${result.green}`)

            ).catch(error => {
                console.log(error)
            })
        break;

    default:
        console.log('Comando no reconocido')

}
//console.log(argv)

//let base = 'fdgfdg';

// let argv = process.argv;
// let parametro = argv[2]

// let base = parametro.split('=')[1]
// console.log(base)
//console.log(process.argv)
//let argv2 = process.argv

//console.log('limite', argv.limite)
//console.log(argv2)

// crearArchivo(base)
//     .then((result) =>
//         console.log(`Archivo creado: ${result}`)

//     ).catch(error => {
//         console.log(error)
//     })