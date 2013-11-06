/**
 * Module dependencies
 */

var Form = require('form');
var Field = Form.Field;
var inherit = require('inherit');
var template = require('./template.html');

/**
 * Expose `TextareaField`
 */

module.exports = TextareaField;

/**
 * Initialize `TextareaField`
 */

function TextareaField(){
  Field.apply(this, arguments);
  this.input = this.el.querySelector('textarea');
}

/**
 * Inherit `Field`
 */

inherit(TextareaField, Field);

/**
 * Temlate
 */

TextareaField.prototype.template = template;
