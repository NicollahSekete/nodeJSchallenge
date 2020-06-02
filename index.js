const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')
const app = express();
const bodyParser = require('body-parser'); 


require('dotenv').config();

const ele =require('./lib/ele');
const poems =require('./lib/poems');

const dogAll =require('./lib/dogs');
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



// APIS

//lyrics api

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

});


//dogs api

app.get('/dogs', async(req, res) => {
    //res.send(data);
    res.render('dogs')
});

app.post('/dogs', async (req, res) => {
    let breed =req.body.breed
    let data = await dogAll(breed);

    let message = data.message;
    
    res.render('dogs', 
    {data: 
        {message}
    });

});



//joke api


app.get('/ele', async(req, res) => {
    let data = await ele.randomElephant();
    console.log(data)
    let joke = data.setup
    let punchline =data.delivery
    //res.send(data);
    res.render('ele', {data, joke, punchline})
});


//poems api

app.get('/poems', async(req, res) =>{
    let data = await poems.randomPoem();
    console.log(data)
    let content = data.lines

    res.render('poems', {content})
});



app.listen(8000, () => {
	console.log('listening on port 8000');
});
