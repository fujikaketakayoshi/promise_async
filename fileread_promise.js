"use strict";

import * as fs from "node:fs/promises";

fs.readFile('./test.json')
.then((data) => {
	console.log(data.toString())
})
.catch((err) => {
	console.log(err);
});
