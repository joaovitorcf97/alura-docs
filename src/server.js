import express from 'express';
import url from 'url';
import path from 'path';
import http from 'node:http';
import { Server } from 'socket.io';

const app = express();
const port = process.env.port || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../../', 'public');
app.use(express.static(publicDirectory));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

const io = new Server(serverHttp);

export default io;