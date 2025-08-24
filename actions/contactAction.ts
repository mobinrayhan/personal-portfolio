"use server";

import { InitialState } from "@/app/contact/page";
import nodemailer from "nodemailer";

export const sendMail = async (
  _: InitialState,
  formData: FormData
): Promise<InitialState> => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: message,
      html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`,
    });
    return {
      status: "success",
      message: `✅ Thanks ${name} for your message! I will get back to you soon.`,
    };
  } catch (error) {
    return {
      status: "error",
      message: `Sorry ${name} 🙏. Failed to send message. Please try again or contact me directly via email!`,
    };
  }
};
