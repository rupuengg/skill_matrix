const userRouter = require('./user-route');
const authRouter = require('./auth-route');

module.exports = function (app, apiVersion) {
  app.use(`/api/${apiVersion}/users`, userRouter);
  app.use(`/api/${apiVersion}/auth`, authRouter);
};