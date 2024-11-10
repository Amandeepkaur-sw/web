const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = 5000;
// Enable CORS for all routes
app.use(cors({ origin: 'http://localhost:5174' }));  // This allows all origins

app.use(express.json());

// MongoDB Atlas connection URL
// const url = 'mongodb+srv://Aman1159:Am%40ndeep1159@cluster0.j3bry.mongodb.net/faculty?retryWrites=true&w=majority';
// const url = 'mongodb+srv://amandpk30:H2FcRTUnx6zwGmLT@cluster0.x2w6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const url = "mongodb://localhost:27017/";

const connectDB = async () => {
    try {
      console.log('hello')
console.log('Server is running on port ' + PORT);
console.log('CORS enabled for all routes');
console.log('Database connection URL: ' + url);
console.log('Profile schema defined');
console('
        await mongoose.connect(url)
        console.log('Database is connected');
    } catch (err) {

        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

connectDB();

// Schema definition and model creation
const profileSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    collegeEmployeeId: String,
    otherEmailId: String,
    contactNo: String,
    website: String,
    presentAddress: String,
    permanentAddress: String,
    aadhaarNumber: String,
    panNumber: String,
    bloodGroup: String,
    dateOfBirth: String,
});

const Profile = mongoose.model('Profile', profileSchema);

// Endpoint to save profile data
app.post('/saveFacultyProfile', async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).send({ message: 'Profile saved successfully' });
    } catch (error) {
      console.log({ message: 'Error saving profile', error });

        res.status(500).send({ message: 'Error saving profile', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
