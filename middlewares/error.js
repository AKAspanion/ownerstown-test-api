exports.errorHandler = (err, req, res, next) => {
  let error = { ...err };

  res.status(error.statusCode).json({
    success: false,
    error: error.customMessage,
  });
};
