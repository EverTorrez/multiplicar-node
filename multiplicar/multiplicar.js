// Existen 3 tipos de require
const fs = require('fs'); //Paquetes propios de Node
// const fs = require('express'); //Paquetes de terceros 
// const fs = require('./mipaquete'); //Paquetes personales

// Importamos el paquete colors
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============'.cyan);
    console.log(`Tabla del ${base}`.cyan);
    console.log('============'.cyan);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base * i}\n`.green);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}(1-al-${limite}).txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-del-${base}(1-al-${limite})`);

        });

    });
}

// Exportamos las funciones o métodos para que puedan ser usados fuera del archivo.
module.exports = {
    // crearArchivo: crearArchivo // antes era de esta forma
    crearArchivo, // ahora solo es necesario escribir una sola vez, porque ambos tienen la misma escritura.
    listarTabla
}