import TelegramBot from "node-telegram-bot-api";

require("dotenv").config();
class BotService {
  private static instance: BotService;
  private bot: TelegramBot;
  private constructor() {
    console.log("tokne ", process.env.TOKEN);
    this.bot = new TelegramBot(process.env.TOKEN as string, { polling: true });
  }

  public static getInstance(): BotService {
    if (!BotService.instance) {
      BotService.instance = new BotService();
    }
    return BotService.instance;
  }

  public getBot(): TelegramBot {
    return this.bot;
  }

  public sendMessage(chatId: number, message: string): void {
    this.bot.sendMessage(chatId, message);
  }

  public sendAnimation(chatId: number, animation: string): void {
    this.bot.sendAnimation(chatId, animation);
  }
}

export default BotService.getInstance();
