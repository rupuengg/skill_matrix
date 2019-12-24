const userRouter = require("./user-route");
const authRouter = require("./auth-route");
const employeeRouter = require("./employee-route");
const skillRouter = require("./skill-route");
const employeeSkillRouter = require("./employee-skill-route");
const dashboardRouter = require("./dashboard-route");
const projectRouter = require("./project-route");
const lookUpMasterRouter = require("./lookUpMaster-route");
const projectSkillRouter = require("./projectSkill-route");
const employeeProjectDetailsRouter = require("./employeeProjectDetails-route");

module.exports = function(app, apiVersion) {
  app.use(`/api/${apiVersion}/auth`, authRouter);
  app.use(`/api/${apiVersion}/users`, userRouter);
  app.use(`/api/${apiVersion}/employees`, employeeRouter);
  app.use(`/api/${apiVersion}/skills`, skillRouter);
  app.use(`/api/${apiVersion}/employee-skills`, employeeSkillRouter);
  app.use(`/api/${apiVersion}/dashboard`, dashboardRouter);
  app.use(`/api/${apiVersion}/projects`, projectRouter);
  app.use(`/api/${apiVersion}/lookUpMasterDetails`, lookUpMasterRouter);
  app.use(`/api/${apiVersion}/projectSkill`, projectSkillRouter);
  app.use(
    `/api/${apiVersion}/employeeProjectDetails`,
    employeeProjectDetailsRouter
  );
};
