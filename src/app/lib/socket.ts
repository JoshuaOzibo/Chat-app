// lib/socket.ts
import { io } from "socket.io-client";

const socket = io("http://localhost:3002", {
  transports: ["websocket"],
  autoConnect: true,

}) // or your deployed socket server URL

export default socket;
