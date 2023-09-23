import socketIO from "socket.io-client";
export const socket = socketIO.connect(REACT_APP_SOCKET_URI, {
  autoConnect: false,
});
