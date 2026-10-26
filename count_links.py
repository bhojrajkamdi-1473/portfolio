import re
s=open('projects.html',encoding='utf-8').read()
m=re.findall(r'href=[\"\']([^\"\']*(?:drive|docs\\.google)[^\"\']*)[\"\']',s)
print(len(m))
