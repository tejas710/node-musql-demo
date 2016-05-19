module.exports = function(sequelize, DataTypes){

    var StudentColumns = {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      mobileno: DataTypes.BIGINT,
    };
    var StudentConfig = {
      classMethods: {
        }
    };
    var Student = sequelize.define("Student", StudentColumns, StudentConfig);
    return Student;
};
