const fetch = require('node-fetch');
const url = `https://www.poemist.com/api/v1/randompoems`;



const randomPoem = async() => {
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}

module.exports= {
	randomPoem
}
