# Andrews Insurance Lead Capture Form

This version sends the lead directly by email using a small Node.js backend.

Important:
Do not put your Gmail app password inside the HTML file. Keep it inside the `.env` file only.

## Files

- `public/index.html` = mobile lead form
- `server.js` = backend that sends the email
- `.env.example` = template for your Gmail settings
- `package.json` = Node.js dependencies

## Setup

1. Install Node.js if you do not have it installed.
2. Open this folder in Terminal.
3. Run:

```bash
npm install
```

4. Rename `.env.example` to `.env`.

5. Open `.env` and replace:

```env
GMAIL_APP_PASSWORD=PASTE_YOUR_GMAIL_APP_PASSWORD_HERE
```

with your real Gmail app password.

6. Start the app:

```bash
npm start
```

7. Open this in your browser:

```text
http://localhost:3000
```

## Current email configured

Sender:
TNavarro749@gmail.com

Recipient:
TNavarro749@gmail.com

## Notes

This is good for testing locally. For a real production version, the backend needs to be hosted on a server or platform that supports Node.js.
