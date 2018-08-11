module.exports = (config) => {
    if (config.test === "memory") {
        return './adapter-inmemory'
    }
    else {
        return './adapter-dynamodb'
    }
}
