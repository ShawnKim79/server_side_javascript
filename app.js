const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send('Hello world!');
});

app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0 ; i<5 ; i++){
        lis = lis + '<li>coding</li>';
    }
    var output = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        Hello, Dynamic!
        ${lis}
    </body>
    </html>`;
    res.send(output);
});

app.get('/route', (req, res) => {
    res.send('Hello router, <img src="/falcon_4.jpg">');
});

app.get('/login', (req, res) => {
    res.send('Login first');
 });

app.listen(3000, function (){
    console.log('Connect 3000 port');
});