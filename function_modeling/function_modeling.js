const Fn = run => ({
  run,
  chain: f => Fn(x => f(run(x)).run(x)),
  map: f => Fn(x => f(run(x))),
  concat: other => Fn(x => run(x).concat(other.run(x)))
});

Fn.ask = Fn(x => x);
Fn.of = x => Fn(() => x);

const Endo = run => ({
  run,
  concat: other => Endo(x => other.run(run(x)))
});
Endo.empty = () => Endo(x => x);

const Reducer = run => ({
  run
});

const checkCreds = (email, pass) => email === "admin" && pass === 123;

const login = payload =>
  Endo(state => {
    console.log("login reducer");

    return payload.email
      ? Object.assign({}, state, {
          loggedIn: checkCreds(payload.email, payload.pass)
        })
      : state;
  });

const setPrefs = payload =>
  Endo(state =>
    payload.prefs ? Object.assign({}, state, {prefs: payload.prefs}) : state
  );

const state = {loggedIn: false, prefs: {}};
const payload = {email: "admin", pass: 123, prefs: {bgColor: "#000"}};

const reducer = Fn(login).concat(Fn(setPrefs));
console.log(reducer.run(payload).run(state));
