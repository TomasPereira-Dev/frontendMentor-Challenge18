import { db } from "../index.js";
import { Router } from "express";

const deleteRouter = Router(); 

deleteRouter.post("/", async (req, res) => {
    console.log("llamada a delete_feedback", "request:", req)
    try{
        const collection = (await db).collection("feedback").deleteOne({title: req.body.originalTitle});
        console.log(await collection, req.body)
    }catch(error){
        console.log(error);
        res.sendStatus(500).send("something went wrong with request at the server");
    }
    
});

export  { deleteRouter }