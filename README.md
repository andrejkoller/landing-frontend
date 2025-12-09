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

<img width="1920" height="1080" alt="Screenshot 1" src="https://github.com/user-attachments/assets/556a5263-e7c2-4454-af64-891eeef8d203" />
<img width="1920" height="1080" alt="Screenshot 2" src="https://github.com/user-attachments/assets/a5f23885-aeaf-488d-baeb-42d2ed1e2fe9" />
<img width="1920" height="1080" alt="Screenshot 3" src="https://github.com/user-attachments/assets/537e2eda-9269-4e34-8567-4a50ba376360" />
<img width="1920" height="1080" alt="Screenshot 4" src="https://github.com/user-attachments/assets/c4981e4f-82dc-4a20-8a0c-0a40fa0913aa" />
<img width="1920" height="1080" alt="Screenshot 5" src="https://github.com/user-attachments/assets/361f0f89-d201-4543-8fe2-6230edae6665" />
<img width="1920" height="1080" alt="Screenshot 6" src="https://github.com/user-attachments/assets/a5d149d0-164b-4741-a43c-940ebd9dfa10" />
<img width="1920" height="1080" alt="Screenshot 7" src="https://github.com/user-attachments/assets/e30c47c5-66ad-4bd7-8439-1ce5b571f80f" />
<img width="1920" height="1080" alt="Screenshot 8" src="https://github.com/user-attachments/assets/579188d3-ca74-4fe9-afb9-800499295957" />
<img width="1920" height="1080" alt="Screenshot 9" src="https://github.com/user-attachments/assets/77651024-cd0b-40a2-b56b-d196437516f5" />
<img width="1920" height="1080" alt="Screenshot 10" src="https://github.com/user-attachments/assets/b2a2229b-f6c2-4b3b-8ed1-38ac5f4888fe" />
<img width="1920" height="1080" alt="Screenshot 11" src="https://github.com/user-attachments/assets/23a01e0f-32fd-4dff-a81b-2273d8686c95" />
<img width="1920" height="1080" alt="Screenshot 12" src="https://github.com/user-attachments/assets/e6838cc8-f075-46ce-a881-39a77b7768fb" />
<img width="1920" height="1080" alt="Screenshot 13" src="https://github.com/user-attachments/assets/c3d2c727-d725-4d1a-8d5a-643db78cbe91" />
<img width="1920" height="1080" alt="Screenshot 14" src="https://github.com/user-attachments/assets/373ec063-1687-463a-aa09-85ce626f2017" />
<img width="1920" height="1080" alt="Screenshot 15" src="https://github.com/user-attachments/assets/08e89211-5e5a-41c8-a368-5a8cabaa4e69" />
<img width="1920" height="1080" alt="Screenshot 16" src="https://github.com/user-attachments/assets/68c613b7-84c4-4203-8a9c-d8b95c126721" />
<img width="1920" height="1080" alt="Screenshot 17" src="https://github.com/user-attachments/assets/514f3d78-83b4-4daf-a58c-232a715638c6" />
<img width="1920" height="1080" alt="Screenshot 18" src="https://github.com/user-attachments/assets/54c687d3-324c-44b5-8f15-79e716260178" />
<img width="1920" height="1080" alt="Screenshot 19" src="https://github.com/user-attachments/assets/8a2dda3c-e676-44c4-8285-2a6444f67843" />
<img width="1920" height="1080" alt="Screenshot 20" src="https://github.com/user-attachments/assets/e2e9fda7-1aac-49fa-9c51-66b7a2b92cdd" />
<img width="1920" height="1080" alt="Screenshot 21" src="https://github.com/user-attachments/assets/6533da23-2491-4da0-9db7-951f77e37d6a" />
<img width="1920" height="1080" alt="Screenshot 22" src="https://github.com/user-attachments/assets/670e978f-576e-49bf-9f7c-3d7f43560dea" />
<img width="1920" height="1080" alt="Screenshot 23" src="https://github.com/user-attachments/assets/28fd444b-da33-4f6d-8d4f-f8d036c7f328" />
<img width="1920" height="1080" alt="Screenshot 24" src="https://github.com/user-attachments/assets/31af0ba9-f951-4ce0-bb83-9267ae430245" />
