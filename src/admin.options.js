const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose);

const { student } = require('./student/student.entity')

/** @type {AdminBro.AdminBroOptions} */
const options = {
    resources: [student],
    locale: {
        translations: {
            labels: {
               student: 'Alunos'
            }
        }
    }
}

module.exports = options