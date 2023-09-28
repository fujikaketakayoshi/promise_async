"use strict";

import * as fs from "node:fs/promises";

console.log(1);

fs.readFile('./test.json')
.then((data) => console.log('2' + data.toString()));

console.log(3);