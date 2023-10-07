const url = "http://localhost/javascript_practice/promise_async/php/";

for (let i=1; i <= 3; i++) {
	fetch(url + `test${i}.php`)
		.then((res) => {
			return res.text();
		})
		.then((data) => {
			console.log('[promise]' + data);
		});
}


(async () => {
	for (let i=1; i <= 3; i++) {
		const res = await fetch(url + `test${i}.php`);
		const data = await res.text();
		console.log('[async]' + data);
	}
})();