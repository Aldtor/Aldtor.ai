import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep, join, basename, dirname } from 'node:path';
const root = resolve('out');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml' };
createServer(async (req, res) => {
  try {
    let file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    try { if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html'); } catch {}
    if (!file.startsWith(root + sep) && file !== root) { res.writeHead(403).end(); return; }
    try { await stat(file); } catch {
      const requestPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const flattened = requestPath.match(/^(.*\/)(__next\.[^/]+)\.__PAGE__\.txt$/);
      if (flattened) file = join(root, flattened[1], flattened[2], '__PAGE__.txt');
    }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    res.end(data);
  } catch { res.writeHead(404, { 'Content-Type': 'text/html' }); res.end(await readFile(resolve(root, '404.html')).catch(() => 'Not found')); }
}).listen(port, '0.0.0.0', () => console.log(`Local: http://localhost:${port}`));
