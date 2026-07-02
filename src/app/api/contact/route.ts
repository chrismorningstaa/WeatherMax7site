import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"WeatherMax7 Website" <${process.env.SMTP_USER}>`,
      to: "christianitymendoza2828@gmail.com",
      replyTo: email,
      subject: `[WeatherMax7] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <div style="background: #0a0a0a; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #F5A623; font-size: 24px; margin: 0;">WeatherMax 7</h1>
            <p style="color: #a1a1aa; margin: 4px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-weight: bold; color: #18181b; width: 100px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; color: #3f3f46;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-weight: bold; color: #18181b;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; color: #3f3f46;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-weight: bold; color: #18181b;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; color: #3f3f46;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #18181b; margin-bottom: 8px;">Message</p>
            <div style="background: #ffffff; border: 1px solid #e4e4e7; border-radius: 6px; padding: 16px; color: #3f3f46; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa; text-align: center;">
            Sent from the WeatherMax7 website contact form — Atmos Corex LLC
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
