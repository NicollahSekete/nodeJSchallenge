const fetch = require('node-fetch');

const dogAll = async(breed) => {
	const url = `https://dog.ceo/api/breed/${breed}/list`;
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports= dogAll;


console.log('hi dog')