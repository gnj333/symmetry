import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();
const API_TOKEN = process.env.API_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new Telegraf(API_TOKEN);

export async function sendCheckoutMessage(user, cart, total) {
  try {
    let message = "🧾 Новый заказ!\n\n";
    message += `Имя: ${user.name}\n`;
    message += `Фамилия: ${user.lastName}\n`;
    message += `Отчество: ${user.patronymic}\n`;
    message += `Email: ${user.email}\n`;
    message += `Телефон: ${user.phone}\n\n`;
    message += `Telegram: ${user.telegram}\n\n`;
    message += `Адрес: ${user.address}\n\n`;

    message += "🛒 Корзина:\n";
    for (const item of cart) {
      message += `— ${item.name} = ${item.price} ₽\n`;
      message += `  размер ${item.sizes[0]}\n`;
    }

    message += `\n💰 Итого: ${total} ₽`;

    await bot.telegram.sendMessage(CHAT_ID, message);
    console.log("Сообщение отправлено в Telegram");
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    throw error;
  }
}

bot.command("start", (ctx) => ctx.reply("Привет! Я бот для заказов."));
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
