import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.set("views", path.join( __dirname, "templates"));
app.set("view engine", "ejs");

app.get( "/", ( req, res ) => {
    res.render("index");
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );