import clientPromise from "./../../lib/db";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "POST": {
            const {body: {username, password}} = req;
            const userFound = await db.collection("hangman-user").find({username, password}).toArray();
            console.log('REACHED', userFound);
            if (userFound.length > 0)
                res.status(200).json();
            else
                res.status(500).json();
            break;
        }
    }
}