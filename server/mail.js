require('dotenv').config();

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: 'test',
  text: 'testing'
}

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Message Sent');
  }
});