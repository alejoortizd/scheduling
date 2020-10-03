const mongoose = require('mongoose');

module.exports = {
  connection: null,
  connect: () => {
    if (this.connection) return this.connection;
    return mongoose.connect('mongodb://localhost/terapify', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(connection => {
      this.connection = connection
      console.log('Conexion a DB exitosa')
    }).catch(err => console.log(err))
  }
}
