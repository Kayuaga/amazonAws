const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
console.log("Starting")
exports.handle = function (e, ctx, cb) {
    let params = {
        Item: {
            id: Date.now().toString(),
            name: e.name,
            tasks: e.task,
        },
        TableName: 'todoList'
    };
    docClient.put(params, (err, data) => {
        err ? cb(err, null) : cb(null, data);

    })
}
