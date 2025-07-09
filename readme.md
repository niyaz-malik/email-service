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

<pre lang="markdown"> ``` src/ ├── providers/ # Mock email providers ├── services/ # EmailService logic ├── utils/ # Helpers (retry, rate limit and more...)``` </pre>

server.js --- Entry file to test email sending

## Tech Stack

- Language: JavaScript (Node.js)