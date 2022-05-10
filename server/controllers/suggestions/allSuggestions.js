const Account = require('../../models/Account')
const { mongoose } = require('../../utils/mongo')
const Suggestion = require('../../models/Suggestion')

async function allSuggestions(request, response, next) {
    console.log('made it here')
    Suggestion.find({},
        (err, doc) => {
            if (err) {
                throw err
            }
            console.log(doc)
            response.status(201).send(doc);
        })
    }

module.exports = allSuggestions