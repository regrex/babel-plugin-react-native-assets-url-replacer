'use strict';

const host = 'https://mycdn.com/';

module.exports = function (babel) {
  let t = babel.types;
  let imgs = [];

  return {
    visitor: {
      StringLiteral: function (path) {
        if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(path.node.value)) {
          let results = path.node.value.split('/');
          let imgFileName = results[results.length - 1];
          imgs.push(imgFileName);
          path.node.value = host + imgFileName;
        }
      },
      CallExpression: {
        enter(path) {
          // console.log('enter');
        },
        exit(path) {
          if (path.node.callee.name === 'require') {
            console.log(path.node.arguments.name);
            // if (path.node.arguments)
            path.replaceWithMultiple(path.node.arguments);
          }
        }
      }
    }
  };
}