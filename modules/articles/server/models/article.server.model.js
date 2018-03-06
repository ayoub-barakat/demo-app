'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  length: {
    type: Number,
    default: 1
  },
  array: {
    type: [String],
    default: ['item1','item2']
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
