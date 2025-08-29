-- First, drop the overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can view demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Authenticated users can update demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Authenticated users can delete demo requests" ON public.demo_requests;

-- Create user roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for role-based access control
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user has admin role
CREATE OR REPLACE FUNCTION public.has_admin_role(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'admin'
  )
$$;

-- Create secure policies for demo_requests - only admins can access customer data
CREATE POLICY "Only admins can view demo requests" 
ON public.demo_requests 
FOR SELECT 
TO authenticated
USING (public.has_admin_role(auth.uid()));

CREATE POLICY "Only admins can update demo requests" 
ON public.demo_requests 
FOR UPDATE 
TO authenticated
USING (public.has_admin_role(auth.uid()));

CREATE POLICY "Only admins can delete demo requests" 
ON public.demo_requests 
FOR DELETE 
TO authenticated
USING (public.has_admin_role(auth.uid()));

-- Policy for user_roles table - users can only see their own roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Only admins can manage roles" 
ON public.user_roles 
FOR ALL
TO authenticated
USING (public.has_admin_role(auth.uid()));

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON public.user_roles(role);