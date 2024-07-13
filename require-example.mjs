// const fs = require("fs");
import fs from 'fs';

fs.readFile("require-example.mjs", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});