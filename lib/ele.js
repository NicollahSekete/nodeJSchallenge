const fetch = require('node-fetch');
const url = `https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,religious,racist,sexist&type=twopart`;





const randomElephant = async() => {
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports={
	randomElephant
}

console.log('GB holidays')