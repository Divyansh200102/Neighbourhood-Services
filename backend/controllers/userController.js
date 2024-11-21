const User=require('../models/userModel');

// Function to add a new user
const addUser = async (req, res) => {
    const { Username, Email, Password } = req.body;

    // Validate required fields
    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: 'Username, Email, and Password are required' });
    }

    const newUser = new User({
        Username,
        Email,
        Password, 
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error adding user', error: error.message });
    }
};

module.exports = {
    addUser
};