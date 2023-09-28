console.log(1);
new Promise((resolve) => {
	console.log(2);
	resolve();
}).then(() => console.log(4));
console.log(3);