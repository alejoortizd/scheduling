const app = require('./app');


const server = app.listen(app.get('port'), () => {
  console.log(`Listen at port: ${server.address().port}`)
})
