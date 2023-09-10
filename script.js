import express from "express";
import cors from "cors";
import axios from "axios";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// App is a class of the server, and created the port.
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// Use get for back to front.
// MOST IMPORTANT; defining methods, main logic
// get, post, delete; not important to remember individual, easy way to organize
// app.get("/hello", (req, res) => {
//   res.send("Hello world!");
//   console.log("test");
// });

// Creates a new database.
const file = "./db.json";

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file);
const defaultData = { habit: [] };
const db = new Low(adapter, defaultData);

await db.read();
db.data ||= defaultData;
await db.write();

// Use post for front to back.
app.post("/hello", async (req, res) => {
  try {
    const name = req.body.name;
    const frequency = req.body.frequency;

    // Creates dictionary to add to database.
    const newHabit = {
      name: name,
      frequency: frequency,
      done: false,
      completed: false,
    };

    // Pushes new information into the dictionary.
    await db.read();
    await db.data.habit.push(newHabit);
    await db.write();

    // Lets front end know that everything went through.
    res.status(200).send("sUCCESS");
  } catch (e) {
    // Lets front end know that there was an error.
    res.status(400).send(e);
  }
});

app.get("/getdata", async (req, res) => {
  console.log("GET endpoint hit!");
  await db.read();
  const { habit } = db.data;
  res.send(habit);
});
// Everytime we run the server, it'll do the stuff inside.
app.listen(port, () => {
  console.log(`Habits page listening on port ${port}`);
});
