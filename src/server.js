const express = require('express')
const { default: AdminBro } = require('admin-bro')
const options = require('./admin.options')
const buildAdminRouter = require('./admin.route')
const mongoose = require('mongoose')

const app = express()
const port = 3000

const run = async () => {
  await mongoose.connect('mongodb://mongo:27017/profdeco', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(db => console.log('Db is connected to: ', db.connection.host))
  .catch(err => console.log('Error connect db: ', err));

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin)

  app.use(admin.options.rootPath, router)
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

module.exports = run;