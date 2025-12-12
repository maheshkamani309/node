const http      = require('http');
const express   = require('express');

const app  = express();

    app.use((req, res, next) => {
        console.log("First middleware");
        next();
    });


    app.use((req, res, next)=>{
        console.log("Second request");
        res.send('<h1>This is the testing.</h1>')
    });

app.listen(3000)
