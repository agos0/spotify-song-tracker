import express from "express";
import path from "path";
import dotenv from "dotenv";
import { handleLogin } from "./middleware/auth";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "styles")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/auth", handleLogin);

app.get("/callback", (req, res) => {
    res.send("logged in")
});


app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});