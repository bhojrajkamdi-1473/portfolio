import fs from 'fs';
import path from 'path';

const root = 'C:/Users/hp/OpenWork Chat/portfolio';
const out = path.join(root, 'baseline');
fs.mkdirSync(out, { recursive: true });

const files = ['index.html', 'projects.html', 'about.html', 'experience.html', 'certifications.html', 'contact.html', 'resume.html'];
for (const f of files) {
  const p = path.join(root, f);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(out, f));
  }
}
if (fs.existsSync(path.join(root, 'assets'))) {
  // copy key assets
  const aout = path.join(out, 'assets');
  fs.mkdirSync(aout, { recursive: true });
  for (const f of fs.readdirSync(path.join(root, 'assets'))) {
    const src = path.join(root, 'assets', f);
    if (fs.statSync(src).isFile()) {
      try { fs.copyFileSync(src, path.join(aout, f)); } catch {}
    }
  }
}
fs.writeFileSync(path.join(out, 'snapshot.json'), JSON.stringify({ts: new Date().toISOString(), files}, null, 2));
console.log('baseline written to', out);
