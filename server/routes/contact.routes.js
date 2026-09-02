import express from "express";
import { sendContactMessage } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/", contactLimiter, sendContactMessage);

export default router;
