const config = require('./config.json')
const environment = require('./environment')
const save = require(`${environment(config)}`).save

module.exports.handler = async(event) => {
    try { 
        await save(event)
        return 'Works'
    } catch (e) {
        console.log(e.message)
        return 'Something went wrong'
    }
}
