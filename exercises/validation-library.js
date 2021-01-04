const {List} = require("immutable-ext");

const Success = x => ({
  isFail: false,
  x,
  fold: (f, g) => g(x),
  concat: other => (other.isFail ? other : Success(x))
});

const Fail = x => ({
  isFail: true,
  fold: (f, g) => f(x),
  x,
  concat: other => (other.isFail ? Fail(x.concat(other.x)) : Fail(x))
});

const Validation = run => ({
  run,
  concat: other => Validation((key, x) => run(key, x).concat(other.run(key, x)))
});

const validate = (spec, obj) =>
  List(Object.keys(spec)).foldMap(
    key => spec[key].run(key, obj[key]),
    Success([obj])
  );

const isRequired = Validation((key, x) =>
  !!x ? Success(x) : Fail([`${key} must be present`])
);
const isEmail = Validation((key, x) =>
  /@/.test(x) ? Success(x) : Fail([`${key} must be a valid email`])
);

// module.exports = {validate};

const validations = {name: isRequired, email: isRequired.concat(isEmail)};
const obj = {name: undefined, email: "john@email.com"};

const res = validate(validations, obj);

res.fold(console.error, console.log);
