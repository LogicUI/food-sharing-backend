const sgMail = require("@sendgrid/mail");

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
