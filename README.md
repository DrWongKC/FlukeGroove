<h1 align="center">FlukéGroove™ Online Music Player ✨</h1>

Thank you to burakorkmez (https://github.com/burakorkmez) for sourcecode template.

-   🎸 Listen to music, play next and previous songs
-   🔈 Update the volume with a slider
-   🎧 Admin dashboard to create albums and songs
-   💬 Real-time Chat App integrated into Spotify
-   👨🏼‍💼 Online/Offline status
-   👀 See what other users are listening to in real-time
-   📊 Aggregate data for the analytics page
-   🚀 And a lot more...

# Notice
Downgraded from React 19 to "react": "^18.3.1", "react-dom": "^18.3.1", as shadcn only works perfectly with React 18. I may upgrade to React 19 in future after shadcn supports React 19.

# User Authentication Manager
https://dashboard.clerk.com/

# MongoDB Database
https://cloud.mongodb.com/

# Media Storage
https://cloudinary.com/

### Setup .env file in _backend_ folder

```bash
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...


CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

### Setup .env file in _frontend_ folder

```bash
VITE_CLERK_PUBLISHABLE_KEY=...
```