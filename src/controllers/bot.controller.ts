import botService from "../service/bot.service";
import schedule from "node-schedule";

export class BotController {
  constructor() {
    console.log("🐻  Test controller constructor");
  }
  public start = (req: any, res: any) => {
    try {
      // start the bot
      botService.sendMessage(924444645, "bot started successfully");
      res.status(200).json({ message: "bot started successfully controller" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public morningGreeting = (req: any, res: any) => {
    const morning = schedule.scheduleJob("*/3 * * * *", function () {
      const message = "Good Morning! Have a nice day ahead.";
      console.log("👉 reminder", message);
      botService.sendMessage(924444645, message);
      botService.sendAnimation(
        924444645,
        "https://media.giphy.com/media/dzMu8oCKwBbpUFMBNs/giphy.gif"
      );
    });

    res.status(200).json({ message: "morningGreeting service started" });
  };
}
