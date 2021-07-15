import dotenv from "dotenv";
import express from "express";
import { authRouter } from "./routes";
import colors from "colors";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello Prince Wolrd");
});

app.listen(PORT, () => {
  console.clear();
  console.log(
    colors.green(`ready - started server on`),
    colors.blue(`http://localhost:${PORT}`)
  );
});
