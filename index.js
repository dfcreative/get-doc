/**
 * @module  get-doc
 */

var hasDom = require('has-dom');

if (hasDom()) module.exports = document;