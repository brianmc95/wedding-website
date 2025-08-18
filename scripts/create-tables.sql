-- Create the guests table
CREATE TABLE IF NOT EXISTS guests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  allows_plus_one BOOLEAN DEFAULT false,
  has_responded BOOLEAN DEFAULT false,
  is_attending BOOLEAN,
  plus_one_name VARCHAR(200),
  dietary_restrictions TEXT,
  special_message TEXT,
  response_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for faster name lookups
CREATE INDEX IF NOT EXISTS idx_guests_name ON guests(LOWER(first_name), LOWER(last_name));

-- Insert some sample guests for testing
INSERT INTO guests (first_name, last_name, allows_plus_one) VALUES
  ('John', 'Smith', true),
  ('Sarah', 'Johnson', false),
  ('Michael', 'Brown', true),
  ('Emma', 'Davis', false),
  ('David', 'Wilson', true),
  ('Lisa', 'Anderson', false),
  ('James', 'Taylor', true),
  ('Maria', 'Garcia', false)
ON CONFLICT DO NOTHING;
