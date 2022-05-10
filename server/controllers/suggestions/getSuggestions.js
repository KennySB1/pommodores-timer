const Account = require('../../models/Account')
const { mongoose } = require('../../utils/mongo')
const Suggestion = require('../../models/Suggestion')

async function getSuggestions(request, response, next) {

    const preferences = await Account.findOne({username: request.params.username})
        // ,
        // (err, doc) => {
        //     if (err) {
        //         throw err
        //     }
        //     // console.log(doc.categoryPreferences)
        //     response.status(201).send(doc.categoryPreferences);
        // })

    console.log(preferences)
    let suggestions = await Suggestion.find({ category:{$in: preferences.categoryPreferences} })
    console.log(suggestions)
    // 

}

module.exports = getSuggestions