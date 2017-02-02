/**
 * Created by stagiaire on 02/02/2017.
 */
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var himalaya = require('himalaya');
var tabletojson = require('tabletojson');

var app     = express();

function myStringify(key, value) {
    if (typeof value === 'object' && value != null) {
        return (JSON.stringify(value, myStringify(key, value)));
    }
    else {
        return value;
    }
}

url = 'https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France';

app.get('/stoped', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[0]);
            });

        }
    })

})

app.get('/activ', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[1]);
            });

        }
    })

})

app.get('/building', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[2]);
            });

        }
    })

})

app.get('/abort', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[3]);
            });

        }
    })

})

app.get('/finnalystoped', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[4]);
            });

        }
    })

})

app.get('/searchactiv', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[5]);
            });

        }
    })

})

app.get('/searchproject', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[6]);
            });

        }
    })

})

app.get('/navals', function(req, res){
    request(url, function(error, response, html){

        if(!error){

            tabletojson.convertUrl('https://fr.wikipedia.org/wiki/Liste_des_r%C3%A9acteurs_nucl%C3%A9aires_en_France', function(tablesAsJson) {
                res.json(tablesAsJson[7]);
            });

        }
    })

})


app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;