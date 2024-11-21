const Service = require('../models/serviceModel');
const ServiceProvider = require('../models/serviceProviderModel');


const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).send("Error fetching the services: " + error.message);
    }
};

const addServices = async (req, res) => {
    try {
        const services = req.body;
        const insertedServices = await Service.insertMany(services); // Make sure to await this
        res.status(201).json(insertedServices);
    } catch (error) {
        res.status(500).send("Error adding services: " + error.message);
    }
};

const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
   
};
const getServiceProvidersByServiceId = async (req, res) => {
    const { id } = req.params;
    try {
        // Check if the service exists
        const serviceExists = await Service.exists({ _id: id });
        if (!serviceExists) {
            return res.status(404).json({ message: 'Service not found' });
        }

        // Find all service providers with matching serviceId
        const serviceProviders = await ServiceProvider.find({ serviceId: id });

        res.status(200).json(serviceProviders);
    } catch (error) {
        console.error('Error fetching service providers:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getAllServices,
    addServices,
    getServiceById,
    getServiceProvidersByServiceId
};
