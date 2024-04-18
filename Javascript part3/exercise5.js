const fs = require("node:fs");
let append;
let output2 = " ";
let append2;

fs.readFile(
    "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/exercise5.txt",
    "utf8",
    (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        append = data + "First modofication";
        fs.appendFile("exercise5.txt", append, (err) => {
            if (err) {
                console.error(err);
            }
            else{
                fs.readFile(
                    "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/output1.txt",                                                                                                                                                                                                                                            
                    "utf8",
                    (err, append) => {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        fs.writeFile(
                            "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/output2.txt",
                            output2,
                            (err) => {
                                if (err) {
                                    console.error(err);
                                }
                                else{
                                    append2 = append + "Second modification";
                                    fs.appendFile("output2.txt", append2, (err) => {
                                        if (err) {
                                            console.error(err);
                                        }
                                        else {
                                            fs.readFile(
                                                "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/output2.txt",
                                                "utf8",
                                                (err, append2) => {
                                                    if (err) {
                                                        console.error(err);
                                                        return;
                                                    }
                                                    console.log("final result:", append2);
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                    });
                }
            );