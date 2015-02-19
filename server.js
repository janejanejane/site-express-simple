var express = require('express'),
    http = require('http'),
    routes = require('./routes'),

    app = express(),
    port = process.env.PORT || 8080;


app.use('/', express.static(__dirname + '/public/'));

app.get('/', routes.index);

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
})