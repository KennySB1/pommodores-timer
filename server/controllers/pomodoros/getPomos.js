const { mongoose } = require('../../utils/mongo')
const Account = require('../../models/Account')

const getPomos = async (request, response, next) => {

    // try {
    console.log("Hi")
      console.log(request.params.username)
  
      Account.find(
        {username: request.params.username},
        (err, doc) => {
            if (err) {
                throw err
            }
        //    doc.map(oneDoc=> console.log(oneDoc.completedPomodoros))
            response.status(201).send(doc.map(oneDoc=> oneDoc.completedPomodoros));
        })
  }
  
  
  
  module.exports = getPomos;