// config/database.js
import mongoose from 'mongoose';
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1');

    console.log('Database Connected');
  } catch (error) {
    console.error('Database Connection Error:', error);
    process.exit(1); // Exit the application on error
  }
}

export default connectToDatabase;