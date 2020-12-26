import { Response, Request } from "express";
import { ITodo } from "../interfaces/todo";
import Todo from "../models/todo";

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ message: "All todos", todos });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Can't find todos" });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Todo deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Can't delete todos" });
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const todo: ITodo = new Todo({
      task: body.task,
      date: new Date(body.date),
      description: body.description,
      done: false,
    });

    const newTodo: ITodo = await todo.save();

    res.status(200).json({ message: "Todo created", todo: newTodo });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Can't create a todo" });
  }
};

const editTodo = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, body);

    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Can't edit todo" });
  }
};

export { getTodos, createTodo, editTodo, deleteTodo };
