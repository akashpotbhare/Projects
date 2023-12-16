const { readFile, writeFile } = require("fs")

readFile('./Content/Frist.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const frist = result;
    readFile('./Content/Second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const Second = result;

        writeFile(
            './Content/result-async.txt',
            `Here is the Result:${frist} ,${Second}`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
                

            }

        )
    })
})


