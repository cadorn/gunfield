
const PATH = require("path");
const EXPRESS = require('express');
const GUNFIELD = require("..");

const PORT = process.env.PORT || 8080;


var app = EXPRESS();

app.use('/gunfield', GUNFIELD.app({
    redis: {
        url: process.env.SERVICE_REDIS_URL
    }
}));

//app.use('/pouchdb', EXPRESS.static(PATH.join(require.resolve("pouchdb/package.json"), "../dist")));

app.use('/', EXPRESS.static(__dirname));

app.listen(PORT, function () {
    console.log('Examples server running at: http://127.0.0.1:' + PORT + "/");
});

