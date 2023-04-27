import { add } from './operation.js';
const express = require('express')
const app = express()

var abc;

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello Backend 6'
    })
})

app.listen(3000)

const result = add(3, 4);
console.log(result);

const db = require('./db');
app.get('/products', (req, res) => {
db.query('SELECT * FROM products WHERE id = ' + req.query.id);
.then((product) => {
...
res.send(product);
})
});
