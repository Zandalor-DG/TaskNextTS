module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Books',
          'theYearOfPublishing',
          {
            type: Sequelize.DataTypes.DATE,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Books',
          'language',
          {
            type: Sequelize.DataTypes.STRING,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Books',
          'numberOfPages',
          {
            type: Sequelize.DataTypes.INTEGER,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Books',
          'description',
          {
            type: Sequelize.DataTypes.TEXT,
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([]);
    });
  },
};
