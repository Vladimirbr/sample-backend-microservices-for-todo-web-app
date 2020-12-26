import express from "express";
import cors from "cors";
import compression from "compression";
import httpErrors from "http-errors";
import logger from "morgan";
import dotenv from "dotenv";

import indexRouter from "./routes/index";

import connectToDb from "./db/connect";
// ENV var config
dotenv.config();

const app: express.Application = express();

app.use(cors());
app.use(compression());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  next(httpErrors(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// connect to mongodb
connectToDb();

export default app;
