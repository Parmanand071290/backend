const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello Backend 2'
    })
})

app.listen(3000)
