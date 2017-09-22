'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      yield ctx.render('home.ejs', {
        intro: 'hello egg !'
      });
    }
  }
  return HomeController;
};
