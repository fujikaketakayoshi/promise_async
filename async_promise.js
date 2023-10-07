const url = "http://localhost/javascript_practice/promise_async/test.json";

async function asyncFunction1() {
	return 0;
}

asyncFunction1()
	.then((data) => {
		console.log(data);
	});

async function asyncFunction2() {
	return fetch(url);
}

asyncFunction2()
	.then((res) => {
		//console.log(res);
		return res.text();
	})
	.then((data) => {
		console.log(data);
	});
