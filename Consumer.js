// load dependencies
var amqp = require('amqp');
// define connection
var conn = amqp.createConnection({host:'localhost'});

// waiting for connection
conn.on('ready', function() {
   console.log('Listening for Messages');
   // returns a reference to a queue - name param required w others avail
   conn.queue('salesQueue',{autoDelete:false}, function(q) {
     // use queue reference to subscribe
     q.subscribe(function(msg) {
        // log msg after buffer to string
        console.log(msg.data.toString());
     });
     
   });
});