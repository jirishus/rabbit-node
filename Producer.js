var amqp = require('amqp');
var conn = amqp.createConnection({host:'localhost'});

// wait for connection
conn.on('ready', function() {

    var msg = 'sup brosef';

    // publish
    conn.publish('salesQueue', msg);
    console.log('item sold' );
    

});