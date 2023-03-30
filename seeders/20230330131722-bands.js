'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {return queryInterface.bulkInsert('bands', [{
    band_id: '205',
    name: 'Cee',
    genre: 'Comdey',
    available_start_time: new Date(),
   end_time: new Date(),
    
  }]);

  },

  async down (queryInterface, Sequelize) {
  
    
      await queryInterface.bulkDelete('People', null, {});
    
  }
};
