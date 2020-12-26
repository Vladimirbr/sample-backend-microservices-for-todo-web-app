import { Router } from "express";

import { getTodos, createTodo, editTodo, deleteTodo } from "../controllers/todo";

const router = Router();
//TODO add validations
/* GET all todos */
router.get("/", getTodos);

/* Create a new todo */
router.post("/", createTodo);

/* Edit todo by id*/
router.put("/:id", editTodo);

/* Delete todo by id*/
router.delete("/:id", deleteTodo);

export default router;
