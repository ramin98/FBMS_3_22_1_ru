const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

let goods =
{
    product_name: "Sam",
    product_description: "",
    product_price: 50,
    store_name: "",
    store_address: "",
}

app.get("/goods", (req, res) => {
    res.json(goods);
});

app.post("/add-goods", (req, res) => {
    let obj = req.body;
    console.log(obj)

    goods = {...obj,product_name:req.body.input }
    res.json(goods);

});

app.listen(HOST, () => {
    console.log(HOST + " OK");
  });