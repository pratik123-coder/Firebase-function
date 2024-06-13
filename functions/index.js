import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import { getRooms } from "./controllers/rooms.controllers.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Firebase!');
});
  
app.post('/check-rooms', getRooms);
  
export const api = onRequest(app);