module.exports = (sequelize, Sequelize) => {
    const Table = sequelize.define("test_Table", {
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.DOUBLE
      },
      major: {
        type: Sequelize.STRING
      }
    });
  
    return Table;
  };