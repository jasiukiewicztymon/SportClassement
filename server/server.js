const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendCode } = require('./api/verificationCodeSender')

const corsOptions ={
    origin:'*', 
    credentials:true,       
    optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions)).use(bodyParser.json()).use(bodyParser.urlencoded({extended: true})); 

app.post('/sendCode', (req, res) => {
    try {
        sendCode(req.body.email, req.body.code);
        res.send("The code is sent")
    }
    catch (err) {
        res.send(err)
    }
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});