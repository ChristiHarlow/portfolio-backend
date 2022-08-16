const { DataTypes } = require("sequelize");

const Project = (db) => {
    return db.define("project", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        summary: DataTypes.STRING,
        imageURL: DataTypes.STRING,
        objectivesText: DataTypes.TEXT,
        futureImprovements: DataTypes.TEXT,
        techStack: DataTypes.TEXT,
        links: DataTypes.TEXT,
    });
};

module.exports = Project;
