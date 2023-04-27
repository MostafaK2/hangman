import clientPromise from "../../../lib/db";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "GET": {
            const {difficulty} = req.query;
            const wordList = await db.collection("hangman-words").find({difficulty}).toArray();
            const randIndex = Math.floor(Math.random() * wordList.length);
            res.status(200).json({word: wordList[randIndex]});
            break;
        }
    }
}
