import * as express from "express";
import { handleLogin, completeAuth } from "../middleware/auth";

export const route = (app: express.Application) => {
    app.get("/login", handleLogin);
    app.get("/callback", completeAuth);
}