var fs = require('fs'),
xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile('./testOrders-110924.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        result.orders.order.map((order, i)=>{
            /*order['product-lineitems'].map((products)=>{
                console.log(products['product-lineitem'])
            })*/
           if (i === 1) {
           console.log(order)
           }
        })
    });
});

