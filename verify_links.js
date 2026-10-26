const urls = {
  '01A Patel Retail': 'https://drive.google.com/file/d/1pGAY4Vr_cwJC33Z5CAIImhbXU2Av9RaV/view',
  '01B Tech Mahindra': 'https://drive.google.com/file/d/13X6SglaG91yu_porTelERwR6Js7KmhCo/view',
  '01C MRF': 'https://docs.google.com/document/d/1b0azJOrUWnRysQ4T6offfiIfnlYEiOCq/export?format=txt',
  '02/05 Fund Accounting-Jindal': 'https://docs.google.com/document/d/1-ST0W2-EolFUOAw8sI0Gc8BhKvERcQRi/export?format=txt',
  '03 Cult.fit': 'https://docs.google.com/document/d/15KwRoxBXu1gl8Ad9i0O74e_oHOddEKci/export?format=txt',
  '04 Lehman': 'https://drive.google.com/file/d/1yhWyuGiuQRcqxmyDaGqeDLzm3GDpXk3U/view',
  '06 Moratorium': 'https://drive.google.com/file/d/1MO-MuSvUr_hlUCkLot7nx0WQ8BYkMjTd/view',
  '07 NRE/NRO': 'https://drive.google.com/file/d/1lDHJDYOQM1cuGc7sDE9fE-yhjT6owPne/view',
  '08 IRS': 'https://drive.google.com/file/d/1vf_yJVM22RVhXzhebZaosspNmHFi_OS4/view',
  'S3 AI in Finance': 'https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/export?format=txt',
  'S3 Audit': 'https://docs.google.com/document/d/1vTkkLlFDqeDfH6Cy1lQAf2Il08225ZnY/export?format=txt',
  'S3 Financial Modelling': 'https://docs.google.com/document/d/1Cy3-Fhz0zzeDlXy7143tufdGQLakAhRA/export?format=txt',
  'S3 Financial Reporting': 'https://docs.google.com/document/d/15_LNEUVA29AoEoxq4TP8MniRWhcfPKY-/export?format=txt',
  'S3 Investment Research': 'https://docs.google.com/document/d/1UMdpb7_7EZrPmKCcKV2yx-humW3T3s7X/export?format=txt',
  'S3 Folder': 'https://drive.google.com/drive/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-'
};

(async () => {
  for (const [name, url] of Object.entries(urls)) {
    try {
      const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0' } });
      const text = await res.text();
      const signedIn = /accounts\.google\.com\/ServiceLogin|Sign in - Google Accounts/.test(text) ? 'SIGN-IN-WALL' : 'no-signin-redirect';
      const requestAccess = /request access|You need permission/i.test(text) ? 'NEEDS-PERMISSION' : 'no-permission-gate';
      const title = (text.match(/<title>([^<]*)<\/title>/) || [null, ''])[1].slice(0, 80);
      console.log(`${name} | ${res.status} | ${signedIn} | ${requestAccess} | ${title}`);
    } catch (e) {
      console.log(`${name} | ERROR ${e.message}`);
    }
  }
})();
