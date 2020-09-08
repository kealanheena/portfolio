const sendMail = require('../mail');

exports.send = (req, res, next) => {
  const { subject, email, text } =  req.body;

  sendMail(email, subject, text, function(err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" })
    } else {
      res.json({ message: "Email Sent!" })
    }
  });
};
