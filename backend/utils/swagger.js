const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')

const servers = {
  development: 'http://localhost:3000',
  staging: 'https://badger-calculator.herokuapp.com',
  production: 'https://badger-calculator.herokuapp.com'
}

const swaggerV1Document = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Calculator API Reference',
      version: process.env.VERSION,
      description: 'API information for Calculator APIs',
    },
    servers: [{
      url: '{server}/{version}',
      variables: {
        server: {
          default: servers[process.env.NODE_ENV],
          enum:[
            servers.development,
            servers.staging,
            servers.production,
          ],
        },
        version: {
          default: 'v1',
          enum: [
            'v1',
          ],
        },
      },
    }],
  },
  apis: [
    path.join(__dirname, '../routes/**/index.js'),
    path.join(__dirname, '../routes/**/openapi.yml'),
  ],
  docExpansion: 'none',
}
exports.swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    docExpansion: 'none',
  },
}
exports.swaggerSpecs = swaggerJSDoc(swaggerV1Document)