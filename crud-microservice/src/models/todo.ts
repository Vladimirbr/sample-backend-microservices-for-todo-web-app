import { Schema, model } from "mongoose";

import { ITodo } from "../interfaces/todo";

const ToDoSchema: Schema = new Schema(
  {
    task: { type: String, required: true },
    date: { type: Date, required: true }, //deadline date
    description: { type: String },
    done: { type: Boolean },
  },
  { timestamps: true }
);

export default model<ITodo>("Todo", ToDoSchema);
