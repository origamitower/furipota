//----------------------------------------------------------------------
//
// This source file is part of the furipota project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

module.exports = (furipota) => {
  const { primitive, assertType } = furipota;

  return {
    join(_, separator, __) {
      return primitive((_, vector, __) => {
        assertType('Vector.join _ vector', 'Vector', vector);
        assertType('Vector.join separator _', 'Text', separator);
        return vector.join(separator);
      });
    }
  }
};
