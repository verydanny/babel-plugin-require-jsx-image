module.exports = function({ types: t }) {

  return {
    visitor: {
      JSXAttribute: function(path,state) {
        let imgpath;

        if (path.node.name.name !== 'src') {
          return;
        }

        imgpath = path.node.value.value;

        path.node.name = t.JSXIdentifier('src');
        path.node.value = t.JSXExpressionContainer(
          t.CallExpression(
            t.Identifier('require'),
            [t.StringLiteral(imgpath)]
          )
        );
      }
    }
  }
}