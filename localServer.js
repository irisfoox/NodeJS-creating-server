const http=require('http');    //classic local server creating

const server=http.createServer(function (req,res){
   res.setHeader("content-type","application/json");
   res.setHeader("access-Control-Allow-Origin","*");
   res.writeHead(200);
   let dataObj={id:123 , name:"michal", email:"michal123@gmail.com"};
   let data=JSON.stringify(dataObj);
   res.end(data);
});
server.listen(3000,function(){
    console.log("listening to port 3000!");
})