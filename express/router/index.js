var Account = require('./../app/controllers/index');
module.exports = function (app) {
  // sing in
  app.get('/', Account.root);
  app.post('/Account/login', Account.index);
}
