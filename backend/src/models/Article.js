import { Schema, model } from 'mongoose';

const ArticleSchema = new Schema({
  id: Number,
  title: String,
  url: String,
  imageUrl: String,
  newsSite: String,
  summary: String,
  publishedAt: Date,
  updatedAt: Date,
  featured: Boolean,
  lauches: Array,
  events: Array
});

ArticleSchema.index({title: 'text'});

export default model('Article', ArticleSchema);