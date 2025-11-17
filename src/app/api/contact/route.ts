import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = await req.json();

    // SMTP configuration
    const SMTP_CONFIG = {
      HOST: "mail.smatpay.africa",
      PORT: 465,
      USER: "noreply@smatpay.africa",
      PASS: "?jPvp_cS3cObf0pG",
    };

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.HOST,
      port: SMTP_CONFIG.PORT, 
      secure: true,
      auth: {
        user: SMTP_CONFIG.USER,
        pass: SMTP_CONFIG.PASS,
      },
      
    });

    // Define email options
    const mailOptions = {
      from: `"SmatPay Contact" <noreply@smatpay.africa>`,
      to: "info@smatechgroup.com",
      subject: "SmatPay Contact Form",
      text: `
        Name: ${name}
        Company: ${company || "N/A"}
        Phone: ${phone || "N/A"}
        Email: ${email || "N/A"}
        Subject: ${subject} || "N/A"}
        Message: ${message || "N/A"}
      `,
      html: `
        <h3>Client Email</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "✅ Your message was sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // You should use this section to check the exact error message in your live logs!
    console.error("❌ Error connecting to the server.", error); 
    return new Response(
      JSON.stringify({ success: false, error: "❌ There was a problem sending your message." }),
      { status: 500 }
    );
  }
}