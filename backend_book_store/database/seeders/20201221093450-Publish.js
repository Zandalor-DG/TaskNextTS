module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Publishes', [
      {
        id: 1,
        name: 'English hats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Nipples production',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'what England is silent about',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'tea with milk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    await queryInterface.bulkDelete('Publishes', null, {}),
};
