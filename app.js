const express = require('express');
const app=express();

const port =8080;
require('./config');
app.get('/',(rep,req)=>{
    req.send("db connectivity..");
});

app.listen(port,()=>{
    console.log('app is listning at http://localhost:${port}');
})
