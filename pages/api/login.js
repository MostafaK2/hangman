// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("hangman");
    switch (req.method) {
        case "GET": {
            const tasks = await db.collection("hangman").find({});
            res.json({status: 200, tasks});
            break;
        }
        case "POST": {
            const {body: {username, password}} = req;
            const insertedTask = await db.collection("hangman").insertOne({username, password});
            console.log(insertedTask);
            res.json({status: 200, task});
            break;
        }
    }
}
