const express = require("express");
const server = express();
const cors = require("cors");
server.use(
    cors({
        credentials: true,
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://christiharlow-portfolio-back.herokuapp.com",
        ],
    })
);

const { db, Project } = require("./db/db.js");

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.get("/projects", async (req, res) => {
    res.send({ projects: await Project.findAll() });
});

// if heroku, process.env.PORT will be provided
let port = process.env.PORT;
if (!port) {
    // otherwise, fallback to localhost 3001
    port = 3001;
}

server.get("/project/:id", async (req, res) => {
    res.send({ project: await Project.findByPk(req.params.id) });
});

server.listen(port, () => {
    console.log("server running");
});
