const userRouter = require('./user-route');

module.exports = function (app, apiVersion) {
  app.use(`/api/${apiVersion}/users`, userRouter);
};