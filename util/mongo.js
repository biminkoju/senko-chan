const mongoose = require('mongoose')
const { mongoPath } = require('@util/botutil');

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
