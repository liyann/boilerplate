import _ from 'lodash'
function component() {
  var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', 'are you ok?'], ' ')
  //TODO：哈哈
  return element
}
console.log('hello')
<<<<<<< HEAD
document.body.appendChild(component());
=======

document.body.appendChild(component())
>>>>>>> 2141d569f2241fda7ea241a498a2d8e18589152d
