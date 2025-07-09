# Resilient Email Sending Service

Going to create a basic Node.js project that simulates a reliable email sending service using two fake providers.  
It will handle retry logic, fallback, rate limiting, and prevents duplicate emails.


## Folder Structure

src/
  providers/ --- Mock email providers
  service/ --- EmailService logic
  utils/ --- Helpers (retry, rate limit code and more)

server.js --- Entry file to test email sending