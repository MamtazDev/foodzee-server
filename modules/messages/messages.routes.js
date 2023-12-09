import express from "express";
import { sendEmailAdmin } from "./messages.controller.js";

const router = express.Router();

router.post("/sendmail", sendEmailAdmin);

export default router;
