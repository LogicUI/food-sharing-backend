const sgMail = require("@sendgrid/mail");

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "perry_lzx@outlook.com",
  from: "perrylzx@gmail.com",
  subject: "Hi",
  text: "Hello",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("message sent");
  })
  .catch((err) => {
    console.log(err.response.body);
  });
