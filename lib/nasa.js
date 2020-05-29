const fetch = require('node-fetch');
const url = `https://api.lyrics.ovh/v1/Solange/Mad`;



const nasaNews = async() => {

	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports={
	nasaNews
}