const fs = require("fs");

fs.writeFile("Hello.txt", "How Are You \n", function (err) {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log("Success");
    }
})


fs.appendFile("Hello.txt", "My Name Is Ameya", function (err) {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log("Success With Append Operation");
    }
})

fs.readFile("Hello.txt", "utf-8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log(data)
    }
})
