"use strict";

import * as fsPromises from "node:fs/promises";

Promise.all([
	fsPromises.readFile('./test.json'),
	fsPromises.readFile('./test2.json')
])
	.then(([data1, data2]) => {
		console.log(data1);
		console.log(data2);
	})
	.catch((err) => {
		console.error(err);
	});
