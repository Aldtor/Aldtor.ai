import { readdir, copyFile } from 'node:fs/promises';
import { join, sep } from 'node:path';

// Next 16 exports route segment payloads one directory deeper than the URL
// requested by the App Router. Copy the page payload beside the HTML so
// prefetch and client navigation resolve correctly on static hosts.
const root = join(process.cwd(), 'out');
let copies = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('__next.') && entry.name.endsWith('__PAGE__')) continue;
      await walk(path);
      if (entry.name.startsWith('__next.')) {
        const pagePayload = join(path, '__PAGE__.txt');
        try {
          const destination = `${directory}${sep}${entry.name}.__PAGE__.txt`;
          await copyFile(pagePayload, destination);
          copies++;
        } catch (error) {
          if (error.code !== 'ENOENT') throw error;
        }
      }
    }
  }
}
await walk(root);
console.log(`Prepared ${copies} static route payloads`);
