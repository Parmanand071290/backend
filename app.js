const express = require('express')
const app = express()

var abc;

const add = function(a, b) {
  return a + b;
};

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello Backend 6'
    })
})

app.listen(3000)

const result #= add(3, 4);
#console.log(result);
