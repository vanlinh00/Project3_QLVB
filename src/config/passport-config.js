const LocalStrategy = require('passport-local').Strategy
var UserService = require('../services/userService');
//const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await UserService.checkuserlogin(email);

    if (user == null) {
      return done(null, false, { message: 'Người dùng không tồn tại' })
    }
    try {
      if (password == user.password) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Mật khẩu sai' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    var user = await UserService.checkbyid(id);
    return done(null, user)
  })
}

module.exports = initialize