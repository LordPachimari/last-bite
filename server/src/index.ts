import express from "express";
import "dotenv";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import routes from "./routes";
const uri =
  "mongodb+srv://Pachimari:<password>@cluster0.tebr47z.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const router = express.Router();

const app = express();

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/api", routes);
    // app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, "public")));

    const port = process.env.PORT || 5000;
    app.get("/", function (req, res) {
      res.send("Hello World");
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch((err) => console.log(err));
