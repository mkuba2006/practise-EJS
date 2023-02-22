const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
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
    res.render('list', {day: day, list: items});
})

app.post('/', function(req, res){
    console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === 'work'){
        workitems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    }
})

app.get('/work',function(req,res){
    res.render('list', {day: "work list", list: workitems});
})



app.listen(3000, function(){
    console.log('Starter');
})