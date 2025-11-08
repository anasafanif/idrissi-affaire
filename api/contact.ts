import nodemailer from 'nodemailer';
import type { ContactFormPayload } from '../shared/types.js';

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  send: (body: string) => void;
};

const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  CONTACT_RECIPIENT,
  CONTACT_FROM_NAME = 'Idrissi Affairs Website',
} = process.env;

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_APP_PASSWORD,
        },
      })
    : null;

function baseResponse(res: VercelResponse, status: number, body: unknown) {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).send(JSON.stringify(body));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return baseResponse(res, 405, { success: false, error: 'Method not allowed' });
  }

  if (!transporter) {
    console.error('Missing Gmail configuration');
    return baseResponse(res, 500, { success: false, error: 'Email service not configured' });
  }

  try {
    const payload = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactFormPayload;
    if (!payload?.name || !payload.email || !payload.subject || !payload.message) {
      return baseResponse(res, 400, { success: false, error: 'Missing required fields' });
    }

    const recipient = CONTACT_RECIPIENT || GMAIL_USER;
    const fromAddress = CONTACT_RECIPIENT ? `${CONTACT_FROM_NAME} <${CONTACT_RECIPIENT}>` : GMAIL_USER;
    const textContent = [
      `New contact form submission from ${payload.name}`,
      '',
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : '',
      `Subject: ${payload.subject}`,
      '',
      payload.message,
    ]
      .filter(Boolean)
      .join('\n');

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${payload.phone}</p>` : ''}
      <p><strong>Subject:</strong> ${payload.subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-line;">${payload.message}</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: payload.email,
      subject: `New contact submission: ${payload.subject}`,
      text: textContent,
      html: htmlContent,
    });

    return baseResponse(res, 200, { success: true, data: { message: 'Email sent' } });
  } catch (error) {
    console.error('Failed to process contact form:', error);
    return baseResponse(res, 500, { success: false, error: 'Failed to send message' });
  }
}

