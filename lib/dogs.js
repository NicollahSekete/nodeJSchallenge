const fetch = require('node-fetch');
const url = `https://dog.ceo/api/breeds/image/random/3`;



const dogAll = async() => {
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports={
	dogAll
}
console.log('hi dog')