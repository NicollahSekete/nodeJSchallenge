const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')
const app = express();
const bodyParser = require('body-parser'); 


require('dotenv').config();
const ele =require('./lib/ele');
const dogs =require('./lib/dogs')
const songLyrics = require('./lib/nasa');


app.use(bodyParser.urlencoded({extended: false}));
// ignore data types and make EVERYTHING a string
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'

}));
app.set('view engine', '.hbs');



//three new APIS

app.get('/', async(req, res) => {
    res.render('index',)
});

app.post('/', async (req, res) => {
    let song = req.body.song;
    let artist =req.body.artist;
    let data = await songLyrics(song , artist);

    let lyrics = data.lyrics;
    res.render('index', 
    {data: 
        {lyrics}
    });
})




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



app.listen(8000, () => {
	console.log('listening on port 8000');
});