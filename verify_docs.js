const docs = {
  '01C MRF': 'https://docs.google.com/document/d/1b0azJOrUWnRysQ4T6offfiIfnlYEiOCq/export?format=txt',
  '02-05 FundAccounting/Jindal': 'https://docs.google.com/document/d/1-ST0W2-EolFUOAw8sI0Gc8BhKvERcQRi/export?format=txt',
  '03 Cultfit': 'https://docs.google.com/document/d/15KwRoxBXu1gl8Ad9i0O74e_oHOddEKci/export?format=txt',
  'S3-AIinFinance': 'https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/export?format=txt',
  'S3-Audit': 'https://docs.google.com/document/d/1vTkkLlFDqeDfH6Cy1lQAf2Il08225ZnY/export?format=txt',
  'S3-FinModelling': 'https://docs.google.com/document/d/1Cy3-Fhz0zzeDlXy7143tufdGQLakAhRA/export?format=txt',
  'S3-FinReporting': 'https://docs.google.com/document/d/15_LNEUVA29AoEoxq4TP8MniRWhcfPKY-/export?format=txt',
  'S3-InvestmentResearch': 'https://docs.google.com/document/d/1UMdpb7_7EZrPmKCcKV2yx-humW3T3s7X/export?format=txt'
};

(async () => {
  for (const [name, url] of Object.entries(docs)) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      const text = await res.text();
      const clean = text.replace(/\r/g, '').trim();
      console.log('\n########## ' + name + ' | status ' + res.status + ' | bytes ' + clean.length);
      console.log(clean.slice(0, 700));
      // look for topic keywords
      const kw = ['Bata', 'NTPC', 'Page Industries', 'SizeRight', 'defence', 'opinion', 'Jindal', 'Cult', 'MRF', 'moratorium', 'NRE'];
      const found = kw.filter(k => new RegExp(k, 'i').test(clean));
      console.log('KEYWORDS:', found.join(', ') || '(none)');
    } catch (e) {
      console.log('\n########## ' + name + ' ERROR ' + e.message);
    }
  }
})();
