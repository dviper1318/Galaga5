# HCAP - VC Fundraising Platform

An AI-powered platform for managing VC fundraising that combines CRM, pipeline management, interaction tracking, and intelligent guidance.

## Features

### ✅ Implemented

- **Multi-user Authentication**: Secure login system for your fundraising team
- **Investor CRM**: Comprehensive contact management with investor-specific fields
  - Personal information (name, email, phone, LinkedIn)
  - Investor details (firm, fund size, investment stage, check size, sectors)
  - Status tracking (prospect, contacted, meeting, interested, passed, invested)
  - Priority levels (low, medium, high)
- **Dashboard**: Overview of your fundraising progress with key metrics
- **Contact Management**: Add, edit, view, and search through investor contacts
- **Interaction Tracking**: Log and track all touchpoints with investors

### 🚧 Coming Soon

- **Pipeline Management**: Visual fundraising pipeline with stage tracking
- **AI-Powered Insights**: Weekly progress analysis and personalized recommendations
- **Email Integration**: Gmail/Outlook integration for tracking communications
- **Calendar Integration**: Sync meetings and schedule follow-ups
- **LinkedIn Integration**: Import contact data and track interactions
- **Document Management**: Store pitch decks and fundraising materials
- **Email Templates**: Reusable templates for outreach campaigns
- **Analytics Dashboard**: Track response rates, conversion metrics, and more

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: OpenAI/Anthropic (coming soon)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables:
Create a `.env` file with:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
```

3. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### First Time Setup

1. Go to `/register` to create your first account
2. Log in at `/login`
3. Start adding investor contacts from the dashboard

## Database Schema

The platform uses a comprehensive database schema with:

- **Users**: Multi-user authentication and role management
- **Contacts**: Investor CRM with detailed fields
- **Interactions**: Track all touchpoints (emails, calls, meetings)
- **PipelineStages**: Fundraising progress tracking
- **Insights**: AI-generated recommendations
- **Activities**: System activity log
- **EmailTemplates**: Reusable outreach templates

## Development Roadmap

### Phase 1: Core CRM ✅
- User authentication
- Contact management
- Basic dashboard

### Phase 2: Interactions & Tracking 🚧
- Interaction logging
- Activity timeline
- Contact history

### Phase 3: AI & Intelligence
- Weekly progress analysis
- Smart recommendations
- Follow-up reminders

### Phase 4: Integrations
- Email (Gmail/Outlook)
- Calendar
- LinkedIn
- Document storage

### Phase 5: Advanced Features
- Pipeline visualization
- Analytics dashboard
- Team collaboration
- Reporting

## Contributing

This is a private fundraising tool. For questions or feature requests, contact the development team.

## License

Private - All Rights Reserved
