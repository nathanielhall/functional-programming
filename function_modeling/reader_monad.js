const {toUpper, exclaim} = require("../utils");

/** Reader Mondad */
const Fn = run => ({
  run,
  extract: x => run(x),
  chain: f => Fn(x => f(run(x)).run(x)),
  map: f => Fn(x => f(run(x))),
  concat: other => Fn(x => run(x).concat(other.run(x)))
});

Fn.ask = Fn(x => x);
Fn.of = x => Fn(() => x);

const readerResult = Fn.of("hello")
  .map(toUpper)
  .map(exclaim)
  .chain(upper => Fn.ask.map(config => [upper, config]));

console.log(readerResult.run({port: 50000}));
