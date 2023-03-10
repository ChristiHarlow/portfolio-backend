const express = require("express");
const server = express();
const cors = require("cors");
server.use(
    cors({
        credentials: true,
        origin: [
            "https://christiaharlow.com",
            "https://www.christiaharlow.com",
            "http://localhost:3000",
        ],
    })
);

const { db, Project } = require("./db/db.js");

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.get("/projects", async (req, res) => {
    res.send({
        projects: await Project.findAll({}),
    });
});

let port = 3001;
if (process.env.PORT) {
    port = process.env.PORT;
}

server.listen(port, () => {
    console.log("server running");
});
