import sys

path = r"C:\Users\hp\OpenWork Chat\portfolio\projects.html"
with open(path, encoding='utf-8') as f:
    s = f.read()

# p11
s = s.replace('''<tr>
            <td class="idx-no">11</td>
            <td><a class="idx-title" href="#p11">Bata India — Store Renovation Capex &amp; Margin Modelling</a></td>
            <td class="idx-cat" data-label="Category">Financial Analysis</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Financial model</td>
            <td data-label="Detail"><a class="idx-detail" href="#p11">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a> <span>Report not linked</span></td>
          </tr>''',
'''<tr>
            <td class="idx-no">11</td>
            <td><a class="idx-title" href="#p11">Bata India — Store Renovation Capex &amp; Margin Modelling</a></td>
            <td class="idx-cat" data-label="Category">Financial Analysis</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Financial model</td>
            <td data-label="Detail"><a class="idx-detail" href="#p11">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://docs.google.com/document/d/1Cy3-Fhz0zzeDlXy7143tufdGQLakAhRA/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">Report ↗</a> <a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a></td>
          </tr>''')

# p12
s = s.replace('''<tr>
            <td class="idx-no">12</td>
            <td><a class="idx-title" href="#p12">NTPC Limited — Equity Research &amp; Fundamental Valuation</a></td>
            <td class="idx-cat" data-label="Category">Research</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Equity research report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p12">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a> <span>Report not linked</span></td>
          </tr>''',
'''<tr>
            <td class="idx-no">12</td>
            <td><a class="idx-title" href="#p12">NTPC Limited — Equity Research &amp; Fundamental Valuation</a></td>
            <td class="idx-cat" data-label="Category">Research</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Equity research report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p12">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://docs.google.com/document/d/1UMdpb7_7EZrPmKCcKV2yx-humW3T3s7X/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">Report ↗</a> <a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a></td>
          </tr>''')

# p13
s = s.replace('''<tr>
            <td class="idx-no">13</td>
            <td><a class="idx-title" href="#p13">US GAAP ASC Analysis &amp; Ind AS Application at Page Industries</a></td>
            <td class="idx-cat" data-label="Category">Audit &amp; Accounting</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Comparative report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p13">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a> <span>Report not linked</span></td>
          </tr>''',
'''<tr>
            <td class="idx-no">13</td>
            <td><a class="idx-title" href="#p13">US GAAP ASC Analysis &amp; Ind AS Application at Page Industries</a></td>
            <td class="idx-cat" data-label="Category">Audit &amp; Accounting</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Comparative report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p13">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://docs.google.com/document/d/15_LNEUVA29AoEoxq4TP8MniRWhcfPKY-/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">Report ↗</a> <a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a></td>
          </tr>''')

# p14
s = s.replace('''<tr>
            <td class="idx-no">14</td>
            <td><a class="idx-title" href="#p14">Qualified Audit Opinion in a Government Defence Company</a></td>
            <td class="idx-cat" data-label="Category">Audit &amp; Accounting</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Case report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p14">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a> <span>Report not linked</span></td>
          </tr>''',
'''<tr>
            <td class="idx-no">14</td>
            <td><a class="idx-title" href="#p14">Qualified Audit Opinion in a Government Defence Company</a></td>
            <td class="idx-cat" data-label="Category">Audit &amp; Accounting</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Case report</td>
            <td data-label="Detail"><a class="idx-detail" href="#p14">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://docs.google.com/document/d/1vTkkLlFDqeDfH6Cy1lQAf2Il08225ZnY/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">Report ↗</a> <a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a></td>
          </tr>''')

# p10
s = s.replace('''<tr>
            <td class="idx-no">10</td>
            <td><a class="idx-title" href="#p10">SizeRight — Profile-Driven Allocation Engine</a></td>
            <td class="idx-cat" data-label="Category">Research</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Capstone</td>
            <td data-label="Detail"><a class="idx-detail" href="#p10">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a> <span>Report not linked</span></td>
          </tr>''',
'''<tr>
            <td class="idx-no">10</td>
            <td><a class="idx-title" href="#p10">SizeRight — Profile-Driven Allocation Engine</a></td>
            <td class="idx-cat" data-label="Category">Research</td>
            <td class="idx-context" data-label="Context">Semester 3</td>
            <td class="idx-artefact" data-label="Artefact">Capstone</td>
            <td data-label="Detail"><a class="idx-detail" href="#p10">Record →</a></td>
            <td class="idx-report" data-label="Report"><a href="https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">Report ↗</a> <a href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Folder ↗</a></td>
          </tr>''')

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)

print('done')
