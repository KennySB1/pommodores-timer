const Account = require('../../models/Account')
const { mongoose } = require('../../utils/mongo')

async function savePreferences(request, response, next) {
    console.log("hi")
    console.log(request.body)

    Account.findOneAndUpdate(
        {username: request.body.username},
        {$push: {categoryPreferences: "Sport"}},
        (err, doc) => {
            if (err) {
                throw err
            }
            response.status(201).send(doc);
        })
}

module.exports = savePreferences