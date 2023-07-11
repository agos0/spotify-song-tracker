import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import * as aSeq from "./routes/authSequence";
import * as statRoute from "./routes/stats"

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send('running');
})
aSeq.route(app);
statRoute.route(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});