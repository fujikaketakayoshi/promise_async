console.log(1);
new Promise((resolve) => {
	console.log(2);
	resolve();
});
console.log(3);