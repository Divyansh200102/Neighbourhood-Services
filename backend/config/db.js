const mongoose = require('mongoose');

   const connectDB = async () => {
     try {
       const conn = await mongoose.connect(process.env.MONGO_URI, {
         dbName: 'ServiceSphere'
       });
       console.log("MongoDB connected successfully.");
       console.log("Connected to database:", conn.connection.name);
     } catch (error) {
       console.error("MongoDB failed to connect", error.message);
       process.exit(1);
     }
   };

   module.exports = connectDB;