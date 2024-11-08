import express from "express";
import { SendEmail } from "./lib.js";
import cors from 'cors'

import dotenv from "dotenv"; // Asegúrate de tener la función de enviar el correo
dotenv.config();

const app = express();
app.use(express.json());

var corsOptions = {
  // origin: ['https://customer-scopes-project.netlify.app', 'http://localhost:5173'],
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.get("/api/send-email", async (req, res) => {
  try {
    await SendEmail();
    res.status(200).send("Correo enviado");
  } catch (error) {
    res.status(500).send("Error al enviar el correo");
  }
});

app.listen(3000, () => console.log("Servidor funcionando en puerto 3000"));
