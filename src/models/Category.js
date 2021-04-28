const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const scoresSchema = new Schema({
  title: { type: String, required: true, trim: true },
  status: { type: Boolean, required: true, default: true }
});

taskSchema.plugin(mongoosePaginate);
module.exports = model('Task', taskSchema);
