const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const cd = new Date().getDay();
    const day ='';

    if(cd === 0){
        day = 'Sunday';
    }else if(cd === 1){
        day = 'Monday';
    }else if(cd === 2){
        day = 'Tuesday';
    }else if(cd === 3){
        day = 'Wednesday';
    }else if(cd === 4){
        day = 'Thursday';
    }else if(cd === 5){
        day = 'Friday';
    }else if(cd === 6){
        day = 'Saturday';
    }

    res.render('app', {kind: day});
})


app.listen(3000, function(){
    console.log('Starter');
})