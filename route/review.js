const express = require("express");
const router = express.Router();
const UserModel = require("../models/review");

router.post('/new', async (req, res) => {

    console.log(req.body)
    try {
        const { name, rating, review } = req.body;

        const newReview = await UserModel.create({
            name: name,
            star: rating, 
            comment: review,
        });

        // Send success response
        res.status(201).json({ message: "Review saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving review" });
    }
});

router.get('/data', async (req, res) => {
    try {
        const reviews = await UserModel.find();
        res.json(reviews);  
    } catch (err) {
        res.status(500).json({ message: 'Error fetching reviews' });
    }
});
module.exports = router;
