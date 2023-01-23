import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
const port = process.env.port || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../../', 'public');
app.use(express.static(publicDirectory));

app.listen(port, () => {
  console.log(`Servidor roandao na parta http://localhost:${port}`);
});