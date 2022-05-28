const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "titicode2115@gmail.com",
        pass: "fbwxcmsjszejwvxg"
    }
});
exports.sendCode = (email, code) => transporter.sendMail({
    from: 'titicode2115@gmail.com', 
    to: email, 
    subject: "Verification code", 
    html: `Hello,<br>
    welcome in Sport Ranking service, if you want to use the application verify your mail adresse with the <i>code</i> below:<br>
    <br>
    <b>${code}</b><br>
    <br>
    The Sport Ranking Team`,
});