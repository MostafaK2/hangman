import clientPromise from "./../../lib/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("hangman");
  switch (req.method) {
    case "GET": {
      const usersWithLeaderBoard = await db
        .collection("hangman-user")
        .find({score: {$gt: 0}})
        .toArray();
      console.log(usersWithLeaderBoard);
      res.status(200).json(usersWithLeaderBoard);
      break;
    }
    case "POST": {
      const {
        body: { score, _id },
      } = req;

      console.log(_id);

      const a = await db
        .collection("hangman-user")
        .updateOne({ _id: new ObjectId(_id) }, { $set: { score: score } });
      console.log("did it set" + score);
      res.status(200).json();
      break;
    }
  }
}
