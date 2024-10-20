import { db } from "../index.js";
import { Router } from "express";

const editRouter = Router(); 

editRouter.post("/", async (req, res) => {
    console.log("llamada a edit_feedback", "request:", req)
    try{
        const collection = (await db).collection("feedback").updateOne({"title": req.body.originalTitle}, {"$set": req.body});
        console.log(await collection, req.body._id)
    }catch(error){
        console.log(error);
        res.sendStatus(500).send("something went wrong with request at the server");
    }
    
});

export  { editRouter }