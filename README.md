## Short description

Presenter is the landing / frontend app for an open-source presentation platform. This repository contains the Next.js (React) client used for the public site and account area.

## Features
- Next.js (app router) React client
- Theming (dark / light / black)
- AuthProvider with token handling and refreshUser helper
- Dialogs (update email, name, address, etc.)
- Account pages (profile, address, newsletter subscription)
- Animated background and UI components (MUI + custom components)

## Tech stack
- Next.js (app router)
- React + TypeScript
- MUI (Material UI)
- Axios for API calls

## Prerequisites
- Node.js 18+ (or the version your project expects)
- npm / pnpm / yarn
- Backend service running and reachable (see ENV variables)

## Important env variables
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

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/andrejkoller/landing-frontend.git
cd landing-frontend
```
### 2. Install dependencies

```bash
npm install
```
### 3. Start development server

```bash
npm run dev
```
## Screenshots

<div align="center">
    <img src="https://github.com/user-attachments/assets/28899797-371b-40c4-aca7-49f43d98f84b" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/4aae345e-22d4-458c-8d01-ee6434378eaa" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/62b262b8-2324-4c0d-b53b-3b7c40fc60eb" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/31cc5fc9-cc0a-4add-bd18-9bfc77a048d1" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/4df2243c-d3de-441f-9f48-ce7a19157b91" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/723e24d4-1ddc-462b-87d3-97a0ecdbf3b7" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/1245a34a-381d-47b1-8458-1ca05fcd3cce" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/174002d3-4e77-4125-8f82-307d53ff98ff" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/32b946ea-5ab7-4f29-95d6-4dc41cdff8f0" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/91b32e13-922b-4029-be88-2f8f1f9b7bb1" alt="Screenshot">
    <img src="https://github.com/user-attachments/assets/19e29b6b-6d9e-4b95-87d5-39dddef2b3cc" alt="Screenshot">
</div>
