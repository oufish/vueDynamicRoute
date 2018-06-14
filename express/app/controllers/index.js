//Account
// sing in
exports.index = function (req, res) {
  var user = req.body;
  var responseData = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7',
    'demo8', 'demo9', 'demo10', 'demo11', 'demo12', 'demo13', 'demo14', 'demo15', 'demo16',
    'demo17', 'demo18', 'demo19', 'demo20', 'demo21', 'demo22'
  ]
  var single = responseData.slice(0, 1)
  if (user.username == 'admin') {
    return res.send(responseData);
  }
  res.send(single);
}
exports.root = function (req, res) {
  res.send('');
}
