import mongoose from "mongoose";
const uri = process.env.MONGO_DB_URI; // Ensure this environment variable is set

if (uri) {
    console.log(uri)
}
const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://vipuls:vipuls@cluster0.yzjof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
