

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
    s = b'\xff\xfet\x00r\x00a\x00n\x00s\x00f\x00e\x00r\x00m\x00a\x00r\x00k\x00t\x00\\\x00.\x00d\x00e\x00'
    if not ((bool(re.search(s.decode("utf-16"), url))) or (bool(re.search('verein', url)))):
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
    s = b'\xff\xfeh\x00t\x00t\x00p\x00:\x00/\x00/\x00w\x00w\x00w\x00.\x00t\x00r\x00a\x00n\x00s\x00f\x00e\x00r\x00m\x00a\x00r\x00k\x00t\x00.\x00d\x00e\x00'
    s = s.decode("utf-16")
    for link in links:
        linkList.append(s + (str(link).replace('[','').replace(']','').replace('\'','') ))


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
