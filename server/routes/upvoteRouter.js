import { db } from "../index.js";
import { Router } from "express";
import { io } from "../index.js";

const upvoteRouter = Router(); 

upvoteRouter.post("/", async (req, res) => {
    console.log("llamada a upvote_feedback")
    try{
        const collection = (await db).collection("feedback").updateOne({title: req.body.title}, {$push: {upvotedBy: req.body.upvotedBy }, $inc: {upvotes: 1}});
        console.log(await collection)
    }catch(error){
        console.log(error);
        res.sendStatus(500).send("something went wrong with request at the server");
    }
});

export  { upvoteRouter }