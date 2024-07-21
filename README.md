# Anonymous Chat App

## Real-time chat application

Built with [React](https://react.dev), [Chakra UI](https://chakra-ui.com), [Socket.IO](https://socket.io/) & [Vite](https://vitejs.dev)

## App details
A real-time, completely anonymous chat app where users can connect and message instantly.

Link: [https://anonymous-chat-app-prem.vercel.app/](https://anonymous-chat-app-prem.vercel.app/)

Demo: [https://youtu.be/dfsCfYC3Xug](https://youtu.be/dfsCfYC3Xug)

Frontend: Hosted on  [Vercel](https://vercel.com/)

Backend (Socket Server): Hosted on [Render](https://render.com/)

## Features

- Real-time messaging
- Completely anonymous
- Send invitations to the current room (Users can generate a link or share a code to invite others)

## Frontend setup

```bash
# go into project directory
cd anonymous-chat-app

# Install dependencies
$ yarn

# Compiles and hot-reloads for development
$ yarn dev

# Compiles and minifies for production
$ yarn build
```
## Backend socket server setup

```bash
# go into project directory
cd anonymous-chat-app/socket-server

# run socket server
$ node index.cjs

```
## 
Inspired by Blabber https://github.com/carlssonemil/blabber
