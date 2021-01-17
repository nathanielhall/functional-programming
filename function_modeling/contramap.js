// contramap allows us to transform the input
// map over (acc, a) => acc
// contramap allows us to transform the input
// mapping over the input
// transform the value before it got to our function
// useful if you have functions to combine

const Fn = run => ({
  run,
  chain: f => Fn(x => f(run(x)).run(x)),
  map: f => Fn(x => f(run(x))),
  concat: other => Fn(x => run(x).concat(other.run(x)))
});

Fn.ask = Fn(x => x);
Fn.of = x => Fn(() => x);

const Reducer = run => ({
  run,
  contramap: f => Reducer((acc, x) => run(acc, f(x))),
  concat: other => Reducer((acc, x) => other.run(run(acc, x)))
});

const login = (state, email) =>
  email
    ? Object.assign({}, state, {
        loggedIn: !!email
      })
    : state;

const setPrefs = (state, prefs) =>
  prefs ? Object.assign({}, state, {prefs: "hello"}) : state;

// const test = pay => {
//   // console.log(`the payload is: ${pay}`);
//   return pay.email;
// };

// console.log(
//   Reducer(login)
//     .contramap(p => p.email)
//     .run({}, {email: "nathan"})
//   // .run({email: "nathan@gmail.com"})
// );

const reducer1 = Reducer(login).contramap(p => p.email);
const reducer2 = Reducer(setPrefs).contramap(pay => pay.prefs);

console.log(
  reducer1
    .concat(reducer2)
    .run(
      {email: "nathan", prefs: "something"},
      {email: "nathan", prefs: "something"}
    )
);
// console.log(reducer1.run({}, {email: "nathan"}));
// console.log(reducer2.run({}, {prefs: "nathan"}));
// // console.log(reducer1);

// const x = Fn(reducer1.run)
//   .concat(reducer2.run)
//   .run({email: "nathan", prefs: "something"});

// Reducer(login.contramap(pay => pay.user))
//   .concat(Reducer(changePage).contramap(pay => pay.currentPage))
//   .run(state, {user: {}, currentPage: {}});

// console.log(x);
// Reducer(login)
//   .concat(Reducer(changePage))
//   .run({user: {}, currentPage: {}});

// Combining two reducers both use contramap (hit arguments) / transform into what it's looking for
// const Fn = run => ({
//   run,
//   chain: f => Fn(x => f(run(x)).run(x)),
//   map: f => Fn(x => f(run(x))),
//   concat: other => Fn(x => run(x).concat(other.run(x)))
// });

// Fn.ask = Fn(x => x);
// Fn.of = x => Fn(() => x);

// const Endo = run => ({
//   run,
//   concat: other => Endo(x => other.run(run(x)))
// });
// Endo.empty = () => Endo(x => x);

// // // Fn(a -> Endo(acc -> acc))
// const Reducer = run => ({
//   run,
//   contramap: f => Reducer((acc, x) => run(acc, f(x)))
//   // concat: other => Reducer((acc, x) => other.run(run(acc, x), x))
//   // concat: other => Reducer((acc, x) => run(other.run(acc, x), x))
// });

// const checkCreds = (email, pass) => email === "admin" && pass === 123;

// const login = payload =>
//   Endo(state => {
//     console.log("login reducer");

//     return payload.email
//       ? Object.assign({}, state, {
//           loggedIn: checkCreds(payload.email, payload.pass)
//         })
//       : state;
//   });

// const setPrefs = payload =>
//   Endo(state =>
//     payload.prefs ? Object.assign({}, state, {prefs: payload.prefs}) : state
//   );

// // Contramap allows us to
// // Reducer(login)
// //   .contramap(pay => pay.user)
// //   .concat(Reducer(changePage).contramap(pay => pay.currentPage))
// //   .run(state, {user: {}, currentPage: {}});

// // Reducer(login.contramap(pay => pay.user))
// //   .concat(Reducer(changePage).contramap(pay => pay.currentPage))
// //   .run(state, {user: {}, currentPage: {}});

// const state = {loggedIn: false, prefs: {}};
// const payload = {email: "admin", pass: 123, prefs: {bgColor: "#000"}};

// // const reducer = Reducer(login).contramap(pay => pay.email);
// // const reducer = Reducer(login);

// // console.log(reducer.run(state, payload.email));
// // const reducer = Reducer(login).concat(Reducer(setPrefs));

// // console.log(reducer.run(state, payload));

// // ==============================================
// const reducer = Fn(login).concat(Fn(setPrefs));
// console.log(reducer.run(payload).run(state));
// // ==============================================
// // const checkCreds = (email, pass) => email === "admin" && pass === 123;

// // const login = payload => state =>
// //   payload.email
// //     ? Object.assign({}, state, {
// //         loggedIn: checkCreds(payload.email, payload.pass)
// //       })
// //     : state;

// // const setPrefs = payload => state =>
// //   payload.prefs ? Object.assign({}, state, {prefs: payload.prefs}) : state;

// // const reducer = Fn(login)
// //   .map(Endo)
// //   .concat(Fn(setPrefs).map(Endo));

// // const state = {loggedIn: false, prefs: {}};
// // const payload = {email: "dmin", pass: 123, prefs: {bgColor: "#000"}};
// // console.log(reducer.run(payload).run(state));

// // Reducer(login.contramap(pay => pay.user))
// //   .concat(Reducer(changePage).contramap(pay => pay.currentPage))
// //   .run(state, {user: {}, currentPage: {}});
