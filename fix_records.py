path = r"C:\Users\hp\OpenWork Chat\portfolio\projects.html"
with open(path, encoding='utf-8') as f:
    s = f.read()

# p11
s = s.replace('''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
            <span class="pending-chip">Report not linked</span>
          </div>
        </div>''',
'''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Financial Modelling &amp; Valuation</span>
            <a class="report-link" href="https://docs.google.com/document/d/1Cy3-Fhz0zzeDlXy7143tufdGQLakAhRA/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
          </div>
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
          </div>
        </div>''')

# p12
s = s.replace('''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
            <span class="pending-chip">Report not linked</span>
          </div>
        </div>''',
'''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Investment Research</span>
            <a class="report-link" href="https://docs.google.com/document/d/1UMdpb7_7EZrPmKCcKV2yx-humW3T3s7X/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
          </div>
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
          </div>
        </div>''')

# p13
s = s.replace('''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
            <span class="pending-chip">Report not linked</span>
          </div>
        </div>''',
'''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Financial Reporting</span>
            <a class="report-link" href="https://docs.google.com/document/d/15_LNEUVA29AoEoxq4TP8MniRWhcfPKY-/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
          </div>
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
          </div>
        </div>''')

# p14
s = s.replace('''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
            <span class="pending-chip">Report not linked</span>
          </div>
        </div>''',
'''      <div class="report-links">
          <div class="report-row">
            <span class="report-cap">Audit</span>
            <a class="report-link" href="https://docs.google.com/document/d/1vTkkLlFDqeDfH6Cy1lQAf2Il08225ZnY/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
          </div>
          <div class="report-row">
            <span class="report-cap">Source files · Semester 3 Drive archive</span>
            <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
          </div>
        </div>''')

# p10
s = s.replace('''      <div class="report-links">
        <div class="report-row">
          <span class="report-cap">AI in Finance</span>
          <a class="report-link" href="https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
        </div>
      </div>''',
'''      <div class="report-links">
        <div class="report-row">
          <span class="report-cap">AI in Finance</span>
          <a class="report-link" href="https://docs.google.com/document/d/18jf2dV0_WyICSwVGcLA0dVei4VEEnBnk/edit?usp=drive_link" rel="noopener noreferrer" target="_blank">View report <span class="arrow">↗</span></a>
        </div>
        <div class="report-row">
          <span class="report-cap">Source files · Semester 3 Drive archive</span>
          <a class="report-link" href="https://drive.google.com/drive/u/0/folders/1Y1Z8Ju0RZBIP8k7EP5gQH0271rra957-" rel="noopener noreferrer" target="_blank">Open Drive folder <span class="arrow">↗</span></a>
        </div>
      </div>''')

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)

print('done')
