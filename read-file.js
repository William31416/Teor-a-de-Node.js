const fs = require("fs");

fs.readFile("example.txt", "UTF-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});