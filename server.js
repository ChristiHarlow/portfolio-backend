const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());

const { db, Project } = require("./db/db.js");

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.get("/projects", async (req, res) => {
    res.send({ projects: await Project.findAll() });
});

server.get("/project/:id", async (req, res) => {
    res.send({ project: await Project.findByPk(req.params.id) });
});

server.listen(3001, () => {
    console.log("server running");
});
