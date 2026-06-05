const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
require('dotenv').config({ path: './env.txt' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.post("/send-lead", async (req, res) => {
  try {
    const { name, phone, email, notes } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Customer name and phone number are required." });
    }

    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York"
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
      from: `"Andrews Lead Form" <${process.env.GMAIL_USER}>`,
      to: process.env.LEAD_RECIPIENT_EMAIL,
      subject: `New Insurance Lead: ${name}`,
      text:
`New Insurance Lead

Date: ${now}

Customer Name: ${name}
Phone Number: ${phone}
Email Address: ${email || "Not provided"}

Notes:
${notes || "No notes provided"}

Captured from the Andrews Insurance Lead Form.`
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Lead sent successfully." });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Unable to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Lead form server running at http://localhost:${PORT}`);
});
