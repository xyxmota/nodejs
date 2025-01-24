const express = require('express'); // criando uma requesição para o express
const serve = express(); // iniciando o express como servidor

// http://localhost:3000/hello/:nome
// Route params = /hello/:nome

serve.get("/hello", (req, res)=> {
    const nome = req.query.nome;
    return res.json ({ tittle: 'Hello World!',
        mensage: `Hello ${nome}, welcome to my first API!`
    });
});

// http://localhost:3000/hello/?nome=valor&nome2=valor2
// Query params = ?nome=valor&nome2=valor2

serve.get("/hello", (req, res)=> {
    const nome = req.query.nome;
    return res.json ({ tittle: 'Hello World!',
        mensage: `Hello ${nome}, welcome to my first API!`
    });
});

serve.listen(3000); // iniciando o servidor na porta 3000

// cara, amanha tenho que rever de novo as duas e diferenciar uma da outra, não entendi muito bem a diferença e estou com sono kkkk. entao vou dormir e amanha eu vejo isso. parei na aula 0.2.0.3 e posso rever novamente o video.