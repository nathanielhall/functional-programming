const {toUpper, exclaim} = require("../utils");
const {List} = require("immutable-ext");

// a => Endo(acc => acc)
const Endo = run => ({
  run,
  concat: other => Endo(x => run(other.run(x)))
});
Endo.empty = () => Endo(x => x);

const res = List([toUpper, exclaim])
  .foldMap(Endo, Endo.empty())
  .run("Hello");

console.log(res);
