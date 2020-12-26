import axios from "axios";
import { CronJob } from "cron";

import { CRON_TIMER, DAY_BEFORE, CRUD_SERVER_URL } from "../config/config";
import { sendNotification } from "../sender/sendNotification";

// Run job every every day//hour
const job = new CronJob(CRON_TIMER, async () => {
  try {
    //Get todos
    const response = await axios.get(CRUD_SERVER_URL);

    const date = new Date();
    date.setDate(date.getDate() - DAY_BEFORE);

    // send notification
    for (const item of response.data.todos) {
      //TODO should be parallel with promise.all
      if (item.done === false && new Date(item.date) >= date) await sendNotification(item);
    }

    console.log("[Cron Job] - all notifications sended");
  } catch (e) {
    console.error("[Cron Job] - send error", e);
  }
});

export const cronJob = job;
