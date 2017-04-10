//----------------------------------------------------------------------
//
// This source file is part of the furipota project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

const { data, derivations } = require('folktale/core/adt');

const AST = data('furipota:ast', {
  // --[ Basic entities ]-----------------------------------------------
  Identifier(name) {
    return { name };
  },

  Keyword(name) {
    return { name };
  },

  Text(value) {
    return { value };
  },

  Integer(sign, value) {
    return { sign, value };
  },

  Decimal(sign, integral, decimal, exponent) {
    return { sign, integral, decimal, exponent };
  },

  Vector(items) {
    return { items };
  },

  Record(pairs) {
    return { pairs };
  },

  // --[ Declarations ]-------------------------------------------------
  Define(id, expression) {
    return { id, expression };
  },

  Import(path) {
    return { path };
  },

  // --[ Expressions ]--------------------------------------------------
  Invoke(callee, stream, record) {
    return { callee, stream, record };
  },

  Pipe(input, mapping, record) {
    return { input, mapping, record };
  },

  Variable(id) {
    return { id };
  },

  // --[ Entry point ]--------------------------------------------------
  Program(declarations) {
    return { declarations };
  }
}).derive(
  derivations.equality,
  derivations.debugRepresentation,
  derivations.serialization
);


module.exports = AST;

// define binding = a opt: v > b > c
// "string"
// 1029
// [array]
// record: value
// import "module-id"
