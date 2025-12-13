import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    console.log('Received contact form submission:', { name, email, subject });

    // Get Gmail credentials
    const GMAIL_USER = 'myselfjyothish@gmail.com';
    const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD');

    console.log('Checking environment variables...');
    console.log('Gmail user:', GMAIL_USER);
    console.log('Gmail password exists:', !!GMAIL_APP_PASSWORD);
    console.log('Gmail password length:', GMAIL_APP_PASSWORD?.length || 0);

    if (!GMAIL_APP_PASSWORD) {
      console.error('GMAIL_APP_PASSWORD is not set in environment variables');
      console.error('Available env vars:', Object.keys(Deno.env.toObject()));
      throw new Error('Gmail App Password not configured. Please add GMAIL_APP_PASSWORD to Edge Function secrets.');
    }

    // Create SMTP client
    console.log('Creating SMTP client...');
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: GMAIL_USER,
          password: GMAIL_APP_PASSWORD,
        },
      },
    });

    // Create email HTML content
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); color: white; padding: 30px 20px; text-align: center; }
    .header h2 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px 20px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #FF6B35; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; }
    .value { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #FF6B35; font-size: 15px; }
    .footer { background: #333; color: #fff; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #FF6B35; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${subject}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your portfolio contact form</p>
      <p>Reply directly to <strong>${email}</strong> to respond</p>
    </div>
  </div>
</body>
</html>`;

    // Send email
    console.log('Sending email...');
    await client.send({
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      content: emailHTML,
      html: emailHTML,
      replyTo: email,
    });

    console.log('Email sent successfully!');
    await client.close();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully!'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});