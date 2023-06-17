<script>
      function SendMail(){
        var params = {
          from_name : document.getElementById("fullName").value,
          email_id: document.getElementById("email_id").value,
          phone_number: document.getElementById("phone_Number").value,
          message: document.getElementById("message").value
        }
        emailjs.send("service_hgo6ekq", "template_y1sm6aq", params).then(function (res) {
            alert("Success! " + res.status);
          })
      }
</script>

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

var RECEIVER = '<curtis.garrett.iii@gmail.com>';
var SENDER = '<g3.visuals.photography@gmail.com>';

var response = {
 "statusCode": 200,
 "headers": { 
"Content-Type": "application/json","Access-Control-Allow-Origin": "*"
},
"isBase64Encoded": false,
 "body": "{ \"result\": \"Success\"\n}"
};

exports.handler = async function (event, context) {
    console.log('Received event:', event);
    SendEmailCommand(event, function (err, data) {
        context.done(err, null);
    });
return response;
};

function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'G3Visuals Request Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    SESClient.SendEmailCommand(params).promise();
}
