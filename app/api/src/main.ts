import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import * as routes from "./routes";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.set("views", path.join(__dirname, "/test"));
app.set("view engine", "ejs");

routes.register(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});