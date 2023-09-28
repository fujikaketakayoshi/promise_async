"use strict";

import fs from "fs";

function readFilePromise(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err === null) {
				resolve(data);
			}else{
				reject(err);
			}
		})
	});
}


console.log(readFilePromise('./test.json'));
