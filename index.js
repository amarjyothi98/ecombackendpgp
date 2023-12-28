const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amarjyothi526:SHuZeY2VGPRrUI62@cluster0.ga8yr8f.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("db connection successfull"))
.catch(e => console.log(e));

app.use((req, res) => {
    res.send("this is from server");
})


app.listen(4000, () => {
    console.log("the backend server is running");
})