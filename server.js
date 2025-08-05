const express = require('express')
const dotenv = require('dotenv') 
const router = require('./route/index')
const ejs = require("ejs");
const path = require("path");

const app = express();

dotenv.config();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.static("public"));
router(app);
app.get("/", (req, res, next) => {
  res.render("index");
});



app.get('/qr-send' )
 


app.get('/', (req,res) =>{
    res.send('server start')
} )

app.listen( 8080 , ()=>{
    
    console.log(`server is running    8080`)
})