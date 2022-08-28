const Sequelize = require("sequelize");

let options = {};
let databaseURL = process.env.DATABASE_URL;
if (!databaseURL) {
    // this means we're on localhost!
    (databaseURL = "postgres://christiharlow@localhost:5432/portfolio"),
        (options = {
            logging: false,
        });
} else {
    // we're not on localhost!
    options = {
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    };
}

const db = new Sequelize(databaseURL, options);
const Project = require("./Project")(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected");
        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Panic!");
    }
};

connectToDB();

module.exports = { db, Project };
