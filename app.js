const express = require('express')
const app = express()

var abc;

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello Backend 6'
    })
})

app.listen(3000)
