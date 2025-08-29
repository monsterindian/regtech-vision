# Backend Integration Guide

## Current Status
The frontend is now working with a simulated API. To enable real email sending, you need to implement a backend API.

## Backend Implementation (Node.js/Express Example)

### 1. Install Dependencies
```bash
npm install express resend cors dotenv
npm install -D @types/express @types/cors
```

### 2. Environment Variables (.env)
```env
RESEND_API_KEY=re_8efwLNhd_4siZ9vWTizqW6TarkfjCMTs8
PORT=3001
```

### 3. Backend API (server.js)
```javascript
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/demo-request', async (req, res) => {
  try {
    const formData = req.body;
    
    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Agentic AI Demo Request
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.firstName} ${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Company:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Role:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.role}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Business Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 30%;">Organization Type:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.organizationType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Primary Use Case:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.primaryUseCase}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Transaction Volume:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.transactionVolume}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Regulatory Frameworks:</td>
                <td style="padding: 8px 0; color: #111827;">${formData.regulatoryFrameworks?.join(', ') || 'None specified'}</td>
              </tr>
            </table>
          </div>

          ${formData.complianceChallenges ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Compliance Challenges</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${formData.complianceChallenges}</p>
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This demo request was submitted through the RegTech AI website.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Demo Requests <noreply@gaigentic.ai>',
      to: ['info@gaigentic.ai'],
      subject: `New Agentic AI Demo Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send email' 
      });
    }

    console.log('Email sent successfully:', data);
    res.json({ success: true, data: { message: 'Demo request submitted successfully' } });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 4. Update Frontend API URL
In `src/lib/api.ts`, replace the simulation with:
```typescript
const response = await fetch('http://localhost:3001/api/demo-request', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

return await response.json();
```

### 5. Run Backend
```bash
node server.js
```

## Production Deployment
- Deploy backend to services like Vercel, Netlify Functions, or AWS Lambda
- Update frontend API URL to production backend URL
- Ensure CORS is properly configured for your domain
