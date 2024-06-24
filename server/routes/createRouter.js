import { db } from "../index.js"
import { Router } from "express"

const createRouter = Router(); 

createRouter.post("/", async (req, res) => {
    const collection = (await db).collection("feedback").find({}).toArray();
    res.send(await collection);
})

export { createRouter }