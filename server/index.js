import express from 'express';
import mongoose from'mongoose';
import config from './config/dev.js';

mongoose.connect(config.DB_URI);

const app = express();

app.get('/rentals', function(req, res){
    res.json({'success':true})
});

const port = process.env.port || 3001;

app.listen(port, function(){
    console.log("working")
})


