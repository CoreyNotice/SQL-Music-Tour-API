'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Band+s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage_event: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      set_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      meet_greet: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Band+s');
  }
};