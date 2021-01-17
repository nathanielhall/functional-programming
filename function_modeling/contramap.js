// contramap allows us to transform the input
// map over (acc, a) => acc
// contramap allows us to transform the input
// mapping over the input
// transform the value before it got to our function
// useful if you have functions to combine

const Reducer = run => ({
  run,
  contramap: f => Reducer((acc, x) => run(acc, f(x))),
  concat: other => Reducer((acc, x) => other.run(acc, run(acc, x)))
});

const login = (state, email) => {
  console.log(email, "login");

  return email
    ? Object.assign({}, state, {
        loggedIn: !!email
      })
    : state;
};

const preferences = (state, prefs) => {
  console.log(prefs, "preferences");
  return prefs ? Object.assign({}, state, {prefs}) : state;
};

const reducer1 = Reducer(login).contramap(p => p.email);
const reducer2 = Reducer(preferences).contramap(pay => pay.prefs);

const state = {email: "", prefs: ""};
const payload = {email: "nathan@gmail.com", prefs: "new pref"};

console.log(reducer1.concat(reducer2).run(payload, state));
