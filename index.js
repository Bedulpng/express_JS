const express = require('express')

    const app = express()
    const port = 9854

    app.get('/',(req,res) =>{
        res.send("Hello ini express")
    })
app.listen(port,() => console.log(`Server running on port ${port}`))
