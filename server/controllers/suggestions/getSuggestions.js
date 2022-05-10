const Account = require('../../models/Account')
const { mongoose } = require('../../utils/mongo')

async function getSuggestions(request, response, next) {

    Account.findOne({username: request.params.username},
        (err, doc) => {
            if (err) {
                throw err
            }
            // console.log(doc.categoryPreferences)
            response.status(201).send(doc.categoryPreferences);
        })
}

module.exports = getSuggestions