const { ErrorResponse } = require("../utils/index");
const { fetchHeroes } = require("../services/index");
const { asyncHandler } = require("../middlewares/index");

// @desc        Get heroes
// @route       Get /api/v1/heroes
// @access      Public
exports.getHeroes = asyncHandler(async (request, response, next) => {
  const { code } = request.query;

  let error = true;
  let parsedCode = undefined;

  if (code) {
    const [
      first = undefined,
      second = undefined,
      third = undefined,
    ] = code.split(" ").map((d) => Number(d));

    if (first === 0 && second && !third) {
      error = false;
      parsedCode = second;
    }
  }

  if (code && error) {
    return next(new ErrorResponse("Please provide a valid code", 400));
  }

  const data = await fetchHeroes(parsedCode);

  response.status(200).json({
    success: true,
    data,
  });
});
