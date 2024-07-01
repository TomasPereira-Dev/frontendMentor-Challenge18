import { db } from "../index.js";
import { Router } from "express";

const createRouter = Router(); 

createRouter.post("/", async (req, res) => {
    try{
        const collection = (await db).collection("feedback").insertOne(req.body);
    } catch (error){
        console.log(error);
        res.sendStatus(500).send("something went wrong with the posting in the server");
    }
   
});

export { createRouter }