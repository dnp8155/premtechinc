import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '25mb',
    },
  },
};

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
    const { 
      fullName, 
      email, 
      phone, 
      company, 
      location, 
      category, 
      stage, 
      details, 
      attachmentName, 
      attachmentData, 
      attachmentType,
      attachmentSize 
    } = req.body || {};

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full name and email are required.' });
    }

    // Gmail strict limit check: maximum 25 MB
    const MAX_SIZE_BYTES = 25 * 1024 * 1024;
    if (attachmentSize && attachmentSize > MAX_SIZE_BYTES) {
      return res.status(400).json({ 
        error: 'Attachment exceeds Gmail limit of 25MB. Please upload a smaller file or send download link.' 
      });
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

    const attachments = [];
    if (attachmentData && attachmentName) {
      attachments.push({
        filename: attachmentName,
        content: attachmentData.includes('base64,') ? attachmentData.split('base64,')[1] : attachmentData,
        encoding: 'base64',
        contentType: attachmentType || 'application/octet-stream',
      });
    }

    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
      </head>
      <body style="margin: 0; padding: 30px 10px; background-color: #080c12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #0f1622; border: 1px solid #1e293b; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          
          <!-- BRAND TOP BAR -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 35px 35px 25px 35px; border-bottom: 2px solid #2563eb;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; color: #60a5fa; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 8px;">
                      PREM TECHNOLOGY INC. · PORTAL INTAKE
                    </div>
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">
                      New Client Project Inquiry
                    </h1>
                    <div style="color: #94a3b8; font-size: 12px; margin-top: 6px;">
                      Received: ${formattedDate} (EST)
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MAIN CONTENT BODY -->
          <tr>
            <td style="padding: 35px 35px 25px 35px;">

              <!-- BADGES -->
              <div style="margin-bottom: 25px;">
                <span style="display: inline-block; padding: 5px 14px; background-color: rgba(37, 99, 235, 0.15); border: 1px solid rgba(59, 130, 246, 0.4); color: #93c5fd; border-radius: 9999px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                  ${category || 'Structural Engineering'}
                </span>
                <span style="display: inline-block; padding: 5px 14px; background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #f1f5f9; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-left: 6px;">
                  Stage: ${stage || 'Planning'}
                </span>
              </div>

              <!-- CLIENT SPECS TABLE -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 30px; background-color: #0a0e17; border: 1px solid #1e293b; border-radius: 14px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; width: 36%; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Client Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #ffffff; font-size: 14px; font-weight: 700;">
                    ${fullName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Email Address
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Phone Number
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px; font-weight: 500;">
                    ${phone ? `<a href="tel:${phone}" style="color: #f1f5f9; text-decoration: none;">${phone}</a>` : '<span style="color:#64748b;">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Company / Organization
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px; font-weight: 600;">
                    ${company || '<span style="color:#64748b;">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Project Location
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px; font-weight: 600;">
                    📍 ${location || 'Canada'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Project Category
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #1e293b; color: #60a5fa; font-size: 14px; font-weight: 700;">
                    ${category || 'General Structural'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Attachment Status
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px;">
                    ${attachmentName 
                      ? `<span style="color: #4ade80; font-weight: 700;">📎 Attached: ${attachmentName}</span>` 
                      : '<span style="color: #64748b;">No files attached</span>'}
                  </td>
                </tr>
              </table>

              <!-- SCOPE & BRIEF BOX -->
              <div style="background-color: #0a0e17; border: 1px solid #1e293b; border-left: 4px solid #3b82f6; border-radius: 12px; padding: 22px; margin-bottom: 30px;">
                <div style="font-size: 11px; font-weight: 800; color: #60a5fa; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
                  PROJECT SCOPE &amp; ENGINEERING BRIEF
                </div>
                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #e2e8f0; white-space: pre-wrap; font-family: inherit;">
${details || 'No detailed brief description provided.'}
                </p>
              </div>

              <!-- DIRECT REPLY CTA -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=RE: Prem Technology Inc. Project Inquiry - ${fullName}" 
                       style="display: inline-block; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); text-align: center; letter-spacing: 0.3px;">
                      Reply Directly to ${fullName} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #0a0e17; padding: 25px 35px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; line-height: 1.6; color: #64748b;">
              <strong>Prem Technology Inc.</strong> · Structural Engineering Practice<br>
              Direct Response Standard: Technical review performed directly by licensed engineering staff.<br>
              <a href="https://www.premtechinc.com" style="color: #94a3b8; text-decoration: underline;">www.premtechinc.com</a> · Canada &amp; USA
            </td>
          </tr>

        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Prem Technology Web Portal" <virag@premtechinc.com>`,
      to: 'virag@premtechinc.com',
      replyTo: email,
      subject: `[Project Inquiry] ${fullName} — ${category} (${location})`,
      text: `New Client Project Inquiry\n\nClient: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nLocation: ${location}\nCategory: ${category}\nStage: ${stage}\n\nProject Scope & Requirements:\n${details}\n\nAttachment: ${attachmentName || 'None'}`,
      html: htmlContent,
      attachments,
    });

    return res.status(200).json({ success: true, message: 'Inquiry and attachment dispatched successfully via Gmail.' });
  } catch (error) {
    console.error('SMTP Send Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to dispatch email.' });
  }
}
