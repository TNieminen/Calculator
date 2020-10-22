// For explanations of these,
// test the match strings at
// https://regex101.com/
const development = [
  /http:\/\/192\.168\.[0-9]+\.[0-9]+/, // allow connections from local network to dev server, usefull for mobile debugging
  /https:\/\/devap(p|i)\.akkadu\.(com|cn)$/, // devapi and devapp
  /https:\/\/deploy-preview-[0-9]+--akkadu-webapp\.netlify\.(com|app)$/, // deploy previews,
  /https:\/\/akkadu[\s\S]*\.herokuapp\.com$/, // heroku testing apps
  /http:\/\/localhost:[0-9]+$/, // localhost
]
const production = [
  /https:\/\/((ap(p|i)|www)\.|)akkadu(cloud|)\.(com|cn)$/, // production domains
  /https:\/\/akkadu-webapp.netlify.com$/,
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