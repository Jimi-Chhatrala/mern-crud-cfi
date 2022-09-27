import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-litqp5n-shard-00-00.sdjboi7.mongodb.net:27017,ac-litqp5n-shard-00-01.sdjboi7.mongodb.net:27017,ac-litqp5n-shard-00-02.sdjboi7.mongodb.net:27017/mern-crud?ssl=true&replicaSet=atlas-l39l1h-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connection with the database", error.message);
  }
};

export default Connection;
