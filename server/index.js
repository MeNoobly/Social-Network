import express from "express";
import cors from "cors";
import usersRouter from "./routes/usersRoutes.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", usersRouter);

try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
} catch (error) {
    console.log(`Произошла ошибка при запуске сервера ${error}`);
}
