const { ErrorResponse } = require("../utils/index");
const { fetchHeroes } = require("../services/index");
const { asyncHandler } = require("../middlewares/index");

// @desc        Get heroes
// @route       Get /api/v1/heroes
// @access      Public
exports.getHeroes = asyncHandler(async (request, response, next) => {
  const { code } = request.query;

  if (code && isNaN(code)) {
    return next(new ErrorResponse("Please provide an valid code", 400));
  }

  const data = await fetchHeroes(code);

  response.status(200).json({
    success: true,
    data,
  });
});
