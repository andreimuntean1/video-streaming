# Video streaming web app

A simple app with a basic design, showcasing the functionality of streaming videos from a database, that could be used in larger projects. It was build with React and Material UI for the frontend, and Firebase on the backend.

## Getting started

Clone the project

```bash
  git clone https://github.com/andreimuntean1/video-streaming.git
```

Move to the 'video-streaming' directory

```bash
  cd video-streaming
```

Install the dependencies

```bash
  npm install
```

Create a Firebase Firestore database and a Storage bucket

- the database should contain a collection named `video`
- the storage bucket should contain 2 folders, named `videos` and `thumbnails`

Add a .env file that should contain the following environment variables

`VITE_API_KEY`,
`VITE_AUTH_DOMAIN`,
`VITE_PROJECT_ID`,
`VITE_STORAGE_BUCKET`,
`VITE_MESSAGING_SENDER_ID`,
`VITE_APP_ID`

Start the server

```bash
  npm run dev
```
