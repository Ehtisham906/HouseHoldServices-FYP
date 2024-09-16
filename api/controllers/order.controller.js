import fs from "fs";
import { transporter } from "../config/emailConfig.js"; 

export const processServiceRequest = (req, res) => {
    const {
        serviceType,
        specificService,
        name,
        email,
        phoneNumber,
        address,
        price,
        quantity,
    } = req.body;

    const file = req.file;

    if (!serviceType || !specificService || !name || !email || !phoneNumber || !address) {
        return res.status(400).json({ error: "Please fill in all required fields." });
    }

    let emailText = `New service request: 
  Service Type: ${serviceType}
  Specific Service: ${specificService}
  Name: ${name}
  Email: ${email}
  Phone Number: ${phoneNumber}
  Address: ${address}
  Price: ${price}
  Quantity: ${quantity}`;

    if (file) {
        emailText += `\n\nAttached file: ${file.filename}`;
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Service Request",
        text: emailText,
        attachments: file
            ? [
                {
                    filename: file.originalname,
                    path: file.path,
                },
            ]
            : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ error: "Error sending email. Please try again." });
        }

        if (file) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error("Error deleting file:", err);
                }
            });
        }

        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Service request submitted successfully" });
    });
};

