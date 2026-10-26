const fs = require('fs');
const base = 'C:/Users/hp/OpenWork Chat/portfolio/';
const files = ['index.html', 'projects.html'];

for (const f of files) {
  const s = fs.readFileSync(base + f, 'utf8');
  console.log('===', f, '===');
  console.log('pending-chip:', (s.match(/pending-chip/g) || []).length);
  console.log('"Report not linked":', (s.match(/Report not linked/g) || []).length);
  console.log('"Not published":', (s.match(/Not published/g) || []).length);
  console.log('doc links:', (s.match(/docs\.google\.com\/document\/d\/([A-Za-z0-9_-]+)/g) || []).length);
  console.log('drive folders:', (s.match(/drive\.google\.com\/drive[^"]*folders\/([A-Za-z0-9_-]+)/g) || []).length);
  console.log('target blank links:', (s.match(/target="_blank"/g) || []).length);
  const ids = [...s.matchAll(/docs\.google\.com\/document\/d\/([A-Za-z0-9_-]+)/g)].map(m => m[1]);
  console.log('unique doc ids:', [...new Set(ids)].length);
  const fids = [...s.matchAll(/folders\/([A-Za-z0-9_-]+)/g)].map(m => m[1]);
  console.log('unique folder ids:', [...new Set(fids)]);
}
