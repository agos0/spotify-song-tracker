import * as express from "express";
import { handleLogin, completeAuth } from "../middleware/auth";

export const register = ( app: express.Application ) => {
    app.get("/", (req, res) => {
        res.render("testView")
    });
    app.get("/login", handleLogin);
    app.get("/me/home", completeAuth);
}