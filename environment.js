module.exports = (config) => {
    if (config.environment === 'local') {
        return './adapter-inmemory'
    }
    else {
        return './adapter-dynamodb'
    }
}
