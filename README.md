## sequelize commands
- npx sequelize-cli init
- npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string --underscored
- npx sequelize-cli db:migrate:undo:all
- npx sequelize-cli db:migrate

## think blog shows how to do associations 
https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7