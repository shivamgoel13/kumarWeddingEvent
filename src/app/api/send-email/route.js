import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, countryCode, mobileNo, email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });
  const mailOptions = {
    from: email,
    to: 'shadispecialbykumar@gmail.com',
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Country Code: ${countryCode}
      Phone Number: ${mobileNo}
      Email: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}