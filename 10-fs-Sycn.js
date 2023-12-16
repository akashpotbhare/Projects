const {readFileSync,writeFileSync}=require("fs")

const frist = readFileSync('./Content/Frist.txt',"utf-8")
const second = readFileSync('./Content/Second.txt',"utf-8")
console.log(frist, second);

writeFileSync('./Content/result-sync.txt',
`Here is the result: ${frist},${second}`,
{flag:'a'}   //flag is a new vlue that means Override the value
)