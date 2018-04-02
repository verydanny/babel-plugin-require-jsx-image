"use strict";

module.exports = function (_ref) {
  var t = _ref.types;
  return {
    visitor: {
      JSXAttribute: function JSXAttribute(path, state) {
        var imgpath;

        if (path.node.name.name !== 'src') {
          return;
        }

        imgpath = path.node.value.value;
        path.node.name = t.JSXIdentifier('src');
        path.node.value = t.JSXExpressionContainer(t.CallExpression(t.Identifier('require'), [t.StringLiteral(imgpath)]));
      }
    }
  };
};