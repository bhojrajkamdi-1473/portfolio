const fs = require('fs');

const base = 'C:/Users/hp/OpenWork Chat/portfolio/';

// Verified document IDs already used elsewhere in the repo (Semester 3 course submissions).
const sem3 = {
  aiFinance: 'https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/edit?usp=drive_link',
  audit: 'https://docs.google.com/document/d/1vTkkLlFDqeDfH6Cy1lQAf2Il08225ZnY/edit?usp=drive_link',
  finModelling: 'https://docs.google.com/document/d/1Cy3-Fhz0zzeDlXy7143tufdGQLakAhRA/edit?usp=drive_link',
  finReporting: 'https://docs.google.com/document/d/15_LNEUVA29AoEoxq4TP8MniRWhcfPKY-/edit?usp=drive_link',
  investmentResearch: 'https://docs.google.com/document/d/1UMdpb7_7EZrPmKCcKV2yx-humW3T3s7X/edit?usp=drive_link'
};
const folder = 'https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-';

const map = {
  '10': { report: sem3.aiFinance, label: 'Report', cap: 'AI in Finance' },
  '11': { report: sem3.finModelling, label: 'Report', cap: 'Financial Modelling &amp; Valuation' },
  '12': { report: sem3.investmentResearch, label: 'Report', cap: 'Investment Research' },
  '13': { report: sem3.finReporting, label: 'Report', cap: 'Financial Reporting' },
  '14': { report: sem3.audit, label: 'Report', cap: 'Audit' }
};

// ---------- projects.html index table ----------
let p = fs.readFileSync(base + 'projects.html', 'utf8');

for (const no of Object.keys(map)) {
  const m = map[no];
  const re = new RegExp(
    '(<tr>\\s*<td class="idx-no">' + no + '</td>[\\s\\S]*?<td class="idx-report"[^>]*>)([\\s\\S]*?)(</td>)'
  );
  p = p.replace(re, (full, head, body, tail) => {
    return head +
      '<a href="' + m.report + '" rel="noopener noreferrer" target="_blank">Report ↗</a> ' +
      '<a href="' + folder + '" rel="noopener noreferrer" target="_blank">Folder ↗</a>' +
      tail;
  });
}

// Semester 3 section copy: no longer accurate to say every record is unlinked.
p = p.replace(
  'Individual report files are not published, so those records are marked <strong>report not linked</strong> rather than given a substitute link.',
  'Each record links to the course submission that matches its topic, plus the shared folder for the remaining source files.'
);

// Fact row accuracy: 13 records now carry a report link; record 09 is journal-only.
p = p.replace('<div class="fact"><b>07</b><span>Reports published</span></div>',
              '<div class="fact"><b>13</b><span>Records with reports</span></div>');
p = p.replace('<div class="fact"><b>05</b><span>Folder-only records</span></div>',
              '<div class="fact"><b>01</b><span>Journal-only record</span></div>');

fs.writeFileSync(base + 'projects.html', p);

// ---------- index.html evidence ledger ----------
let h = fs.readFileSync(base + 'index.html', 'utf8');

const ledger = {
  '10': sem3.aiFinance,
  '11': sem3.finModelling,
  '12': sem3.investmentResearch,
  '13': sem3.finReporting,
  '14': sem3.audit
};

for (const no of Object.keys(ledger)) {
  const re = new RegExp(
    '(<span class="ev-no">' + no + '</span>[\\s\\S]*?<div class="ev-actions">)([\\s\\S]*?)(</div>)'
  );
  h = h.replace(re, (full, head, body, tail) => {
    let inner = body;
    // keep existing detail + folder actions, add report if missing
    if (!inner.includes('Folder ↗')) {
      inner = inner.replace(
        /<a class="ev-report"[^>]*>Folder ↗<\/a>/,
        '<a class="ev-report" href="' + folder + '" target="_blank" rel="noopener noreferrer">Folder ↗</a>'
      );
    }
    if (!/<a class="ev-report"[^>]*>Report ↗<\/a>/.test(inner)) {
      inner = inner.replace(
        /<span class="ev-status">Report not linked<\/span>/,
        '<a class="ev-report" href="' + ledger[no] + '" target="_blank" rel="noopener noreferrer">Report ↗</a>'
      );
    }
    return head + inner + tail;
  });
}

fs.writeFileSync(base + 'index.html', h);

console.log('rewritten');
