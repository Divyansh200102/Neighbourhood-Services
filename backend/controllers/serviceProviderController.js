const ServiceProvider = require('../models/serviceProviderModel');

const addServiceProvider = async (req, res) => {
    let providersToAdd = Array.isArray(req.body) ? req.body : [req.body];

    try {
        const savedProviders = [];

        for (const provider of providersToAdd) {
            const { name, description, service_provided, price, serviceId } = provider;

            if (!name || !serviceId) {
                return res.status(400).json({ message: 'Name and serviceId are required for all providers' });
            }

            const newServiceProvider = new ServiceProvider({
                name,
                description,
                service_provided,
                price,
                serviceId,
            });

            const savedProvider = await newServiceProvider.save();
            savedProviders.push(savedProvider);
        }

        res.status(201).json(savedProviders);
    } catch (error) {
        res.status(400).json({ message: 'Error adding service provider(s)', error: error.message });
    }
};

module.exports = {
    addServiceProvider
};