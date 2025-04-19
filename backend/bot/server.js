import express from "express";
import cors from "cors";
import axios from "axios";
import { sendCheckoutMessage } from "./bot.js";

const app = express();
const PORT = 5001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const { user } = req.body;

    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "Данные пользователя отсутствуют" });
    }

    const response = await axios.get("http://localhost:5000/cart");
    const cart = response.data;

    const total = cart.reduce((sum, product) => sum + product.price, 0);

    await sendCheckoutMessage(user, cart, total);

    try {
      for (const item of cart) {
        await axios.delete(`http://localhost:5000/cart/${item.id}`);
      }
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error.message);
    }

    res.json({ status: "success", message: "Заказ отправлен в Telegram" });
  } catch (error) {
    console.error("Ошибка в /checkout:", error.message);
    res
      .status(500)
      .json({ status: "error", message: `Ошибка: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
