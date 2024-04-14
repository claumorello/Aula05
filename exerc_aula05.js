var http = require('http');
var request = require('request');



http.createServer(function(req, res){

acionaMicroServicoConsulta();

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(sequenciaExecucao);
    res.end();
}) .listen(8080);

    function acionaMicroServicoConsulta(){
    request ('https://www.boredapi.com/api/activity', function (error, response){
        if (!error && response.statusCode === 200){
            console.log(body)

    }

     
        
        })


return requestMicroServico;


    }    