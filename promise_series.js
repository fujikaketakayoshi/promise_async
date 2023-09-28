"use strict";

import * as fsPromises from "node:fs/promises";

fsPromises.readFile('./test.json')
	.then((data1) => {
		console.log(data1);
		return fsPromises.readFile('./test2.json');
	})
	.then((data2) => {
		console.log(data2);
	})
	.catch((err) => {
		console.log(err);
	});