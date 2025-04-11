// lib/socket.ts
import { io } from "socket.io-client";

const socket = io(process.env.Socket_Server, {
  transports: ["websocket"],
  autoConnect: true,

}) // or your deployed socket server URL

export default socket;
