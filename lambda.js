const config = require('./config.json')
const environment = require('./environment')
const save = require(`${environment(config)}`).save

save()
