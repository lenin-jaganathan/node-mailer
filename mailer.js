var express = require('express');
var nodemailer = require('nodemailer');


var app = express();

let mailDetails = {
    service : 'gmail',
    auth : {
        type: 'OAuth2',
        user : 'yourmail@gmail.com',
        clientId: 'client_Id',
        clientSecret: 'client_secret',
        refreshToken: 'refresh_token',
    }
}

let mailOptions = {
    from : 'Name <your_mail@gmail.com>',
    to : 'to address',
    subject : 'hello',
    html : "<h1>Hello</h1><br><br><p style='text-align:center'>How are you?</p>"
}

app.get('/',function(req,res){

      let transporter = nodemailer.createTransport(mailDetails);
                transporter.sendMail(mailOptions,function(err,data){
                    if(err){
                        res.send(err);
                    }
                    else{
                        console.log(data);
                        res.write(data+'<br />');
                        res.send();
                    }
                })
            })

app.listen(3000);