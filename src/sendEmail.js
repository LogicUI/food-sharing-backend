const sgMail = require("@sendgrid/mail");

const sendEmail = (email) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "perry_lzx@outlook.com",
    subject: "Verify email",
    html: `<a href='http://localhost:3002/users?email=${email}'>Click on this link to verify!</a>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("message sent");
    })
    .catch((err) => {
      console.log(err.response.body);
    });
};

module.exports = {
  sendEmail,
};
