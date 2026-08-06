// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check API Key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();

    console.log("Incoming Request:", body);

    const {
      fullName,
      email,
      subject,
      country,
      preferredTime,
      message,
    } = body;

    // Validation
    if (!fullName || !email || !subject || !country) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Mentorex <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "iamabhijeet45@gmail.com",
      replyTo: email,
      subject: `New Demo Booking Request - ${subject}`,
      html: `
        <h2>New Demo Session Booking</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Country:</strong> ${country}</p>

        <p><strong>Preferred Time:</strong> ${
          preferredTime ?? "Not specified"
        }</p>

        <p><strong>Message:</strong> ${
          message ?? "No message provided"
        }</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("Email Sent:", data);

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Contact API Error:", err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}