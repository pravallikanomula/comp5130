import express from "express";
import dotenv from "dotenv";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import https from "https";
import fs from "fs";
import path from "path";


const app = express();
dotenv.config();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.resolve("/Users/nomulapravallika/Downloads/full-stack-estate-main3copy/api/certs/localhost-key.pem"), "utf8"),
    cert: fs.readFileSync(path.resolve("/Users/nomulapravallika/Downloads/full-stack-estate-main3copy/api/certs/localhost.pem"), "utf8"),
  },
  app
);

sslServer.listen(8800, () => { 
  console.log('Secure server on port 8800');
});

