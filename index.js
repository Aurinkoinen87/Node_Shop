const express = require('express')
const app = express()




app.use(express.static(__dirname + '/public'))

app.set('view engine','pug')


const PORT = 3000

const mysql = require("mysql2");
  
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop",
  password: "root"
});

app.listen(PORT)


app.get('/', (req, res)=> {

con.query(
    'SELECT * FROM goods',
    function(error, result){
        if(error) throw err
        let goods = result

        res.render('main',{
            goods
        })
    }
)
})


app.get('/cat', (req, res)=> {
    console.log(req.query)
    let id = req.query.id

    let category = new Promise((res, rej)=> {
        con.query(
            'SELECT * FROM category Where id=' + id,
             function (error, result){
                if(error) rej(err)
                res(result)
            }
        )
    }) 
    })



