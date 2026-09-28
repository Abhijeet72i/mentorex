// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // =========================================
    // CHECK API KEY
    // =========================================
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          error: "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    // =========================================
    // GET REQUEST BODY
    // =========================================
    const body = await request.json();

    console.log("Incoming Request:", body);

    const {
      fullName,
      email,
      phone,
      subject,
      country,
      preferredTime,
      message,
    } = body;

    // =========================================
    // VALIDATION
    // Phone is now REQUIRED
    // =========================================
    if (!fullName || !email || !phone || !subject || !country) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // =========================================
    // SEND EMAIL
    // =========================================
    const { data, error } = await resend.emails.send({
      from: "Mentorex <onboarding@resend.dev>",

      to:
        process.env.CONTACT_EMAIL ||
        "iamabhijeet45@gmail.com",

      replyTo: email,

      subject: `New Demo Booking Request - ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color: #2c5077;">
            New Demo Session Booking
          </h2>

          <hr />

          <p>
            <strong>Full Name:</strong>
            ${fullName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone Number:</strong>
            ${phone}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <p>
            <strong>Country:</strong>
            ${country}
          </p>

          <p>
            <strong>Preferred Time:</strong>
            ${preferredTime ?? "Not specified"}
          </p>

          <p>
            <strong>Message:</strong>
            ${message ?? "No message provided"}
          </p>

          <hr />

          <p style="font-size: 12px; color: #777;">
            This enquiry was submitted through the MentorEx website.
          </p>

        </div>
      `,
    });

    // =========================================
    // RESEND ERROR
    // =========================================
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

    // =========================================
    // SUCCESS
    // =========================================
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