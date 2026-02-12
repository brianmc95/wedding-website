-- Guests table: stores the master guest list and RSVP responses
create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text,
  allows_plus_one boolean not null default false,
  has_responded boolean not null default false,
  attending boolean,
  plus_one_name text,
  dietary_restrictions text,
  message text,
  responded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Create a unique index on first_name + last_name (case-insensitive) to prevent duplicates
create unique index if not exists guests_name_unique
  on public.guests (lower(first_name), lower(last_name));

-- Disable RLS so the app can read/write freely via service role or anon key
-- For a wedding site with no user auth, this is the simplest approach
alter table public.guests enable row level security;

-- Allow anonymous reads (for guest lookup during RSVP)
create policy "Allow anonymous select" on public.guests
  for select using (true);

-- Allow anonymous inserts (for admin adding guests)
create policy "Allow anonymous insert" on public.guests
  for insert with check (true);

-- Allow anonymous updates (for RSVP submissions)
create policy "Allow anonymous update" on public.guests
  for update using (true);

-- Allow anonymous deletes (for admin removing guests)
create policy "Allow anonymous delete" on public.guests
  for delete using (true);

-- Insert a few sample guests for testing
insert into public.guests (first_name, last_name, email, allows_plus_one)
values
  ('John', 'Smith', 'john.smith@example.com', true),
  ('Sarah', 'Murphy', 'sarah.murphy@example.com', false),
  ('Padraig', 'OBrien', 'padraig@example.com', true)
on conflict do nothing;
