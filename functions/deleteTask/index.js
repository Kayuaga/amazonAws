const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
exports.handle = (e, ctx, cb) => {
    let params = {
        "Key": {
            id: e.id,
            name: e.name
        },
        TableName: 'todoList',
    };
    docClient.deleteItem(params, (err, data) => {
        err ? cb(err, null) : cb(null, data);
    });
};
