## Short description

Presenter is the landing / frontend app for an open-source presentation platform. This repository contains the Next.js (React) client used for the public site and account area.

## ✨ Features

- Next.js (app router) React client
- Theming (dark / light / black)
- AuthProvider with token handling and refreshUser helper
- Dialogs (update email, name, address, etc.)
- Account pages (profile, address, newsletter subscription)
- Animated background and UI components (MUI + custom components)

## 🛠️ Technologies Used

- Next.js (app router)
- React + TypeScript
- MUI (Material UI)
- Axios for API calls

## 📋 Prerequisites

- Node.js 18+ (or the version your project expects)
- npm / pnpm / yarn
- Backend service running and reachable (see ENV variables)

## ⚠️ Important env variables

Create a `.env.local` in this folder (not committed). Example keys used by the app:

```
NEXT_PUBLIC_API_URL=http://localhost:7291/api    # backend base url used by axios
NEXT_PUBLIC_LANDING_URL = http://localhost:3000
NEXT_PUBLIC_AUTH_URL = http://localhost:3001
NEXT_PUBLIC_SIGNIN_REDIRECT_URL = http://localhost:3001/signin?redirect=http://localhost:3000/callback
NEXT_PUBLIC_SIGNUP_REDIRECT_URL = http://localhost:3001/signup?redirect=http://localhost:3000/callback
NEXT_PUBLIC_PRESENTER_URL = http://localhost:3002
NEXT_PUBLIC_PROFILE_URL = http://localhost:3001/account/profile
```

Adjust ports/URLs to match your backend and local setup.

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/andrejkoller/landing-frontend.git
cd landing-frontend
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

The application will be available at http://localhost:3000 (or another port if 3000 is in use).

## 🔌 API Integration

The application communicates with a backend API through the axios instance configured in `src/services/axios-instance.ts`.

Key Features:

- Automatic JWT token injection from token service
- Automatic token refresh on expiration
- Centralized error handling
- Base URL configuration via environment variables

Services:

- `user-service.ts` - User profile management and account operations
- `token-service.ts` - JWT token storage and retrieval

## 🔐 Authentication

The app uses JWT-based authentication with token refresh:

1. User is redirected to auth service for login/signup
2. JWT tokens (access + refresh) are stored in localStorage
3. Tokens are automatically included in API requests
4. Access token is refreshed automatically when expired
5. AuthProvider manages authentication state across the app
6. Protected routes redirect to login if token is missing/invalid

## 🔗 Related

- Backend Repositories: [AuthAPI](https://github.com/andrejkoller/AuthAPI) and [PresenterAPI](https://github.com/andrejkoller/PresenterAPI)
- Frontend Repositories: [auth-frontend](https://github.com/andrejkoller/auth-frontend) and [presenter-frontend](https://github.com/andrejkoller/presenter-frontend)
- C++ Application: [Presenter](https://github.com/andrejkoller/Presenter)

## 📸 Screenshots
