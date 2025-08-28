# Hotel Guest Management System

A full-stack guest management application built with React TypeScript frontend and PocketBase backend.

## Project Structure

\`\`\`
hotel-guest-management/
├── server/           # PocketBase backend
├── client/           # React frontend
└── README.md         # This file
\`\`\`

## Setup Instructions

### Backend Setup (PocketBase)

1. **Download PocketBase**
   - Go to https://pocketbase.io/docs/
   - Download the appropriate version for your OS
   - Extract the executable to the `server/` folder

2. **Start PocketBase Server**
   \`\`\`bash
   cd server
   ./pocketbase serve
   \`\`\`
   - Server will start on http://localhost:8090
   - Admin UI available at http://localhost:8090/_/

3. **Initial Admin Setup**
   - First time: Create admin account
   - **Admin Credentials**: admin@hotel.com / admin123456
   - Login to admin UI to configure collections

4. **Database Schema**
   - Collection name: `guests`
   - Fields configured automatically via migrations
   - Sample data will be added through the admin UI

### Frontend Setup

1. **Install Dependencies**
   \`\`\`bash
   cd client
   npm install
   \`\`\`

2. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   - Frontend will start on http://localhost:5173

## Features

- ✅ Guest List with search and filter
- ✅ Add new guests
- ✅ View guest details
- ✅ Edit guest information
- ✅ Delete guests
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Error handling and loading states

## API Endpoints

PocketBase automatically provides REST API endpoints:
- `GET /api/collections/guests/records` - List guests
- `POST /api/collections/guests/records` - Create guest
- `GET /api/collections/guests/records/:id` - Get guest
- `PATCH /api/collections/guests/records/:id` - Update guest
- `DELETE /api/collections/guests/records/:id` - Delete guest

## Development Notes

- No authentication required (as per requirements)
- Desktop-first UI design
- All CRUD operations implemented
- Error handling for API calls
- Loading states for better UX
