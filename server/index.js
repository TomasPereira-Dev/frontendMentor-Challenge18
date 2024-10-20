import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import { connection } from "./database/MongoDB/connection.js";
import { suggestionRouter } from "./routes/suggestionRouter.js";
import { createRouter } from "./routes/createRouter.js";
import { deleteRouter } from "./routes/deleteRouter.js";
import { editRouter } from "./routes/editRouter.js";
import { upvoteRouter } from "./routes/upvoteRouter.js";


dotenv.config();
const app = express();
const httpServer = createServer(app);
export const io = new Server(httpServer, {cors: {origin: "*"}});
const selectedPort = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.use("/suggestions", suggestionRouter);
app.use("/create_feedback", createRouter);
app.use("/delete_feedback", deleteRouter);
app.use("/edit_feedback", editRouter);
app.use("/upvote_feedback", upvoteRouter);

export const db = connection(); 

app.use((req, res) => {
    res.status(404).send('<h1>404 not found</h1>');
});


io.on("connection", (socket) => {
    console.log("a user has been connected", socket.id)

    socket.on("upvote", async (data) => {

        const { currentUser, title, upvotedBy } = data;
        const collection = (await db).collection("feedback");

        if(upvotedBy.length >= 1 && upvotedBy.includes(currentUser.username)){
            console.log("this user already upvoted this post")
            const undoUpvote = await collection.updateOne({title: title}, {$pull: {upvotedBy: currentUser.username }, $inc: {upvotes: -1}});
            socket.emit("unUpvotedSuggestion", `${currentUser.username} has undone his upvote to this post`)
        }else{
            console.log("this user never upvoted this post")
            const upvote = await collection.updateOne({title: title}, {$push: {upvotedBy: currentUser.username }, $inc: {upvotes: 1}});
            socket.emit("upvotedSuggestion", `a post has been upvoted by ${currentUser.username}`);
        }
        
    });

    socket.on("disconnect", () => {
        socket.disconnect();
        console.log("a user has been disconected")
    });
});





app.disable("x-powered-by");

httpServer.listen(selectedPort, () => {
    console.log(`server is running on port http://localhost:${selectedPort}`)
});

export default app;

