-- Create demo_requests table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS demo_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    organization_type VARCHAR(50),
    primary_use_case VARCHAR(100),
    transaction_volume VARCHAR(50),
    regulatory_frameworks TEXT[], -- Array of strings
    compliance_challenges TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    email_id VARCHAR(100), -- Resend email ID
    email_error TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table in Supabase
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    email_id VARCHAR(100), -- Resend email ID
    email_error TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);

-- Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);

-- Create an index on company for analytics
CREATE INDEX IF NOT EXISTS idx_demo_requests_company ON demo_requests(company);

-- Create indexes for contact_submissions
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_company ON contact_submissions(company);

-- Add RLS (Row Level Security) policies if needed
-- ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_demo_requests_updated_at
    BEFORE UPDATE ON demo_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create a trigger for contact_submissions
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for analytics
CREATE OR REPLACE VIEW demo_requests_analytics AS
SELECT
    DATE_TRUNC('day', created_at) as date,
    COUNT(*) as total_requests,
    COUNT(CASE WHEN status = 'email_sent' THEN 1 END) as successful_requests,
    COUNT(CASE WHEN status = 'email_failed' THEN 1 END) as failed_requests,
    organization_type,
    primary_use_case
FROM demo_requests
GROUP BY DATE_TRUNC('day', created_at), organization_type, primary_use_case
ORDER BY date DESC;

-- Optional: Create a view for contact submissions analytics
CREATE OR REPLACE VIEW contact_submissions_analytics AS
SELECT
    DATE_TRUNC('day', created_at) as date,
    COUNT(*) as total_submissions,
    COUNT(CASE WHEN status = 'email_sent' THEN 1 END) as successful_submissions,
    COUNT(CASE WHEN status = 'email_failed' THEN 1 END) as failed_submissions
FROM contact_submissions
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;
