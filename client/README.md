# Hotel Guest Management - Frontend

React TypeScript frontend for the Hotel Guest Management System.

## Features

- ✅ Guest list with search functionality
- ✅ Add new guests
- ✅ View guest details
- ✅ Edit guest information
- ✅ Delete guests
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ React Query for server state management
- ✅ Error handling and loading states

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Tanstack Query** for server state management
- **PocketBase** JavaScript SDK for API integration
- **Lucide React** for icons

## Getting Started

1. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for Production**
   \`\`\`bash
   npm run build
   \`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   └── GuestForm.tsx   # Guest form component
├── hooks/              # Custom React hooks
│   └── useGuests.ts    # Guest-related API hooks
├── lib/                # Utilities and configurations
│   └── pocketbase.ts   # PocketBase client setup
├── pages/              # Page components
│   ├── GuestList.tsx   # Guest list page
│   ├── AddGuest.tsx    # Add guest page
│   └── GuestDetail.tsx # Guest detail/edit page
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
\`\`\`

## API Integration

The frontend integrates with PocketBase backend using the JavaScript SDK. All API calls are handled through custom React Query hooks in `hooks/useGuests.ts`.

## Environment

Make sure the PocketBase server is running on `http://localhost:8090` before starting the frontend development server.
