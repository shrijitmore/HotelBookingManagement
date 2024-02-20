
const { MongoClient} = require('mongodb');
require('dotenv').config();
const app = require('express')

const exp = app()

exp.get('/',((req,res)=>{
    res.send("Hii")
}))
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI);

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        console.log(hii)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

exp.listen(process.env.PORT,(()=>{
    console.log("Server is activate of port 8080")
}))


