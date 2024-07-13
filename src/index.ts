import express, {Express, Request, Response} from 'express';
import dotenv from "dotenv";
import router from "./routes/books";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (request: Request, response: Response) => {
    response.send("Express + TypeScript Server");
})

app.use("/books", router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});