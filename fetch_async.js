const url = "http://localhost/javascript_practice/promise_async/test.json";

fetch(url)
	.then((res) => {
//		console.log(res);
		return res.text();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});

(async () => {
	try {
		const res = await fetch(url);
//		console.log(res);
		const data = await res.text();
		console.log(data);
	}
	catch(err) {
		console.error(err);
	}
})();