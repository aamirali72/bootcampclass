//Arrow Function

//Syntax:-

// ()=>(statments);

// var myfun =fuction show() {
// 	console.log('Aamir');
// };

//-----------------
// -----Sync Async

// console.log('start Group');

// let data1 = 'content';

// setTimeout(function() {
// 	console.log(data1);
// }, 5000);

// console.log('end group');

// ---Call Back---

// call back Example1
// function printGreeting(msg, alertGreeting) {
// 	alertGreeting(msg);
// }

// function alertGreeting(msg) {
// 	alert(msg);
// }

//call back Example2

// console.log('Start');
// function callback() {
// 	setTimeout(function() {
// 		console.log('callback');
// 	}, 300);
// }
// function callback2() {
// 	setTimeout(function() {
// 		console.log('callback2');
// 	}, 200);
// }
// function callback3() {
// 	setTimeout(function() {
// 		console.log('callback3');
// 	}, 100);
// }
// function fun() {
// 	callback();
// 	console.log('fun');
// }
// fun();
// function fun2() {
// 	callback2();
// 	console.log('fun2');
// }
// fun2();
// function fun3() {
// 	callback3();
// 	console.log('fun3');
// }
// fun3();
// console.log('end');

// printGreeting('Hellow World', alertGreeting);

// ---Call Back hell

// function printGreeting(msg, alertGreeting) {
// 	if (msg === 'evening') {
// 		evening(alertGreeting);
// 	} else if (msg === 'morning') {
// 		morning(alertGreeting);
// 	} else {
// 		night(alertGreeting);
// 	}
// }

// function morning(alertGreeting) {
// 	alert('good morning');
// 	alertGreeting('hellow world');
// }

// function evening(alertGreeting) {
// 	alert('good evening');
// 	alertGreeting('hellow world');
// }

// function night(alertGreeting) {
// 	alert('good night');
// 	alertGreeting('hellow world');
// }

// function alertGreeting(msg) {
// 	alert(msg);
// }

// printGreeting('evening', alertGreeting);

// ---Promise

//Example1
// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		console.log('New promise');
// 		resolve();
// 	}, 1000);
// });

// promise.then(function() {
// 	console.log('promise resolve');
// });

// Example2
//  let promise = new Promise(function(resolve, reject) {
//  	setTimeout(function() {
//  		console.log('New promise');
//  		resolve();
//  	}, 1000);
//  });

// promise.then(function() {
//  	console.log('promise resolve');
// });

//Example3

// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		console.log('New promise');
// 		// reject();
// 		resolve();
// 	}, 1000);
// });

// promise
// 	.then(function() {
// 		console.log('promise resolve');
// 		return 2;
// 	})
// 	.then(function(val) {
// 		console.log(val);
// 		return val + 2;
// 	})
// 	.then(function(val2) {
// 		console.log(val2);
// 	})
// 	.catch(function() {
// 		console.log('error');
// 	});

//Example3
// const anyfunction = () => {
// 	return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
// };

// const resolveFunstion = () => console.log('success');
// const rejectFunction = () => console.log('failure');

// const result = new Promise((resolve, reject) => {
// 	setTimeout(() => (anyfunction() ? resolve() : reject()), 2000);
// });

// result.then(resolveFunstion).catch(rejectFunction);

// console.log('hello world');

//Async and Await  we use instead of callback
//Example 1
function apiFetch() {
	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('new promise');
			//resolve('data');
			reject('error define');
		}, 1000);
	});
	return promise;
}
async function _asyncJS() {
	try {
		let data = await apiFetch(); //true , complete
		console.log(data, 'successfull');
	} catch (error) {
		console.log(error, 'error');
	}
}
_asyncJS();
