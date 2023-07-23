// import schedule from "node-schedule";
import { CronJob } from "cron";
import botService from "./service/bot.service";
import { setReminder } from "./utils/schedule.utils";

export const morningGreeting = new CronJob(
  "*/5 * * * *",
  function () {
    console.log("👉 morningGreeting started");
    const message = "Good Morning! Have a nice day ahead.";
    console.log("👉 reminder", message);
    botService.sendMessage(924444645, message);
    botService.sendAnimation(
      924444645,
      "https://media.giphy.com/media/dzMu8oCKwBbpUFMBNs/giphy.gif"
    );
  },

  null,
  false
);

export const classRemainder = new CronJob(
  "*/50 * * * *",
  function () {
    const currentDate = new Date();
    // current day
    const currentDay = currentDate.toLocaleString("en-us", { weekday: "long" });
    //   10 minutes before > 10* 60 * 1000 = 600000 milliseconds
    const reminderTime = new Date(currentDate.getTime() + 10 * 60 * 1000);
    // current hour
    const currentHour = reminderTime.getHours();
    // current minute
    const currentMinute = reminderTime.getMinutes();
    const reminder = setReminder(currentHour, currentMinute, "Monday");
    console.log("👉 reminder", reminder);
    if (reminder) {
      botService.sendMessage(924444645, reminder);
    } else {
      botService.sendMessage(924444645, "no reminder Free time 🥳");
    }
  },
  null,
  false
);
