import mongoose from "mongoose";

import { MONGO_URI } from "../config/config";

mongoose.Promise = global.Promise;

mongoose.set("useFindAndModify", false);

//TODO add reconnect logic on errors
// Create the database connection
const connectToDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error(`[DB coonector] - Mongoose create the database connection error`, err);
  }
};

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log(`[DB coonector] - Mongoose default connection open to `, MONGO_URI);
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.error("[DB coonector] - Mongoose default connection error: ", err);
});

//When mongoose reconnected
mongoose.connection.on("reconnected", () => {
  console.log("[DB coonector] - Mongoose Connection Reestablished");
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("[DB coonector] - Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("[DB coonector] - Mongoose default connection disconnected through app termination");
    process.exit(0);
  });
});

export default connectToDb;
