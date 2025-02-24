const { parse } = require('dotenv');
const {connectToDatabase} = require('../lib/rent');

exports.getRentalCar = async (req, res) => {
    try {
        const db = await connectToDatabase();
        const {year, color, steering_type,number_of_seats} = req.query;
        const filter = {};
        if(year)filter.year = parseInt(year);
        if(color)filter.color = color;
        if(steering_type)filter.steering_type = steering_type;
        if(number_of_seats)filter.number_of_seats = parseInt(number_of_seats);
        const cars = await db.collection('cars').find(filter).sort({price_per_day:1}).toArray();
        res.status(200).json(cars);
    } catch (error) {
        console.error('Error getting rental cars:', error);
        res.status(500).json({ message: 'Error getting rental cars' });
    }
};