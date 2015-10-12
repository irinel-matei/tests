import urllib.request
import re

response = urllib.request.urlopen('http://www.example.com/')
html = response.read().decode('utf-8')

#html = "dOmain 23"
matchObj = re.match( 'doc', str(html))

print(html);

if matchObj:
   print('aaa')
else:
   print("No match!!")

