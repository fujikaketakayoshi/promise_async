"use strict";

import * as fsPromises from "node:fs/promises";

fsPromises.readFile('./test.json')
	.then((data1) => {
		console.log(data1);
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
		console.log('finally');
	});