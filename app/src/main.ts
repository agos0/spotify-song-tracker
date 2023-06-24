import express from "express";
import path from "path";
import dotenv from "dotenv";
import { generateRandomString } from "./utils/stringGenerator";
import { handleLogin, completeAuth, testAuth } from "./middleware/auth";
import querystring from "querystring";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "styles")));

app.get('/login', handleLogin);

app.get('/callback', completeAuth);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});