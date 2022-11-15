const express= require('express');
const path= require('path');
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 3000;
 
const static_Path=path.join(__dirname,"../public");
const saaPath=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partial")

app.set('view engine','hbs');
app.set("views",saaPath);
hbs.registerPartials(partial_path)

app.use(express.static(path.join(static_Path)))



// routing
app.get("",(req, res)=>{ 
    res.render('index')
});
// app.get("*",(req, res)=>{ 
//     res.render('404error')
// });

app.get("/about",(req, res)=>{ 
    res.render('about')
});

app.get("/weather",(req, res)=>{ 
    res.render('weather')
});

app.get("*",(req, res)=>{ 
    res.render('404error',{
        errormsg:'opps! Page Not Found'
    })
});


app.listen(port,()=>{ console.log("listening")});