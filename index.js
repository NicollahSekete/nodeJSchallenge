const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')
const app = express();
require('dotenv').config();
const ele =require('./lib/ele');
const dogs =require('./lib/dogs')
const nasa = require('./lib/nasa');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'

}));
app.set('view engine', '.hbs');



//three new APIS

app.get('/', async(req, res) => {
    let data = await nasa.nasaNews();
    console.log(data)
    let lyrics =data.lyrics
    //res.send(data);
    res.render('index',{data, lyrics})
});

app.get('/ele', async(req, res) => {
    let data = await ele.randomElephant();
    console.log(data)
    let joke = data.setup
    let punchline =data.delivery
    //res.send(data);
    res.render('ele', {data, joke, punchline})
});

app.get('/dogs', async(req, res) => {
    let data = await dogs.dogAll();
    console.log(data)
    let dogPic1 = data.message[0]
    let dogPic2 = data.message[1]
    let dogPic3 = data.message[2]
    //res.send(data);
    res.render('dogs',{data, dogPic1, dogPic3 , dogPic2})
});



app.listen(3008, () => {
	console.log('listening on port 3008');
});