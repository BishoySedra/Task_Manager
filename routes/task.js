import { Router } from "express";
import * as taskControllers from "../controllers/task.js";

const router = Router();

router.get(`/`, taskControllers.getAllTasks);
router.get(`/:id`);
router.post(`/`);
router.patch(`/:id`);
router.delete(`/:id`);

export default router;