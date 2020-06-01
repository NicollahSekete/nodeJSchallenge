const fetch = require('node-fetch');
//const url = `https://api.lyrics.ovh/v1/Solange/Mad`;



const songLyrics = async(song, artist) => {
	const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports = songLyrics
