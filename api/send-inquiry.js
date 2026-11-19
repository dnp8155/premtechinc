import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, phone, company, location, category, stage, details } = req.body || {};

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full name and email are required.' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'virag@premtechinc.com',
        pass: 'bkijyhslvlhsutvq',
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f15; color: #ffffff; padding: 20px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background-color: #111827; border-radius: 16px; border: 1px solid #1f2937; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #1e293b, #0f172a); padding: 30px 25px; border-bottom: 2px solid #3b82f6; text-align: left; }
          .brand { font-size: 13px; font-weight: 700; color: #60a5fa; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
          .title { font-size: 24px; font-weight: 800; color: #ffffff; margin: 0; }
          .content { padding: 30px 25px; }
          .badge { display: inline-block; padding: 4px 12px; background-color: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #93c5fd; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
          .grid td { padding: 12px 10px; border-bottom: 1px solid #1f2937; font-size: 14px; }
          .label { color: #9ca3af; width: 35%; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
          .val { color: #f3f4f6; font-weight: 500; }
          .message-box { background-color: #0d131c; border: 1px solid #1f2937; border-radius: 12px; padding: 20px; margin-top: 15px; }
          .message-label { font-size: 11px; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; }
          .message-text { font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap; margin: 0; }
          .footer { background-color: #0b0f15; padding: 20px 25px; text-align: center; border-top: 1px solid #1f2937; font-size: 12px; color: #6b7280; }
          .reply-btn { display: inline-block; background-color: #2563eb; color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 13px; padding: 12px 24px; border-radius: 9999px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">Prem Technology Inc. · Project Inquiry</div>
            <h1 class="title">New Client Scope Submission</h1>
          </div>
          <div class="content">
            <span class="badge">${category || 'Engineering Scope'} · ${stage || 'Planning'}</span>
            
            <table class="grid">
              <tr>
                <td class="label">Full Name</td>
                <td class="val"><strong>${fullName}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="val"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="val">${phone || 'Not Provided'}</td>
              </tr>
              <tr>
                <td class="label">Organization</td>
                <td class="val">${company || 'Not Provided'}</td>
              </tr>
              <tr>
                <td class="label">Project Location</td>
                <td class="val">${location || 'Canada'}</td>
              </tr>
              <tr>
                <td class="label">Project Category</td>
                <td class="val">${category || 'General'}</td>
              </tr>
              <tr>
                <td class="label">Project Stage</td>
                <td class="val">${stage || 'Planning'}</td>
              </tr>
            </table>

            <div class="message-box">
              <div class="message-label">Scope &amp; Engineering Requirements</div>
              <p class="message-text">${details || 'No detailed brief provided.'}</p>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}?subject=RE: Prem Technology Inc. Project Inquiry - ${fullName}" class="reply-btn">Reply to ${fullName}</a>
            </div>
          </div>
          <div class="footer">
            Received via Prem Technology Inc. (premtechinc.com) Official Web Portal.<br>
            Direct response standard: Technical review performed by licensed engineering staff.
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Prem Technology Web Portal" <virag@premtechinc.com>`,
      to: 'virag@premtechinc.com',
      replyTo: email,
      subject: `[New Inquiry] ${fullName} — ${category} (${location})`,
      text: `New Inquiry from ${fullName} (${email})\nPhone: ${phone}\nCompany: ${company}\nCategory: ${category}\nLocation: ${location}\nStage: ${stage}\n\nDetails:\n${details}`,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, message: 'Inquiry email dispatched successfully.' });
  } catch (error) {
    console.error('SMTP Send Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to dispatch email.' });
  }
}
