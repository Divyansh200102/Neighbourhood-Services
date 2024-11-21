    const express = require('express');
    const dotenv = require('dotenv');
    const connectDB = require('./config/db');
    const serviceRoutes = require('./routes/serviceRoutes');
    const serviceProviderRoutes = require('./routes/serviceProviderRoutes');
    const userRoutes=require('./routes/userRoutes');

    dotenv.config();
    connectDB();

    const app = express();
    const cors = require('cors');

    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/services', serviceRoutes);
    app.use('/api/service-provider', serviceProviderRoutes);
    app.use('/api/user',userRoutes)

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
