import { Router } from "express";
import { BotController } from "../controllers/bot.controller";

class BotRoute {
  public router: Router;

  private static instance: BotRoute;

  constructor(private bot_controller: BotController) {
    this.router = Router();
    this.routes();
  }
  public static getInstance(): BotRoute {
    if (!BotRoute.instance) {
      BotRoute.instance = new BotRoute(new BotController());
    }
    return BotRoute.instance;
  }
  routes() {
    this.router.get("/", this.bot_controller.start);
    this.router.get("/morning", this.bot_controller.morningGreeting);
  }
}

export default BotRoute.getInstance();
