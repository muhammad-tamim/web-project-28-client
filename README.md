<h1 align="center">RENTAX - Frontend</h1>

A full-stack **car rental management platform**  that enables customers to rent vehicles online, sellers to manage their vehicles, and admin to control the entire marketplace.

## Explanation: 

## Live Links:
- Client: https://web-project-28-client.vercel.app/ 
- Server: https://web-project-28-server.vercel.app/

## Repository Links:
- Client: https://github.com/muhammad-tamim/web-project-28-client
- Server: https://github.com/muhammad-tamim/web-project-28-server


## Demo Credentials:

| role     | email              | password |
| -------- | ------------------ | -------- |
| Admin    | admin@gmail.com    | 123456   |
| Seller   | seller@gmail.com   | 123456   |
| customer | customer@gmail.com | 123456   |

## Features:
**Customer:**
  - Browse available rental cars
  - View car details
  - Book vehicles
  - Pay using:
    - Stripe (For International Payment)
    - SSLCommerz (For Bangladesh Payment)
  - View personal booking history
  - Access a dedicated dashboard

**Seller:**
  - Add new cars to the marketplace
  - Manage existing cars
  - Monitor car availability
  - Access a dedicated seller dashboard

**Admin:**
  - Manage sellers
  - Manage car categories
  - Manage brands
  - Oversee the entire platform
  - Access an admin dashboard

## Tech Stack:
**Core Technologies:** 
- React, React-Router, JavaScript, TailwindCSS, DaisyUI
**Libraries & Packages:** 
- Tanstack Query, Axios, Firebase Authentication, Recharts, Swiper, react-pdf, date-fns, react-hot-toast, react-icons, sweetalert2 
**Payments:** 
- Stripe (For International Payment)
- SSLCommerz (For Bangladesh Payment)

## Project Architecture:

```
src
│
├── api/               # Axios API configuration and request handlers
│
├── components/        # Reusable UI components
│
├── contexts/          # React contexts (authentication, global states)
│
├── firebase/          # Firebase configuration
│
├── hooks/
│   ├── queries/       # TanStack Query hooks for server state
│   └── useAuth.js     # Firebase authentication hook
│
├── layouts/           # Application layout components
│
├── pages/             # Page-level components
│
├── providers/         # Global providers (AuthProvider etc.)
│
├── routes/            # Application routing configuration
│
└── utils/             # Shared utility functions
```

## What I Learn:
- Designing role-based application architecture
- Implementing secure payment integrations
- Managing server state with React Query
- Handling real-world booking workflows
- Creating scalable REST APIs
- Structuring a full-stack production-ready project

## Challenges I Faced:
- Integrating multiple payment gateways
- Managing booking state consistency
- Designing role-based dashboard access
- Handling async data synchronization between frontend and backend

## Limitations:
- No Refund system
- Booking cancellation does not enforce time restrictions
- No UI Notification system

## Environment Variables:

```
VITE_apiKey=.....
VITE_authDomain=.....
VITE_projectId=.....
VITE_storageBucket=......
VITE_messagingSenderId=...
VITE_appId=...
VITE_API_URL=...
VITE_IMGBB_API_KEY=...
VITE_STRIPE_PK_KEY=....
```

## Installation & Setup:

1. Clone the Repository: 

```bash
git clone https://github.com/muhammad-tamim/web-project-28-client.git
```

2. Install Dependencies:

```bash
npm install
```

3. Create a .env File with: 

```
VITE_apiKey=.....
VITE_authDomain=.....
VITE_projectId=.....
VITE_storageBucket=......
VITE_messagingSenderId=...
VITE_appId=...
VITE_API_URL=...
VITE_IMGBB_API_KEY=...
VITE_STRIPE_PK_KEY=....
```

4. Start the Development Server(For locally testing):

```bash
npm run dev
```

## Contact:

Email: contact2tamim@gmail.com | LinkedIn: https://www.linkedin.com/in/tamim-muhammad
