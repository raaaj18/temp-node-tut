const { readFile , writeFile } = require('fs');

readFile('./content/first.txt' , 'utf8' , (err,result) => {        //callback function
    if(err) {
        console.log(err)
    }
    const first = result;
    readFile('./content/second.txt','utf8' , (err,result) => {
        if(err) {
            console.log(err)
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `here is the last result ${first} , ${second}`,
            (err,result) => {                                     //callback help function
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})