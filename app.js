'use strict';
const http = require('https'),
    fs = require('fs'),
    request = require('request'),
    url = "j00fk0ly27.execute-api.eu-central-1.amazonaws.com",
    postPath = "/todo/posttask",
    putPath = "/todo/puttask",
    delPath = "/todo/deletetask";

// Build the post string from an object
// For deleting editing object primary key id and sorted key name must be selected
let post_data = JSON.stringify({name: "Vasya", task: "Play music"}),
    put_data = JSON.stringify({id: "1499290969697", name: "Makar", task: ["Make a homework", "Go to the toilet"]}),
    del_data = JSON.stringify( {id: "1499290969697", name: "Makar"});

// An object of options for the request
let post_options = {
        host: url,
        path: postPath,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    },
    put_options = {
        host: url,
        path: putPath,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    },
    delete_options = {
        host: url,
        path: delPath,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(del_data)
        }
    };


//get data from the base
request('https://j00fk0ly27.execute-api.eu-central-1.amazonaws.com/todo/getalltasks', (err, res, body) => {
    console.log(body);
});

//requests, that demonstrates web-services' work
let put_req = http.request(put_options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log('Response: ' + chunk);
        });
    }),

    post_req = http.request(post_options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log('Response: ' + chunk);
        });
    }),
    del_req = http.request(delete_options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log('Response: ' + chunk);
        });
    });

del_req.write(del_data);
del_req.end();
post_req.write(post_data);
put_req.write(put_data);
post_req.end();
put_req.end();

