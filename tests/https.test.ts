import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "./database"
import { routes } from "./router.test"

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Connected", socket.id);
});

app.use(express.json())

app.use(routes);

export { http, io };