exports.send = (req, res, next) => {
  res.json(req.body);
  console.log(`Data: \n${req.body.email}\n${req.body.subject}\n${req.body.text}`);
};
