import socketIO from "socket.io-client";
export const socket = socketIO.connect("http://localhost:4000", {
  autoConnect: false,
});
