import { Document } from "mongoose";

export interface ITodo extends Document {
  task: string;
  description?: string;
  date: Date;
  done?: boolean;
}
