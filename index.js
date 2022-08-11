require('dotenv').config()
var client = require('twilio')(process.env.accountsid, process.env.authToken);
const fs = require('fs')
let number = "+16466373243"


//This will hold all of the theoretical choices for one instance
let masterArray = []


caller(masterArray)



//This gets passed the Markov Chain and calls the number speaking either that out or another de
function caller(masterArray) {

  var entry = masterArray[Math.floor(Math.random() * masterArray.length)]


  // Just Testing in the meantime
  var entry = "The Present is infinite, take time to meditate and pray right now."

  // console.log(masterArray)

  client.calls.create({
    twiml: "<Response><Say>" + entry + "</Say></Response>",
    to: number,
    from: "+18165426844"
  }, function (err, call) {
    if (err) {
      console.log(err)
    } else {
      // console.log(call.sid);
    }
    return console.log("I'm running")
  })
  // setTimeout(function () {
  //   client.messages.create({
  //     body: entry,
  //     from: "+18165426844",
  //     to: number
  //   }, function (err, call) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       // console.log(call.sid);
  //     }
  //     return console.log("I'm texting")
  //   })
  // }, 30000);

}



