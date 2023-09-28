"use strict";

import fs from 'fs';

console.log(1);

const data = fs.readFileSync('./test.json');
console.log(`2 ${data}`);

console.log(3);