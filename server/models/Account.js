const mongoose = require('mongoose')

const instance = new mongoose.Schema(
  {
    /*
      document ID is set by default via MongoDB - next line is deprecated
      _id: mongoose.Schema.Types.ObjectId,
    */

    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
    breakSuggestions: {
      type: Array,
      required: false,
      default: [
        {title: 'BBC sport', url: 'https://www.bbc.co.uk/sport', category: 'sport'},
        {title: 'Go for a walk', url: '', category: 'exercise'},
        {title: 'Guess the weather in Norway', url: 'https://www.bbc.co.uk/weather/3143244', category: 'fun'}
      ]
    },
    completedPomodoros: {
      type: Array,
      required: false
    },
    categoryPreferences: {
      type: Array,
      required: false,
    }
  },
  {
    timestamps: true,
  },
)

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Account'

module.exports = mongoose.model(modelName, instance)
