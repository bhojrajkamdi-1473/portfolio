const fs = require('fs');
const p = 'C:/Users/hp/OpenWork Chat/portfolio/projects.html';
const lines = fs.readFileSync(p, 'utf8').split('\n');
const starts = [];
lines.forEach((l, i) => { if (l.includes('<div class="report-links">')) starts.push(i); });
starts.forEach((s) => {
  const chunk = lines.slice(s, s + 14).join('\n');
  const id = lines.slice(Math.max(0, s - 20), s).join('\n').match(/id="p\d+"/);
  console.log('\n=== near ' + (id ? id[0] : '?') + ' (line ' + (s + 1) + ') ===');
  console.log(chunk.replace(/\n\s*\n/g, '\n'));
});
