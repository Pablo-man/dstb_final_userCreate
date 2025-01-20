import { Router } from "express";
import { createUser, deleteUser, renderUsers, editUser } from "../controllers/user.controllers.js";

const router = Router();

// Render all tasks

router.post('/', createUser);

router.put('/:id', editUser);

router.delete('/:id', deleteUser);

router.get('/', renderUsers);

export default router;