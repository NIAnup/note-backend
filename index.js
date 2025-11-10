import express from 'express';
import connectDb from './db/connectDB.js';
import noteRouter from './routes/noteRoute.js';


import  dotenv from 'dotenv';
const app = express();
const PORT = 3000;

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));

dotenv.config();



connectDb();

app.get('/',(req,res)=>{
res.send("Server is Running");
});


app.use('/api',noteRouter);









app.listen(process.env.PORT,()=>{
    console.log("Server is Connected");
})