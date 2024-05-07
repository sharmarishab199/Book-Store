const express=require("express")
const app=express()
const port =process.env.PORT||5000
const cors=require("cors")

//middleware
app.use(cors())
app.use(express.json())

//connection to DB
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://rishab:rishab@cluster0.oocmw0r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();



    //create a collection of documents
    const bookCollections=client.db("BookInventory").collection("books")
    //insert a book to db:post method
    app.post("/upload-book",async(req,res)=>{
        const data=req.body;
        const result=await bookCollections.insertOne(data);
        res.send(result)
    })
    //get single book data
    app.get("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)}
        const result=await bookCollections.findOne(filter)
        res.send(result)
    })
    //update a book data
    app.patch("/book/:id",async(req,res)=>{
        const id=req.params.id;
        console.log(id)

        const updateBookData=req.body;
        //finding the id in DB
        const filter={_id:new ObjectId(id)}
        //set upsert true if no document match the filter
        const options={upsert:true}

        const updateDoc={
            $set:{
                ...updateBookData
            }
        }

        //update
        const result=await bookCollections.updateOne(filter,updateDoc,options)
        res.send(result)
    })
    //delete book
    app.delete("/book/:id",async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)}
        const result=await bookCollections.deleteOne(filter)
        res.send(result)
    })
    //find by category
    app.get("/all-books",async(req,res)=>{
        let query={}
        if(req.query?.category){
            query={category:req.query.category}
        }
        const result=await bookCollections.find(query).toArray()
        res.send(result)
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error){
    console.log(error)
  }
}
run().catch(console.dir);


// app.get('/',(req,res)=>{
//     res.send('Hello W')
// })

// deployment config
const path = require('path');
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/mern-client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'mern-client', 'dist', 'index.html'));
    })
}

app.listen(port,()=>{
    console.log(`listned on ${port}`)
})