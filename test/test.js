
var request = require('request');
var myJSONObject = {
        "amount": "44",
        "accountFrom": "0141007000038",
        "accountTo": "0076003000023",
        "paymentNarrative":"Transfer funds from your CBL account to other CBL accounts"
   

};
request({
    url: "http://localhost:8001",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(myJSONObject)
    console.log(response);
});