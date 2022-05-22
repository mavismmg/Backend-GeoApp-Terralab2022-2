import { text } from "express";
import { io } from "../https";
import { GeoService } from "../services/GeoService";

io.on("connect", async (socket) => {
    const geoService = new GeoService();

    // If needed.
});