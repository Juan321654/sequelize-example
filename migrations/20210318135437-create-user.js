'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // await queryInterface.renameTable('users', 'owners')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    // await queryInterface.renameTable('owners', 'users');
  }
};

// up: async (queryInterface, Sequelize) => {
//   await queryInterface.addColumn(
//     'Orders', // name of Source model
//     'CustomerId', // name of the key we're adding 
//     {
//       type: Sequelize.UUID,
//       references: {
//         model: 'Customers', // name of Target model
//         key: 'id', // key in Target model that we're referencing
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'SET NULL',
//     }
//   );
// },

// down: async (queryInterface, Sequelize) => {
//   await queryInterface.removeColumn(
//     'Orders', // name of Source model
//     'CustomerId' // key we want to remove
//   );
// }
// };