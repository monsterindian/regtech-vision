# RegTech AI Backend API

## 🚀 Real Resend Integration & Supabase Database

This backend provides real email sending via Resend and data storage in Supabase.

## 📋 Setup Instructions

### 1. Environment Variables
Create a `.env` file in the `/api` directory with:

```env
RESEND_API_KEY=re_8efwLNhd_4siZ9vWTizqW6TarkfjCMTs8
DATABASE_URL=postgresql://postgres:GtTa5vJl1JYe2O1P@db.btdlteveqdhvrdcawckw.supabase.co:5432/postgres
SUPABASE_URL=https://btdlteveqdhvrdcawckw.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZGx0ZXZlcWRodnJkY2F3Y2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0Mzk2NzAsImV4cCI6MjA3MjAxNTY3MH0.KdQdmgJ2T9OmQY_oYMPVaJ4-9DaaN2YJwk1y6plphNM
PORT=3001
```

### 2. Database Setup
Run the SQL in `database-schema.sql` in your Supabase SQL Editor to create the required table.

### 3. Install Dependencies
```bash
cd api
npm install
```

### 4. Start the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## 🔗 API Endpoints

### POST /api/demo-request
Submits a new demo request, stores it in database, and sends email.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@company.com",
  "company": "ACME Corp",
  "role": "Chief Compliance Officer",
  "organizationType": "Bank",
  "primaryUseCase": "KYC Automation",
  "transactionVolume": "10,000 - 100,000/day",
  "regulatoryFrameworks": ["AML", "KYC", "GDPR"],
  "complianceChallenges": "Manual processes are slow and error-prone"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Demo request submitted successfully",
    "requestId": "uuid-here",
    "emailId": "resend-email-id"
  }
}
```

### GET /api/demo-requests
Retrieves all demo requests (for admin purposes).

### GET /health
Health check endpoint.

## 🎯 Features

- ✅ **Real Email Sending**: Uses Resend API to send professional emails to info@gaigentic.ai
- ✅ **Database Storage**: Stores all requests in Supabase PostgreSQL
- ✅ **Error Handling**: Comprehensive error handling and logging
- ✅ **CORS Support**: Configured for frontend integration
- ✅ **Professional Email Template**: Beautiful HTML email with all form data
- ✅ **Request Tracking**: Each request gets a unique ID and email tracking
- ✅ **Status Management**: Tracks email sending status in database

## 📊 Database Schema

The `demo_requests` table includes:
- Contact information (name, email, company, role)
- Business details (org type, use case, transaction volume)
- Regulatory frameworks (array)
- Compliance challenges
- Status tracking (pending, email_sent, email_failed)
- Timestamps and email IDs

## 🔧 Frontend Integration

The frontend automatically connects to this backend. Make sure both are running:
- Backend: `http://localhost:3001`
- Frontend: `http://localhost:5173`

## 📧 Email Features

- Professional HTML template with company branding
- All form data formatted nicely
- Reply-to set to user's email
- Unique request ID for tracking
- Timestamp and submission details
