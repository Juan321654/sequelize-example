## sequelize commands
- npx sequelize-cli init
- npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string --underscored
- npx sequelize-cli db:migrate:undo:all
- npx sequelize-cli db:migrate
- npx sequelize migration:generate --name add-column-user --underscored   

## think blog shows how to do associations 
https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

## tips

- When making migration files, you have to do one query at the time. ex: 
```
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.renameColumn('owner','user_id', 'owner_id')
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.renameColumn('owner','owner_id', 'user_id')

  }
};
```
as it will give issues if you add more than one 'await' per migration
ex: 
```
up: async (queryInterface, Sequelize) => {
     await queryInterface.renameTable('users', 'owners');
     await queryInterface.renameColumn('owner','user_id', 'owner_id')
  },
```