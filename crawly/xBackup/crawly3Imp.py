"""crawly.py: Crawly collects player data from transfermarkt.de into JSON-encoded .pd-files in
/data/. The list of players is stored in /start.py
Start with python3.4 crawly.py"""

__author__      = "Peter"
__version__ = "0.1.0"
__maintainer__ = "Peter"
__status__ = "Development"

# To-Do: validation check, error log
# Only touch if you know what you are doing

# ADD PLAYERS IN start.py

import requests
import re
import json


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


def getAlter(content):
    try:
        m = re.search('<th>Alter:<\/th>(.|\n)*?<td>(.)*<\/td>', content)
        #print(m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.)*<\/td>', m.group(0))
        #print(m2.group(0))

        #print('*****************************************')
        alter = m2.group(0)
        alter = alter.replace('<td>', '')
        alter = alter.replace('</td>', '')
        #print(alter)

        return alter

    except:
        print(bcolors.WARNING + "Couldn't find age for" + bcolors.ENDC)
        return "n.a."


def getFuss(content):
    try:
        m = re.search('<th>Fuß:<\/th>(.|\n)*?<td>(.)*<\/td>', content)
        #print(m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.)*<\/td>', m.group(0))
        #print(m2.group(0))

        #print('*****************************************')
        fuss = m2.group(0)
        fuss = fuss.replace('<td>', '')
        fuss = fuss.replace('</td>', '')
        #print(alter)

        return fuss
    except:
        print(bcolors.WARNING + "Couldn't find feet pref."  + bcolors.ENDC)
        return "n.a."

def getGroesse(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Größe:<\/th>(.|\n)*?<td>(.)*<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find height." + bcolors.ENDC)
        return "n.a."


def getSchuhgroesse(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Schuhgröße:<\/th>(.|\n)*?<td>(.)*<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find shoe size." + bcolors.ENDC)
        return "n.a."


def getGeburtsdatum(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Geburtsdatum:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/a>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)
        ret = re.sub('\s', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + bcolors.WARNING + "Couldn't find birth date." + bcolors.ENDC)
        return "n.a."


def getGeburtsort(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Geburtsort:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*\/>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)
        ret = re.sub('\s', '', ret)
        ret = re.sub('&nbsp;', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + bcolors.WARNING + "Couldn't find birthplace." + bcolors.ENDC)
        return "n.a."


def getNationalitaet(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Nationalität:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*\/>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = re.search('title=\"(.)*?\"', m2.group(0));
        ret = ret.group(0)

        ret = re.sub('title=\"', '', ret)
        ret = re.sub('\"', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find nationality." + bcolors.ENDC)
        return "n.a."


def getPosition(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Position:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*?<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*>', '', ret)
        ret = re.sub('\s', '', ret)

        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find position." + bcolors.ENDC)
        return "n.a."


def getVerein(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Aktueller Verein:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find feet club." + bcolors.ENDC)
        return "n.a."


def getName(content, url):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Name im Heimatland:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        #print('3: ' + ret)

        return ret
    except:
        ret = re.sub('http://www.transfermarkt.de/', '', url)
        ret = re.sub('/profil/spieler/.*', '', ret)
        ret = re.sub('-', ' ', ret)
        return ret


def getSpielerberater(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Spielerberater:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find agent." + bcolors.ENDC)
        return "n.a."

def getImTeamSeit(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Im Team seit:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find \'being on the team since\'." + bcolors.ENDC)
        return "n.a."


def getVertragBis(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Vertrag bis:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find contract duration." + bcolors.ENDC)
        return "n.a."


def getAusruester(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Ausrüster:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find supplier." + bcolors.ENDC)
        return "n.a."


def getSchuhmodell(content):
    try:
        #EDIT HERE
        m = re.search('<tr>(\s|\n)*<th>Schuhmodell:<\/th>(.|\n)*?<td>(.|\n)*?<\/td>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        m2 = re.search('<td>(.|\n)*?<\/td>', m.group(0))
        #print('2: ' + m2.group(0))

        #print('*****************************************')
        ret = m2.group(0)

        ret = re.sub('<(.)*?>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('3: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find shoe model." + bcolors.ENDC)
        return "n.a."


def getAktuellerMarktwert(content):
    try:
        #EDIT HERE
        m = re.search('Aktueller Marktwert:(.|\n)*?€[\s|\n]*?<.*?>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        ret = m.group(0)

        #remove HTML Tags
        ret = re.sub('<(.)*?>', '', ret)

        #get rid off keyword
        ret = re.sub('Aktueller Marktwert:', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('2: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find current market value." + bcolors.ENDC)
        return "n.a."


def getHoechsterMarktwert(content):
    try:
        #EDIT HERE
        m = re.search('Höchster Marktwert:(.|\n)*?€', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        ret = m.group(0)

        #remove HTML Tags
        ret = re.sub('<(.)*?>', '', ret)

        #get rid off keyword
        ret = re.sub('Höchster Marktwert:', '', ret)

        #again, remove stuff
        ret = re.sub('Letzte Änderung:', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('2: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find highest market value." + bcolors.ENDC)
        return "n.a."


def getPictureURL(content):
    try:
        #EDIT HERE
        m = re.search('"og:image(.)*\/>', content)
        #print('1: ' + m.group(0))

        #print('*****************************************')
        ret = m.group(0)

        #remove tags
        ret = re.sub('\"og:image" content=\"|\" \/>', '', ret)

        # trim white space before and after but not between
        ret = re.sub('\s{2}', '', ret)
        # get rid of tab
        ret = re.sub('\t*', '', ret)
        #print('2: ' + ret)

        return ret

    except:
        print(bcolors.WARNING + "Couldn't find picture url." + bcolors.ENDC)
        return "n.a."


def validationCheck(data, filepath):
    # alpha state of data validation

    #check for HTML Tags
    htmltags = re.search('[<|>]', data)
    if(htmltags != None):
        print(bcolors.FAIL + "CRITICAL ERROR for file " + filepath + " (check validation.log)" + bcolors.ENDC)
        try:
            path = 'logs/critical/validation.log'
            file = open(path, 'a')
            file.write("ERROR - HTML-Tags in data found. Check file and function to fix errors : '" + filepath + "'\n")
            file.close()
        except:
            print(bcolors.FAIL + "Writing log for " + filepath + " failed [Code F1]" + bcolors.ENDC)

    print(bcolors.OKGREEN + "Validation check for " + filepath + " successful" + bcolors.ENDC)


def addToIndexJSON(filename, playername, imageurl):

    n = "playerData"
    path = 'data/general/' + n + '.pd'
    file = open(path, 'r')
    fileData = file.read()
    file.close()
    file = open(path, 'w')
    fileData = re.sub(']', '', fileData)
    fileData = re.sub('}(?!,)', '},', fileData)
    fileData += '{\"filename\":\"' + filename + '\", \"playername\":\"' + playername + '\", \"imageurl\":\"' + imageurl + '\" } ]'
    file.write(fileData)
    file.close()


def savePlayerData(iurl):
    try:
        ##############################################
        s = requests.Session()
        s.headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36'
        url = iurl
        r = s.get(url)
        content = r.text
        ##############################################
    except:
        print(bcolors.FAIL + "Request to server (" + url + ")" + "failed [Code 1]" + bcolors.ENDC)
        return

    print("Getting data for " + iurl + " ...")

    name = getName(content, url)
    alter = getAlter(content)
    geburtsdatum = getGeburtsdatum(content)
    geburtsort = getGeburtsort(content)
    groesse = getGroesse(content)
    nationalitaet = getNationalitaet(content)
    verein = getVerein(content)
    position = getPosition(content)
    schussfuss = getFuss(content)
    imTeamSeit = getImTeamSeit(content)
    vertragBis = getVertragBis(content)
    spielerBerater = getSpielerberater(content)
    schuhgroesse = getSchuhgroesse(content)
    ausruester = getAusruester(content)
    schuhmodell = getSchuhmodell(content)
    aktuellerMarktwert = getAktuellerMarktwert(content)
    hoechsterMarktwert = getHoechsterMarktwert(content)
    pictureURL = getPictureURL(content)


    ##collect all Data
    data =  {'Name':name, 'Alter':alter, 'Geburtsdatum':geburtsdatum, 'Geburtsort': geburtsort, 'Groesse':groesse, 'Nationalitaet':nationalitaet,
              'Verein':verein, 'Position':position, 'Schussfuss':schussfuss, 'ImTeamSeit':imTeamSeit, 'VertragBis':vertragBis,
              'Spielerberater':spielerBerater, 'Schuhgroesse':schuhgroesse, 'Ausruester':ausruester, 'Schuhmodell':schuhmodell,
              'AktuellerMarktwert':aktuellerMarktwert, 'HoechsterMarktwert':hoechsterMarktwert, 'PictureURL':pictureURL }

    print(bcolors.OKGREEN + "Collecting data done." + bcolors.ENDC)


    ##save to single player-File
    try:
        print("Saving to file...")
        n = re.sub('http://www.transfermarkt.de/', '', url)
        n = re.sub('/profil/spieler/.*', '', n)
        n = re.sub('-', ' ', n)
        n = re.sub('\s', '_', n)
        path = 'data/' + n + '.pd'

        ##validation check
        validationCheck(json.dumps(data), path)

        file = open(path, 'w')
        file.write(json.dumps(data))
        file.close()
    except:
        print(bcolors.FAIL + "Writing file for " + name + " failed [Code F1]" + bcolors.ENDC)

    print(bcolors.OKGREEN + "Saving done for " + name + bcolors.ENDC)

    ##add to index json file
    try:
        print("Saving to file...")
        filename = re.sub('http://www.transfermarkt.de/', '', url)
        filename = re.sub('/profil/spieler/.*', '', filename)
        filename = re.sub('-', ' ', filename)
        filename = re.sub('\s', '_', filename)
        addToIndexJSON(filename, name, pictureURL)
    except:
        print(bcolors.FAIL + "Adding " + name + " to playerData failed!" + bcolors.ENDC)

    print(bcolors.OKGREEN + "Adding " + name + " to playerData successful" + bcolors.ENDC)
