console.log('Fetch API');

// const api = fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(res) {
// 	console.log(res, 'res');
// });

async function getAPI() {
	const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	console.log(api, 'API');
	const json = await api.json();
	console.log(json, 'Json');
}
// getAPI();

async function postAPI() {
	const api = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'POST',
		body: JSON.stringify({
			title: 'Bootcamp',
			body: 'Javacript',
			userId: 1
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});
	console.log(api, 'API');
	const json = await api.json();
	console.log(json, 'Json');
}
postAPI();
