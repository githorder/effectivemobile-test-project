const error = (err, _, res) => {
  res.status(err.statusCode || 500).json({ message: err.message, error: true });
};

module.exports = error;
