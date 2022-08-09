// const path = require('path');
// console.log(path.sep)

// const filePath = path.join('subfolder', 'text.txt');
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base);
/*============================================================== */
/*
const first = readFileSync('./subfolder/first.txt' , 'utf-8')
const second = readFileSync('./subfolder/second.txt' , 'utf-8')

writeFileSync(
    './subfolder/text.txt',
    `Here is the result : ${first} , ${second}`
)*/
/*============================================ */

/*const {readFile , writeFile}=require('fs');
readFile('./subfolder/first.txt',"utf8" , (err , result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result
    writeFile(
        './subfolder/text.txt',
        `Here is the result : ${first} , ${second}`
    )
})*/

const http = require('http');
const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>OOPS!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>back home</a>
    `)
})

server.listen(5000)