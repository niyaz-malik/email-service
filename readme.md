## ------------ Niyaz Malik ------------

# Email Sending Service

Going to create a basic Node.js project that simulates a reliable email sending service using two fake providers.  
It will handle retry logic, fallback, rate limiting, and prevents duplicate emails.

## Features

- Retry mechanism with exponential backoff
- Provider fallback (Provider_01 → Provider_02)
- Idempotency to prevent duplicate emails
- Basic rate limiting
- Logging and status tracking
- Clean, modular folder structure

---
## Folder Structure

src/
├── provider/ # Mock email providers
├── service/ # EmailService logic
├── utils/ # Helpers (retry, rate limit, etc.)
└── server.js # Express server entry point

## Tech Stack

- Language: JavaScript (Node.js)
- Framework: Express

## Deployment
   Live version hosted on Render

   🔗 https://nm-email-service.onrender.com/send



## How to Run Locally

```bash
git clone https://github.com/niyaz-malik/email-service
cd email-service
npm install
npm start

## API Endpoint

POST /send
Send an email.

Sample Request body(json): 

{
  "to": "niyaz@malik.com",
  "subject": "Hello...",
  "body": "Am I a good programmer?"
}

Sample Response:

{
  "success": true,
  "message": "Email sent successfully via provider_modiji"
}

If email is duplicate or rate limited, it will tell you.

Mock Providers:
 ~ provider_modiji and provider_rahulGandhi are mocked
 ~ Each randomly succeeds/fails to test retry/fallback logic

Notes:
 ~Idempotency is handled by generating an email ID using SHA-256 hash
 ~Rate limit: Max 5 emails per minute
 ~Console logs show which provider was used or failed


## What I learnt?
This project helped me understand patterns like retries, fallback, and rate limiting.
Hope you like it!
