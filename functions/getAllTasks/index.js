const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
exports.handle = (e, ctx, cb) => {
    let params = {
        TableName: 'todoList',
        Limit: 100
    };

    docClient.scan(params, (err, data) => {
        err ? cb(err, null) : cb(null, data);

    });
};
