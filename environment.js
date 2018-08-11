module.exports = (config) => {
    if (config.environment === "test") {
        return './adapter-inmemory'
    }
    else {
        return './adapter-dynamodb'
    }
}
