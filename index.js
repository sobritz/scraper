
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');

var app     = express();
var router = express.Router();

function isAuthenticated(req, res, next) {

    if (req.get("Authorization") == "acs")

        return next();

    
    res.redirect('/');
}





url = 'https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France';

router.get('/stoped', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[0]);
            });

        }
    })

})

router.get('/activ', isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[1]);
            });

        }
    })

})

router.get('/building', isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[2]);
            });

        }
    })

})

router.get('/abort', isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[3]);
            });

        }
    })

})

router.get('/finnalystoped',  isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[4]);
            });

        }
    })

})

router.get('/searchactiv',  isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[5]);
            });

        }
    })

})

router.get('/searchproject', isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[6]);
            });

        }
    })

})

router.get('/navals', isAuthenticated, function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl(url, function(tablesAsJson) {
                res.json(tablesAsJson[7]);
            });

        }
    })

})

app.get('/', function(req, res) {

    var doc = {
        "message": "Bienvenue sur la doc api",
        "routes": {
            "api/activ": "b",
            "api/stoped": "d",
            "api/building": "f",
            "api/abort": "f",
            "api/finnalystoped": "f",
            "api/searchactiv": "f",
            "api/navals": "f"
        }
}

    res.json(doc);

});

app.use('/api', router);



app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;