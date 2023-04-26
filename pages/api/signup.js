import clientPromise from "./../../lib/db";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "POST": {
            const {body: {username, password}} = req;
            const insertedTask = await db.collection("hangman-user").insertOne({username, password});
            console.log(insertedTask);
            res.json({status: 200});
            break;
        }
    }
}
