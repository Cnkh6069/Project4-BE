# Project4-BE

npm init -y
npm install express cors dotenv
npm install --save sequelize
npm install --save mysql2
npm install --save-dev sequelize-cli
npm install sequelize
npx sequelize-cli init

rename the config.json to config.js
update index.js file, filepath for config.json to js.
create .sequelizerc file
create server.js file

npx sequelize-cli model:generate --name User --attributes name:string
npx sequelize-cli db:migrate
npx sequelize-cli model:generate --name Task --attributes name:string
//npx sequelize-cli db:migrate:undo

After creating all the modeles, create the BE queries in Controllers and routes.

npx sequelize-cli seed:generate --name rewards
npx sequelize-cli db:seed --seed 20250405053753-rewards.js
npx sequelize-cli db:seed:undo --seed 20250405053753-rewards.js
