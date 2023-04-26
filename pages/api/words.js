import clientPromise from "./../../lib/db";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "POST": {
            const {body: {words}} = req;
            await words.forEach(async word => {
                await db.collection("hangman-words").insertOne({word, difficulty: "hard"})
            });
            res.json({status: 200});
            break;
        }
    }
}
