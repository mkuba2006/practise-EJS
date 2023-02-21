const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let items = ['papryka', 'zioło', 'ziemniaki'];
let workitems = [];
app.get('/', function(req, res){
    const today = new Date()
    const cd = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    const day = today.toLocaleDateString('en-US', cd);
    res.render('app', {kind: day, list: items});
})

app.post('/', function(req, res){

    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
})

app.get('/work',function(req,res){
    res.render('app', {kind: 'work list', list: workitems});
})



app.listen(3000, function(){
    console.log('Starter');
})