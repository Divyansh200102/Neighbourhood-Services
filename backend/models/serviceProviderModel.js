const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    service_provided: String,
    price: Number,
    serviceId: { type: String, required: true }
});


module.exports = mongoose.model('ServiceProvider', serviceProviderSchema,'serviceProviders');