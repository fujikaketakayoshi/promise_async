const url = "http://localhost/javascript_practice/promise_async/test.json";

(async () => {
	setTimeout(() => {
		console.log(1);
	}, 5);
	console.log(2);
	await fetch(url);
	console.log(3);
})();
