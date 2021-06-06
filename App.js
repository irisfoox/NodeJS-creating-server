const express=require('express');   //to use real expres sever
const bodyParser=require('body-parser');  //to read data from server but only worked if imported
const app=express();
app.use(bodyParser.json());
app.use(logger);

app.use((req, res, next) => {         //middleware function classic allow distribution function
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});

function logger(req,res,next){   //middleware function
    console.log("logger");
    req.admin=true;
    next();
}

app.get('/admin',(req,res)=>{
    if (req.admin==true)
        res.send("hello admin");
    else
        res.send("not allowed");
       
})
app.get('/',(req,res)=>{
    console.log("get");
    res.send("hello get");
})
app.get('/user',(req,res)=>{
    res.send("hello user");
})
app.get('/getById/:name/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.params.name);
    res.send(`name ${req.params.name} id ${req.params.id}`);
})
app.post('/createUser',(req,res)=>{
    console.log(req.body.name);
    res.status(200).json({name:req.body.name , id:req.body.id}); //in case of success
})
app.get('/myGet',(req,res)=>{
    http://localhost:3000/getByName/?page=2&limit=3
    console.log(req.query);   //only gets path parameters
})
app.delete('/delete/:id',(req,res)=>{
    res.send(`delete user ${req.params.id}`);
})
app.put('/update/:id',(req,res)=>{
    res.send(`update user ${req.params.id} to ${JSON.stringify(req.body)}`)
})
app.patch('/patch/:id',(req,res)=>{
    res.send(`patch user ${req.params.id} to ${JSON.stringify(req.body)}`);
})
app.listen(3000,()=>{console.log("listening port 3000")});