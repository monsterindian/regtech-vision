const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_8efwLNhd_4siZ9vWTizqW6TarkfjCMTs8');

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082', 'https://your-domain.com'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Demo request endpoint
app.post('/api/demo-request', async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, company'
      });
    }

    console.log('📝 Processing demo request for:', formData.firstName, formData.lastName);

    // Create professional email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Demo Request</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
                🚀 New Agentic AI Demo Request
              </h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">
                Request ID: ${Date.now()}
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">

              <!-- Contact Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  👤 Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; width: 35%; vertical-align: top;">Name:</td>
                    <td style="padding: 12px 0; color: #111827; font-weight: 500;">${formData.firstName} ${formData.lastName}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Email:</td>
                    <td style="padding: 12px 0; color: #111827;">
                      <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a>
                    </td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Company:</td>
                    <td style="padding: 12px 0; color: #111827; font-weight: 500;">${formData.company}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Role:</td>
                    <td style="padding: 12px 0; color: #111827;">${formData.role || 'Not specified'}</td>
                  </tr>
                </table>
              </div>

              <!-- Business Details -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  🏢 Business Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; width: 35%; vertical-align: top;">Organization Type:</td>
                    <td style="padding: 12px 0; color: #111827;">${formData.organizationType || 'Not specified'}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Primary Use Case:</td>
                    <td style="padding: 12px 0; color: #111827;">${formData.primaryUseCase || 'Not specified'}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Transaction Volume:</td>
                    <td style="padding: 12px 0; color: #111827;">${formData.transactionVolume || 'Not specified'}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Regulatory Frameworks:</td>
                    <td style="padding: 12px 0; color: #111827;">
                      ${formData.regulatoryFrameworks && formData.regulatoryFrameworks.length > 0
                        ? formData.regulatoryFrameworks.map(framework =>
                            `<span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 4px; display: inline-block; margin-bottom: 4px;">${framework}</span>`
                          ).join(' ')
                        : 'None specified'
                      }
                    </td>
                  </tr>
                </table>
              </div>

              ${formData.complianceChallenges ? `
              <!-- Compliance Challenges -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  ⚠️ Current Compliance Challenges
                </h2>
                <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px;">
                    ${formData.complianceChallenges}
                  </p>
                </div>
              </div>
              ` : ''}

              <!-- Next Steps -->
              <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #0c4a6e; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  📋 Next Steps
                </h3>
                <ul style="color: #0f172a; margin: 0; padding-left: 20px; line-height: 1.6;">
                  <li>Review the demo request details</li>
                  <li>Schedule a personalized demo session</li>
                  <li>Prepare use case scenarios specific to ${formData.company}</li>
                  <li>Follow up within 24 hours</li>
                </ul>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                📧 This demo request was submitted through the Gaigentic AI website<br>
                🕒 Submitted on ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>

          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Gaigentic AI Demo Requests <noreply@gaigentic.ai>',
      to: ['info@gaigentic.ai'],
      subject: `🚀 New Demo Request: ${formData.firstName} ${formData.lastName} from ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,
    });

    if (emailError) {
      console.error('❌ Resend error:', emailError);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email notification'
      });
    }

    console.log('✅ Email sent successfully:', emailData.id);

    res.json({
      success: true,
      data: {
        message: 'Demo request submitted successfully',
        emailId: emailData.id
      }
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, company, message'
      });
    }

    console.log('📝 Processing contact form for:', formData.firstName, formData.lastName);

    // Create professional email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
                💬 New Contact Form Submission
              </h1>
              <p style="color: #e9d5ff; margin: 10px 0 0 0; font-size: 16px;">
                Submission ID: ${Date.now()}
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">

              <!-- Contact Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  👤 Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; width: 35%; vertical-align: top;">Name:</td>
                    <td style="padding: 12px 0; color: #111827; font-weight: 500;">${formData.firstName} ${formData.lastName}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Email:</td>
                    <td style="padding: 12px 0; color: #111827;">
                      <a href="mailto:${formData.email}" style="color: #7c3aed; text-decoration: none;">${formData.email}</a>
                    </td>
                  </tr>
                  <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Company:</td>
                    <td style="padding: 12px 0; color: #111827; font-weight: 500;">${formData.company}</td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  💬 Message
                </h2>
                <div style="background-color: #f8fafc; border-left: 4px solid #7c3aed; padding: 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">
                    ${formData.message}
                  </p>
                </div>
              </div>

              <!-- Next Steps -->
              <div style="background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #581c87; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  📋 Next Steps
                </h3>
                <ul style="color: #1f2937; margin: 0; padding-left: 20px; line-height: 1.6;">
                  <li>Review the contact submission details</li>
                  <li>Respond to the inquiry within 24 hours</li>
                  <li>Personalize response based on ${formData.company}'s needs</li>
                  <li>Consider scheduling a follow-up call if appropriate</li>
                </ul>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                📧 This contact form submission was sent through the Gaigentic AI website<br>
                🕒 Submitted on ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>

          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Gaigentic AI Contact <noreply@gaigentic.ai>',
      to: ['info@gaigentic.ai'],
      subject: `💬 New Contact: ${formData.firstName} ${formData.lastName} from ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,
    });

    if (emailError) {
      console.error('❌ Resend error:', emailError);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email notification'
      });
    }

    console.log('✅ Email sent successfully:', emailData.id);

    res.json({
      success: true,
      data: {
        message: 'Contact form submitted successfully',
        emailId: emailData.id
      }
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Resend API configured`);
  console.log(`🌐 CORS enabled for frontend`);
});

module.exports = app;
