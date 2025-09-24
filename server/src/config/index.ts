import dotenv from "dotenv";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

dotenv.config();

if (!process.env.DB) {
  throw new Error("DB environment variable is not defined");
}

export const DB = process.env.DB;
export const PORT = parseInt(process.env.PORT!) || 9000;
export const JWT_KEY = process.env.JWT_KEY!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;

console.log("DB Connection String:", DB.replace(/\/\/.*:.*@/, "//***:***@"));

export let transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });
});
