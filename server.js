const express=require('express');
const app = express();
const port = process.env.port || 3002;
app.listen(port,()=>
{
    console.log(`Server is started on port ${port}`);
})

app.get('/',(req,res)=>
{
    // res.status(200).json({message:"Hello "});
    res.send("Hi, welcome to my Application");
})