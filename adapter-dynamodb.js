module.exports.save = async() => {
    console.log('from dynamodb adapter')
    //...
    const params = {}
    const response = await dynamodb.putItem(params).promise()
    return response
}
