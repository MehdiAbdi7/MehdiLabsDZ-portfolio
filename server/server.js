import dns from "dns";
// Réseaux algériens : les DNS FAI résolvent mal les enregistrements SRV
// d'Atlas. On force des résolveurs publics AVANT toute connexion Mongo.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";
import { globalLimiter } from "./middlewares/rateLimiter.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI manquant. Vérifiez votre fichier .env.");
  process.exit(1);
}

await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Render (et tout hébergeur derrière un proxy) : nécessaire pour que req.ip
// renvoie la vraie IP du visiteur, sinon le rate limiting est inopérant.
app.set("trust proxy", 1);

// Origines autorisées, surchargeables par variable d'environnement.
const allowedOrigins = (
  process.env.CORS_ORIGINS ||
  "http://localhost:3000,https://mehdilabsdz.netlify.app"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Pas d'origine = appel serveur à serveur ou outil type Postman.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error("Origine non autorisée par la politique CORS."));
    },
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use(globalLimiter);

// Sonde de santé : utile pour vérifier que Render a bien démarré le service.
app.get("/health", (req, res) => {
  res.json({ success: true, status: "ok", uptime: process.uptime() });
});

app.use("/api/contact", contactRoutes);

// Ces deux middlewares restent obligatoirement en dernier.
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
