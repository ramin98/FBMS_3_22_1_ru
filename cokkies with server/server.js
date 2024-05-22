let express = require('express')
let cors = require('cors')
let cookie_parser = require('cookie-parser')
const bodyParser = require('body-parser')
let app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(
    (__dirname, 'public')))
app.use(cookie_parser())
let password = 'fsdgffdgdfhgfdggfd'

app.get('/setCookies', (req, res) => {
    res.cookie('user', password)
})
app.get('/getCookies', (req, res) => {
    if(req.cookies.user === password){
        res.send("Signed in the first time")
    }
})

app.listen(4000, () => {
    console.log(4000)
})