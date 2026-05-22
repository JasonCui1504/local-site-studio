# Local Site Studio

A service for small restaurants and local businesses. We build clean, modern websites, then give owners a simple portal to manage their content — no tech knowledge required.

## The Business Idea

Most small restaurant websites are outdated, hard to update, and hurt the business more than they help. Local Site Studio solves this with:

1. **A custom-designed website** built for the restaurant
2. **An owner portal** where they can request changes, upload photos, update menus, and manage hours
3. **Human-reviewed publishing** — every change is reviewed before it goes live
4. **Structured task generation** — owner requests can become Claude Code developer tasks, reviewed by the operator

## Running Locally

```bash
npm install
npm run dev
```

## Prototype URLs

| Route | Description |
|-------|-------------|
| `http://localhost:3000` | Marketing landing page |
| `http://localhost:3000/dashboard` | Owner dashboard (Golden Lantern Bistro) |
| `http://localhost:3000/dashboard/requests` | Change request form + history |
| `http://localhost:3000/dashboard/content` | Website content editor |
| `http://localhost:3000/dashboard/photos` | Photo management |
| `http://localhost:3000/dashboard/menu` | Menu management |
| `http://localhost:3000/dashboard/settings` | Settings & preferences |
| `http://localhost:3000/admin` | Operator dashboard |

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** icons
- Mock data only (`lib/mock-data.ts`) — no database yet

## Deploying

```bash
# Vercel (recommended)
npm i -g vercel
vercel

# Or build for any Node host
npm run build
npm start
```

## Next Backend Steps

- [ ] **Authentication** — NextAuth or Clerk for owner + admin login
- [ ] **Database** — Supabase or Postgres for clients, requests, content
- [ ] **Photo storage** — Supabase Storage or S3 for image uploads
- [ ] **Change request workflow** — status tracking, notifications, email alerts
- [ ] **Claude Code task generation** — turn owner requests into structured developer tasks via the Anthropic API
- [ ] **Approval flow** — review queue before changes publish to live site
- [ ] **Stripe billing** — subscription management for Starter / Growth / Premium plans
- [ ] **Email notifications** — request confirmation, status updates, publish alerts
