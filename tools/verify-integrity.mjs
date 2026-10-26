import fs from 'fs';
import path from 'path';

const root = 'C:/Users/hp/OpenWork Chat/portfolio';
const html = fs.readFileSync(path.join(root, 'projects.html'), 'utf8');

// Must have all 14 projects
const projects = (html.match(/id="p(\d+)"/g)||[]).map(m=>m.match(/p(\d+)/)[1]).map(x=>parseInt(x)).sort((a,b)=>a-b);
const required = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const missing = required.filter(x=>!projects.includes(x));
if (missing.length) { console.error('MISSING_PROJECTS', missing); process.exit(1); }
console.log('projects_ok', projects.length);

// Must have exact figures
const checks = ['₹20.05 Cr', '₹100.26 Cr', '₹0.92', '₹0.14'];
for (const c of checks) {
  if (!html.includes(c)) { console.error('MISSING_FIG', c); process.exit(1); }
}
if (!html.includes('−84.8%') && !html.includes('-84.8%')) { console.error('MISSING_FIG', '-84.8%'); process.exit(1); }
console.log('figures_ok');

// Links
const links = (html.match(/href="[^"]*(drive|docs\.google)[^"]*"/g)||[]).length;
console.log('drive_links', links);
console.log('OK');
