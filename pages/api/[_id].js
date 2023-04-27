import clientPromise from "./../../lib/db";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "GET": {
            const {_id} = req.query;
            const word = await db.collection("hangman-words").find({"_id": new ObjectId(_id)}).toArray();
            res.status(200).json({word});
            break;
        }
    }
}
