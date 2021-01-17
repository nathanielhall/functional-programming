// const {Either} = require("../lib/types");
// const {List} = require("immutable-ext");

// const toUpper = x => x.toUpperCase();
// const exclaim = x => x.concat("!");
// const dotCom = x => x.concat(".com");

// /** Reader Mondad */
// const Fn = run => ({
//   run,
//   extract: x => run(x),
//   chain: f => Fn(x => f(run(x)).run(x)),
//   map: f => Fn(x => f(run(x))),
//   concat: other => Fn(x => run(x).concat(other.run(x)))
// });

// Fn.ask = Fn(x => x);
// Fn.of = x => Fn(() => x);

// const readerResult = Fn.of("hello")
//   .map(toUpper)
//   .map(exclaim)
//   .chain(upper => Fn.ask.map(config => [upper, config]));

// // console.log(readerResult.run({port: 50000}));

/** Endo */
// const Endo = run => ({
//   run,
//   concat: other => Endo(x => run(other.run(x)))
// });
// Endo.empty = () => Endo(x => x);
// const res = List([toUpper, dotCom, exclaim])
//   .foldMap(Endo, Endo.empty(""))
//   .run("Hello");

// console.log(res);

// initial values
// data trans = data.reduce((acc, curr)) {
//   - categoryIndex = acc.findIndex(findCategoryIndex)
//  -  category = acc[categoryIndex]
//  - increment
// }, seed);
// trans = postProcess(trans);
//

// result = data.map(ValueType).foldMap(ValueType, ValueType.Empty())
// result = Fn.of(data).increment(valuetype, initialvalues).map(valuetype.postprocess)

// res.run({valueType: v, displayType: d, })

// console.log(res2.run({port: 5000}));
// const Endo = run => ({
//   run,
//   concat: other => Endo(x => other.run(run(x)))
// });
// Endo.empty = () => Endo(x => x);

// const res = List([toUpper, exclaim])
//   .foldMap(Endo, Endo.empty())
//   .run("hello");

// // (acc, a) -> acc
// // (a, acc) -> acc
// // a -> (acc -> acc)
// // a -> Endo(acc -> acc)

// // Fn(a -> Endo(acc -> acc))
// const Reducer = run => ({
//   run,
//   contramap: f => Reducer((acc, x) => run(acc, f(x))),
//   concat: other => Reducer((acc, x) => other.run(run(acc, x), x))
// });

// const checkCreds = (email, pass) => email === "admin" && pass === 123;

// const login = payload => state =>
//   payload.email
//     ? Object.assign({}, state, {
//         loggedIn: checkCreds(payload.email, payload.pass)
//       })
//     : state;

// const setPrefs = payload => state =>
//   payload.prefs ? Object.assign({}, state, {prefs: payload.prefs}) : state;

// const reducer = Fn(login)
//   .map(Endo)
//   .concat(Fn(setPrefs).map(Endo));

// const state = {loggedIn: false, prefs: {}};
// const payload = {email: "dmin", pass: 123, prefs: {bgColor: "#000"}};
// console.log(reducer.run(payload).run(state));

// /** Reader Mondad */

// /** Endo Functor */

// /** Contramap */

// /** Composing Functors */
