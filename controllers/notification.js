//var FCM = require('fcm-node');
import FCM from "fcm-node";
var serverKey = 'AAAAD7aYqkM:APA91bFChWAZYsgKlTQ7-MCiCg1udPMFVu9OQx2Fr6xEN4g8yFNPtFob5rKLmDfpgcLNkAbR7pfK5b9PXtZ2L1nuN-y44FJTlDhjew-P-nM7v17A42RX1OUgrMr4xnJguJ9SWfnCEMXd'; //put your server key here
var fcm = new FCM(serverKey);

export const testNotification = (req, res) => {
    console.log("notify")
    var title = req.body.title
    var body = req.body.body
    var rtoken = req.body.fcmToken
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        //to: rtoken,
        //collapse_key: 'your_collapse_key',
        registration_ids:[rtoken],
        //token: rtoken,
        notification: {
            title: title,
            body: body
        },

        /* data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            //my_another_key: 'my another value'
        } */
    };
    console.log(message)
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!",err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}