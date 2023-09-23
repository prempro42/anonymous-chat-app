import socketIO from "socket.io-client";
export const socket = socketIO.connect(NEXT_PUBLIC_SOCKET_URI, {
  autoConnect: false,
});
