// Importamos el archivo yargs
// Al hacer dicha importación estoy cargando todo el modulo, todo el objeto.
// y para usar el conts argv en donde yo quiera tendria que poner argv.argv.
// entonces para no hacer eso simplemente le aumento el .argv al require,
// y entonces para poder usar el argv solo tendria que poner argv
// ya que al aumentar el .argv al require le estoy diciendo que solo voy utilizar la función argv del archivo yargs.
const argv = require('./config/yargs').argv;
// Importamos el paquete colors
const colors = require('colors/safe');


// si hay un {} despues de un const o un let esto sigfica que es una destructuracion.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = '10';
// let data = '';

// console.log(process.argv);// [
//                           // 'C:\\Program Files\\nodejs\\node.exe',
//                           // 'D:\\PROGRAMACION\\NODE\\Node-Curso\\03-bases-node\\app'
//                           // ]

// usamos el argumento argv del process
// let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.cyan(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv2);
// console.log(argv.base);

// accedemos al 3 elemento del objeto o array
// let parametro = argv[2];
// // usando el split separamos un string en donde haya un = y accedemos al segundo elemento despues de hacer el split.
// let base = parametro.split('=')[1];


// for (let i = 1; i <= 10; i++) {
//     console.log(`${base} * ${i} = ${base * i}`);
// }
// for (let i = 1; i <= 10; i++) {
//     // += sirve para concatenar todo lo que se escribe después del +=
//     data += `${base} * ${i} = ${base * i}\n`; // \n sirve para poner saltos de lineas
// }

// Crea un archivo: para esto le pasamo primero la ruta con el nombre del archivo,
// después le pasamos la data que se quiere escribir en el archivo,
// y por último le ponemos una función para ver si hubo algun error, y dicho que dicho error sea mostrado.
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));