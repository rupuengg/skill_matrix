const userRouter = require('./user-route');
const authRouter = require('./auth-route');
const employeeRouter = require('./employee-route');
const skillRouter = require('./skill-route');
const employeeSkillRouter = require('./employee-skill-route');

module.exports = function (app, apiVersion) {
  app.use(`/api/${apiVersion}/auth`, authRouter);
  app.use(`/api/${apiVersion}/users`, userRouter);
  app.use(`/api/${apiVersion}/employees`, employeeRouter);
  app.use(`/api/${apiVersion}/skills`, skillRouter);
  app.use(`/api/${apiVersion}/employee-skills`, employeeSkillRouter);
};