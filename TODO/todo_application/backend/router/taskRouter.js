import express from 'express';
import { isAuthenticated } from "../middleware/auth.js";
import { createTask, getMyTask, deleteTask, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.post('/add', isAuthenticated, createTask);
router.get('/my', isAuthenticated, getMyTask);
router.delete('/delete/:id', isAuthenticated, deleteTask);
router.put('/update/:id', isAuthenticated, updateTask);

export default router;