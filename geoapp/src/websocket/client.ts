import { io } from "../https";
import { GeoService } from "../services/GeoService";

interface IParams {
    text: string;
    email: string;
};

io.on("connect", (socket) => {
    const geoService = new GeoService();

    // If needed.
});