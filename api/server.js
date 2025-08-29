const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_8efwLNhd_4siZ9vWTizqW6TarkfjCMTs8');

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://btdlteveqdhvrdcawckw.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZGx0ZXZlcWRodnJkY2F3Y2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0Mzk2NzAsImV4cCI6MjA3MjAxNTY3MH0.KdQdmgJ2T9OmQY_oYMPVaJ4-9DaaN2YJwk1y6plphNM'
);

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://your-domain.com'],
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

    // Store in database first
    const { data: dbData, error: dbError } = await supabase
      .from('demo_requests')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          organization_type: formData.organizationType,
          primary_use_case: formData.primaryUseCase,
          transaction_volume: formData.transactionVolume,
          regulatory_frameworks: formData.regulatoryFrameworks || [],
          compliance_challenges: formData.complianceChallenges,
          created_at: new Date().toISOString(),
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).json({
        success: false,
        error: 'Failed to store request in database'
      });
    }

    console.log('✅ Demo request stored in database:', dbData.id);

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
                Request ID: ${dbData.id}
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
                📧 This demo request was submitted through the RegTech AI website<br>
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
      from: 'RegTech AI Demo Requests <noreply@gaigentic.ai>',
      to: ['info@gaigentic.ai'],
      subject: `🚀 New Demo Request: ${formData.firstName} ${formData.lastName} from ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,
    });

    if (emailError) {
      console.error('❌ Resend error:', emailError);
      
      // Update database record with email failure
      await supabase
        .from('demo_requests')
        .update({ 
          status: 'email_failed',
          email_error: emailError.message 
        })
        .eq('id', dbData.id);

      return res.status(500).json({
        success: false,
        error: 'Request saved but failed to send email notification'
      });
    }

    // Update database record with successful email
    await supabase
      .from('demo_requests')
      .update({ 
        status: 'email_sent',
        email_id: emailData.id 
      })
      .eq('id', dbData.id);

    console.log('✅ Email sent successfully:', emailData.id);
    console.log('✅ Database updated with email status');

    res.json({
      success: true,
      data: {
        message: 'Demo request submitted successfully',
        requestId: dbData.id,
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

// Get all demo requests (for admin purposes)
app.get('/api/demo-requests', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('demo_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data: data
    });

  } catch (error) {
    console.error('Error fetching demo requests:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch demo requests'
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Resend API configured`);
  console.log(`🗄️  Supabase database connected`);
  console.log(`🌐 CORS enabled for frontend`);
});

module.exports = app;
