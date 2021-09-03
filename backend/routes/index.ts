import { Router } from "express";
import { router as roomsRouter } from "./visitor-routes";

export const router = Router();

router.use('/rooms', roomsRouter);


