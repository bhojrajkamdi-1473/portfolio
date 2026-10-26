import re,json,os
os.chdir(r'C:\Users\hp\OpenWork Chat\portfolio')
s=open('projects.html',encoding='utf-8').read()
recs=re.findall(r'<article[^>]+id="(p\d+)"[^>]*>(.*?)</article>',s,re.S)
print(len(recs))
for rid,body in recs:
    title=re.search(r'<h[23][^>]*>(.*?)</h[23]>',body,re.S)
    print(rid, title.group(1) if title else 'NO_TITLE')
    # links
    links=re.findall(r'href="([^"]*(?:drive|docs\.google)[^"]*)"',body)
    print('  LINKS', len(links))
    for l in links:
        print('   ', l)
    print()
