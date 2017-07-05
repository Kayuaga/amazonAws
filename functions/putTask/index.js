const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
exports.handle = (e, ctx, cb) =>{
    let params = {
        Item: {
            id: e.id,
            name: e.name,
            tasks: e.task,
        },
        TableName: 'todoList'
    };
    docClient.put(params, (err, data) => {
        err ? cb(err, null) : cb(null, data);
    });
};
