# Functional Programming Notes

## Topics

- Semi-groups
- Monoids
- Functors
- Function Modeling
  - Reader Monad
  - Endo Functor
  - contramap
  - Mondad Transformers
  - Free Monad
  - Lenses

### Resources

- [GitHub - FrontendMasters/hardcore-functional-architecture](https://github.com/FrontendMasters/hardcore-functional-architecture)
- [Introduction · mostly-adequate-guide](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)
- [Learn functional programming patterns to architect real-world JavaScript programs with Brian Lonsdorf.](https://frontendmasters.com/courses/hardcore-js-patterns/)
- [GitHub - stoeffel/awesome-fp-js: A curated list of awesome functional programming stuff in js](https://github.com/stoeffel/awesome-fp-js)
- [GitHub - fantasyland/fantasy-land: Specification for interoperability of common algebraic structures in JavaScript](https://github.com/fantasyland/fantasy-land)

## Semigroups & Monoids

- closed = working on certain data type that doesn't change
- associative
- identity
- semigroup = associative and closed
- monoid = semigroup with identity
- functor: semigroup that applies a function inside without changing the
  structure of the type

## Function Modeling

- Reader Monad
- Endo Functor
- contramap
- Mondad Transformers
- Free Monad
- Lenses

### Definitions

- Monoid
- foldMap
- Monad
