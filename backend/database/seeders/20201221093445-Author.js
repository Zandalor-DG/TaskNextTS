module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Authors', [
      {
        id: 1,
        name: 'Anita Diamant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'John Irving',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Elizabeth Strout',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Kaitlyn Greenidge',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Edith Wharton',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Richard Yates',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Richard Russo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'J. Courtney Sullivan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Laurie Halse Anderson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Anita Shreve',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: 'Joyce Maynard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: 'Zadie Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: 'Jennifer Haigh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: 'Becca Fitzpatrick',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: 'Jhumpa Lahiri',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: 'Bret Easton Ellis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        name: 'David Foster Wallace',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        name: 'Jonathan Franzen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        name: 'Helen Oyeyemi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        name: 'Sylvia Plath',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    await queryInterface.bulkDelete('Authors', null, {}),
};
