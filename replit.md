# Vitara Mail - Gmail IMAP Client

## Overview
A modern Gmail IMAP client built with React frontend and Express backend. Allows users to connect multiple Gmail accounts and view their emails in a tabbed interface.

## Architecture
- **Frontend**: React 18 with Vite, TailwindCSS, and Framer Motion
- **Backend**: Express.js with ImapFlow for Gmail IMAP connections
- **Build System**: Vite for frontend builds, served via Express static files

## Current Status
✅ Successfully imported and configured for Replit environment
✅ All dependencies installed and working
✅ Frontend and backend integrated on port 5000
✅ Deployment configuration set up for autoscale

## Recent Changes (September 24, 2025)
- Fixed server/package.json file (was incorrectly duplicated from root)
- Created missing Vite configuration with proper host settings for Replit
- Added missing index.html and CSS files for Vite React setup
- Configured build process to copy frontend assets to server/public
- Set up unified server on port 5000 serving both API and frontend
- Configured deployment with automatic frontend build process

## Tech Stack
- **Frontend**: React, Vite, TailwindCSS, Framer Motion, React Router
- **Backend**: Express, ImapFlow, MailParser, CORS
- **Build**: npm workspaces, concurrently for development

## Development
Run `npm run dev` from root to start both frontend and backend in development mode.
The production build serves everything from the Express server on port 5000.

## Key Features
- Multi-account Gmail support (up to 5 accounts)
- Tabbed interface for switching between accounts
- Real-time email syncing with 10-second refresh
- IMAP folder support (Inbox, Spam)
- Clean, modern UI with animations