import { Router } from "express";
import { fetchData } from "../controllers/dataController.js";

const router = Router();

router.get("/enedis-data", fetchData);

export default router;
