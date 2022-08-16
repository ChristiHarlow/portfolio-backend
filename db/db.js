const Sequelize = require("sequelize");

const db = new Sequelize("postgres://christiharlow@localhost:5432/portfolio", {
    logging: false,
});
const Project = require("./Project")(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected");
        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Panic! DB problems... Arg!");
    }
};

connectToDB();

module.exports = { db, Project };
