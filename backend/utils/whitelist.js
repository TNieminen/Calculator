// For explanations of these,
// test the match strings at
// https://regex101.com/
const development = [
  /http:\/\/192\.168\.[0-9]+\.[0-9]+/, // allow connections from local network to dev server, useful for mobile debugging
  /http:\/\/localhost:[0-9]+$/, // localhost
]
const production = [
  /https:\/\/badger-calculator.netlify.app$/,
]

exports.whitelist = {
  development,
  staging: development,
  test: development,
  production
}

exports.matchOrigin = (origin, whitelist = []) => {
  const allowedOrigins = whitelist
  return !!allowedOrigins.filter(allowedOrigin => origin.match(allowedOrigin))[0]
}