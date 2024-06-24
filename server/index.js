import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import { connection } from "./database/MongoDB/connection.js";
import { suggestionRouter } from "./routes/suggestionRouter.js";
import { createRouter } from "./routes/createRouter.js";
import { deleteRouter } from "./routes/deleteRouter.js";
import { editRouter } from "./routes/editRouter.js";


dotenv.config();
const app = express();
const selectedPort = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/suggestions", suggestionRouter);
app.use("/create_feedback", createRouter);
app.use("/delete_feedback", deleteRouter);
app.use("/edit_feedback", editRouter);


app.disable("x-powered-by");


export const db = connection(); 

app.use((req, res) => {
    res.status(404).send('<h1>404 not found</h1>');
});

app.listen(selectedPort, () => {
    console.log(`server is running on port http://localhost:${selectedPort}`)
});

export default app;

