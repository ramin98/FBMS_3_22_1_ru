let express = require('express');
let cors = require('cors');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let app = express();

app.use(cors({
    origin: 'http://localhost:4000/', // specify your frontend domain
    credentials: true // allow credentials (cookies)
}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

let password = 'fsdgffdgdfhgfdggfd';

app.get('/setCookies', (req, res) => {
    res.cookie('user', password, {
        httpOnly: true, // secure the cookie
        sameSite: 'Strict' // or 'Lax' depending on your requirements
    });
    res.send('Cookie set');
});

app.get('/getCookies', (req, res) => {
    if (req.cookies.user === password) {
        res.send('Signed in the first time');
    } else {
        res.send('Not signed in');
    }
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
