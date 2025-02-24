const {connectToDatabase} = require('../lib/rent');
const { ObjectId } = require("mongodb");

exports.getProfile = async (req, res) => {
    try {
        console.log("User ID from token:", req.user._id);

        const db = await connectToDatabase();
        const user = await db.collection('users').findOne({ _id: new ObjectId(req.user._id) },{ projection: { password: 0 } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error getting user profile:', error);
        res.status(500).json({ message: 'Error getting user profile' });
    }
};