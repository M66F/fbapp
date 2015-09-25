
__author__ = 'Peter'

import requests
import re
import codecs

# some magic to remove dupilcates, copy pasterino
def f7(seq):
    seen = set()
    seen_add = seen.add
    return [ x for x in seq if not (x in seen or seen_add(x))]
# magic end


def main():
    url = input("Enter team url: ")
    #url = "http://www.transfermarkt.de/fc-bayern-munchen/startseite/verein/27"
    if not ((bool(re.search('transfermarkt\.de', url))) or (bool(re.search('verein', url)))):
        print("Invalid URL!")
        return

    # Extract links from website
    # regex to search, format and then put into a file
    try:
        ##############################################
        s = requests.Session()
        s.headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36'
        r = s.get(url)
        content = r.text
        ##############################################
    except:
        print("Request to server (" + url + ")" + "failed [Code 1]")
        return

    m = re.findall("href=\"\/.{0,20}\/profil\/spieler\/\d*", content)
    #print(m)

    links = [ ]
    for link in m:
        links.append(re.findall('\/.*', link))


    linkList = []
    for link in links:
        linkList.append('http://www.transfermarkt.de' + (str(link).replace('[','').replace(']','').replace('\'','') ))


    # remove duplicates
    linkList = f7(linkList)
    #print(linkList)

    print("Saving to file...")
    path = 'all_players.txt'

    file = codecs.open(path, "w", "utf-8")
    file.write(str(linkList).replace('[','').replace(']',''))
    print("Saving to file done.")
    file.close()


if __name__ == "__main__":
    main()
