Git Clone (https://github.com/rupuengg/skill_matrix.git).

## `Application`

Install all dependencies

`$ npm install`

Run Application

`$ npm start`

Runs the app in the development mode.<br>
Frontend Application Run On [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
Backend APIs Run on [http://localhost:8080](http://localhost:8080).

`$ npm run start:dev`

Run only frondend application - [http://localhost:3000](http://localhost:3000)

`$ npm run start:api`

Run only backend apis - [http://localhost:8080](http://localhost:8080)

`$ npm run build`

Builds the app for production to the `build` folder.

## `DB`

Before running migration you need to install MSSQL or MySql on your system and update .env file from .env.example file

Run all migration

`$ sequelize db:migrate`

Seed data

`$ sequelize db:seed:all`

Undo migration

`$ sequelize db:migrate:undo:all`
