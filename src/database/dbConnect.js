const DATABASE = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1/my_database`)

  const connect = async () => {
  try {
  mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

