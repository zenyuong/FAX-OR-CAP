from urllib.request import Request, urlopen
import re
import string

def wordopt(url):
    from bs4 import BeautifulSoup as soup
    req = Request(url , headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = soup(webpage, "html.parser")
    title = soup.find("title").get_text()
    print(title     )
    print("----")
    rows = soup.find_all('p')
    text = ""
    originalText= ""
    for row in rows:
        text += row.get_text()
        originalText += row.get_text()

    text = text.lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub("\\W"," ",text) 
    text = re.sub('https?://\S+|www\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w*\d\w*', '', text)  

    originalText = re.sub('\n', '', originalText)
    originalText = re.sub('  ', ' ', originalText)

    print(originalText)
    return (title, originalText, text)
