const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const scoresSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  score: { type: Map, required: true, default: Map }
});

taskSchema.plugin(mongoosePaginate);
module.exports = model('Task', taskSchema);
