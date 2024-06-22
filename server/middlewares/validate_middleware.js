const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const status = 422;

    const message = error.errors[0].message;
    console.log(message);
    const err = {
      status,
      message,
    };
    // res.status(400).json({msg:message})
    next(err);
  }
};

module.exports = validate;
