const express = require('express'); // criando uma requesição para o express
const nodemon = require('nodemon');
const serve = express(); // iniciando o express como servidor
serve.listen(3000); // iniciando o servidor na porta 3000

// http://localhost:3000/hello?nome=Lucas
// query params = ?nome=Lucas

serve.get("/hello", (req, res)=> {
    const nome = req.query.nome;
    return res.json ({ tittle: 'Hello World!',
        mensage: `Olá ${nome}, tudo bem com você?`
    });
});

// http://localhost:3000/hello/Lucas
// router params = /:nome
serve.get("/hello/:nome", (req, res)=> {
    const {nome}= req.params;
    return res.json ({ tittle: 'Hello World!',
        mensage: `Olá ${nome}, tudo bem?`
    });
});

// vou parar aqui na aula 0.3.0.3 (utilizando o nodemon), favor lucas, seguir pra proxima aula.