console.log('hola');

const { log } = require('console');
const http = require('http');

http.createServer((req,res)=>{
    //req: request es la peticion del server
    //res: response es la peticion del servidor
    console.log(req);
    // res.writeHead(201,{'content-type':'application/json'}); //recurso no encontrado
    //res.setHeader('Content-Disposition','attachment;filename=lista.csv');
    //res.writeHead(200, {'content-type':'application/csv'});

    //res.write('id,nombre\n');
    //res.write('1,Fernando\n');
    //res.write('2,Mariza\n');
    //res.write('3,Gladys\n');
    res.write('Hola Mundo');

    res.end();
})
.listen(8080); //puerto donde el servidor escuchara las peticiones
console.log('escuchando el puerto: ',8080);