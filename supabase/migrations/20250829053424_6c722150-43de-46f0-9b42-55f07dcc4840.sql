-- Enable Row Level Security on demo_requests table
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert new demo requests (for contact form)
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to view all demo requests (for admin access)
CREATE POLICY "Authenticated users can view demo requests" 
ON public.demo_requests 
FOR SELECT 
TO authenticated
USING (true);

-- Create policy to allow authenticated users to update demo requests (for admin access)
CREATE POLICY "Authenticated users can update demo requests" 
ON public.demo_requests 
FOR UPDATE 
TO authenticated
USING (true);

-- Create policy to allow authenticated users to delete demo requests (for admin access)
CREATE POLICY "Authenticated users can delete demo requests" 
ON public.demo_requests 
FOR DELETE 
TO authenticated
USING (true);