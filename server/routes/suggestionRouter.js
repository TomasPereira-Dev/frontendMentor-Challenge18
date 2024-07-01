import { db } from "../index.js";
import { Router } from "express";

const suggestionRouter = Router(); 

suggestionRouter.get("/", async (req, res) => {
    const collection = (await db).collection("feedback").find({}).toArray();
    res.send(await collection);
});

export { suggestionRouter }