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
        error: 'Attachment exceeds Gmail limit of 25MB. Please upload a smaller file.' 
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

    // Clean, executive, crisp Light Theme corporate design
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
      </head>
      <body style="margin: 0; padding: 24px 10px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
          
          <!-- BRAND TOP BAR WITH ICON LOGO -->
          <tr>
            <td style="background-color: #ffffff; padding: 28px 32px 20px 32px; border-bottom: 3px solid #1e40af;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="vertical-align: middle;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 14px;">
                          <img src="https://www.premtechinc.com/brand/prem-technology-icon.png" alt="Prem Technology Inc." width="44" height="44" style="display: block; border-radius: 10px; border: 1px solid #e2e8f0;" />
                        </td>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 16px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; line-height: 1.2;">
                            PREM TECHNOLOGY INC.
                          </div>
                          <div style="font-size: 11px; font-weight: 600; color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; margin-top: 2px;">
                            Structural Engineers · Canada &amp; USA
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="text-align: right; vertical-align: middle;">
                    <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Web Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INQUIRY HEADER -->
          <tr>
            <td style="padding: 24px 32px 16px 32px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.4px;">
                New Client Project Scope Intake
              </h2>
              <div style="color: #64748b; font-size: 12px; margin-top: 4px;">
                Received on: <strong>${formattedDate} (EST)</strong>
              </div>
            </td>
          </tr>

          <!-- MAIN CONTENT BODY -->
          <tr>
            <td style="padding: 28px 32px;">

              <!-- CATEGORY & STAGE PILLS -->
              <div style="margin-bottom: 22px;">
                <span style="display: inline-block; padding: 5px 12px; background-color: #1e40af; color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; letter-spacing: 0.3px;">
                  ${category || 'General Structural'}
                </span>
                <span style="display: inline-block; padding: 5px 12px; background-color: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 12px; font-weight: 600; margin-left: 6px;">
                  Stage: <strong>${stage || 'Planning'}</strong>
                </span>
                <span style="display: inline-block; padding: 5px 12px; background-color: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 12px; font-weight: 600; margin-left: 6px;">
                  📍 ${location || 'Canada'}
                </span>
              </div>

              <!-- CLIENT DETAILS CLEAN TABLE -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 26px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
                <tr style="background-color: #ffffff;">
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; width: 35%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                    Client Name
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 700;">
                    ${fullName}
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                    Email Address
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                    Phone Number
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600;">
                    ${phone && phone !== 'N/A' ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<span style="color:#94a3b8; font-weight: 400;">Not provided</span>'}
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                    Company / Org
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600;">
                    ${company && company !== 'N/A' ? company : '<span style="color:#94a3b8; font-weight: 400;">Not provided</span>'}
                  </td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                    Attached File
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px;">
                    ${attachmentName 
                      ? `<strong style="color: #15803d; font-weight: 700;">📎 Attached: ${attachmentName}</strong>` 
                      : '<span style="color:#94a3b8;">None attached</span>'}
                  </td>
                </tr>
              </table>

              <!-- PROJECT SCOPE & BRIEF BOX -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Project Brief &amp; Requirements
                </div>
                <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #1e40af; border-radius: 8px; padding: 18px 20px;">
                  <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; font-family: inherit;">
${details || 'No detailed brief description provided.'}
                  </p>
                </div>
              </div>

              <!-- REPLY BUTTON -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=RE: Prem Technology Inc. Project Inquiry - ${fullName}" 
                       style="display: inline-block; background-color: #1e40af; color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 26px; border-radius: 8px; text-align: center;">
                      Reply to ${fullName} (${email}) →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; line-height: 1.5; color: #64748b;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <strong>Prem Technology Inc.</strong> · Dedicated Technical Engineering Practice<br>
                    Direct Response: Technical review performed by licensed engineering staff.<br>
                    <a href="https://www.premtechinc.com" style="color: #2563eb; text-decoration: none;">www.premtechinc.com</a>
                  </td>
                  <td style="text-align: right; vertical-align: bottom;">
                    <span style="font-size: 11px; color: #94a3b8;">Canada &amp; USA</span>
                  </td>
                </tr>
              </table>
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
