const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    done: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

taskSchema.plugin(mongoosePaginate);
module.exports = model('Task', taskSchema);
