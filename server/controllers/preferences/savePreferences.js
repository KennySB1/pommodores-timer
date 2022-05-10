const Account = require('../../models/Account')
const { mongoose } = require('../../utils/mongo')

async function savePreferences(request, response, next) {
    console.log("hi")
    console.log(request.body)

    Account.findOneAndUpdate(
        {username: request.body.username},
        {categoryPreferences: request.body.preferences},
        (err, doc) => {
            if (err) {
                throw err
            }
            response.status(201).send(doc);
        })
        const lol = (
            db.data.aggregate(
              [
                { $project: { 
                  result: { 
                    $add: [  ] } } 
                    }
              ]
           )
          )
          console.log(lol)
}

module.exports = savePreferences