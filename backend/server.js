const path = require('path'); // Add path module
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // Load environment variables with explicit path

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
// const PORT = 5000; // Vercel handles the port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route for root URL
app.get('/', (req, res) => {
    res.send('Backend server is running.');
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Log if critical env vars are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('CRITICAL: EMAIL_USER or EMAIL_PASS not set in environment variables. Check Vercel project settings.');
        // For a production app, you might want to return a 500 error if these are not set
        // return res.status(500).json({ error: 'Server configuration error: Email service not configured.' });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable for email
            pass: process.env.EMAIL_PASS  // Use environment variable for password
        }
    });

    // Determine the email subject line based on form input
    let emailSubject;
    if (subject) {
        // Capitalize the first letter of the subject from the form
        const formattedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
        emailSubject = `TruckIt Inquiry: ${formattedSubject} (from ${name})`;
    } else {
        emailSubject = `TruckIt Contact Form Submission (from ${name})`;
    }

    const mailOptions = {
        from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Static sender address
        replyTo: email, // User's email address for replies
        to: 'abdalkhalid0@gmail.com', // Replace with your email
        subject: emailSubject, // Use the dynamically generated subject
        text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    };

    try {
        console.log('Attempting to send email with options:', mailOptions);
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error details:', error);
        
        let errorMessage = 'Failed to send message. Please try again later.';
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            errorMessage = 'Authentication failed. Please check server email credentials (ensure they are set in Vercel environment variables) and that an App Password is used if 2FA is enabled for Gmail.';
        } else if (error.code === 'EENVELOPE') {
            errorMessage = 'Email address issue. Please check recipient or sender email configuration.';
        }
        
        res.status(500).json({ error: errorMessage });
    }
});

/*
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/

module.exports = app; // Export the app for Vercel
