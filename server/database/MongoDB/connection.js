import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const connection = async () => {
    try {
        await client.connect();
        console.log("conectado a la base de datos");
        return client.db("feedbackApp");
    } catch(error) {
        console.error(error);
        throw error;
    }
}

