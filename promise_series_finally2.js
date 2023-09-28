"use strict";

import * as fsPromises from "node:fs/promises";

fsPromises.readFile('./test.json')
	.finally(() => {
		console.log('finally');
		return 123;
	})
	.then((data1) => {
		console.log(data1);
	})
	.catch((err) => {
		console.error(err);
	});


