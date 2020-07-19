exports.asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

exports.errorHandler = (err, req, res, next) => {
  let error = { ...err };

  res.status(error.statusCode).json({
    success: false,
    error: error.customMessage,
  });
};
