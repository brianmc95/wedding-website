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
