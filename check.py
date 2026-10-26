import re
path=r"C:\Users\hp\OpenWork Chat\portfolio\projects.html"
s=open(path,encoding='utf-8').read()
for n in ['10','11','12','13','14']:
    m=re.search(r'(<tr>\s*<td class="idx-no">'+n+r'</td>.*?<td class="idx-report"[^>]*>)(.*?)(</td>)', s, re.DOTALL)
    if m:
        print(n+':'+m.group(2).replace('\n',' '))
