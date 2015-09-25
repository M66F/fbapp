# Add all players we want to have
# Data will be saved in /data/playername.pd
# Start with python3 start.py, else errors (python2)

import crawly
import time

start_time = time.time()

players = [
    # FC Bayern München
    'http://www.transfermarkt.de/manuel-neuer/profil/spieler/17259',
    'http://www.transfermarkt.de/sven-ulreich/profil/spieler/40680',
    'http://www.transfermarkt.de/tom-starke/profil/spieler/80',
    'http://www.transfermarkt.de/ivan-lucic/profil/spieler/164145',
    'http://www.transfermarkt.de/jerome-boateng/profil/spieler/26485',
    'http://www.transfermarkt.de/medhi-benatia/profil/spieler/45124',
    'http://www.transfermarkt.de/holger-badstuber/profil/spieler/54659',
    'http://www.transfermarkt.de/jan-kirchhoff/profil/spieler/49734',
    'http://www.transfermarkt.de/david-alaba/profil/spieler/59016',
    'http://www.transfermarkt.de/juan-bernat/profil/spieler/126719',
    'http://www.transfermarkt.de/philipp-lahm/profil/spieler/2219',
    'http://www.transfermarkt.de/rafinha/profil/spieler/33947',
    'http://www.transfermarkt.de/javi-martinez/profil/spieler/44017',
    'http://www.transfermarkt.de/sebastian-rode/profil/spieler/44466',
    'http://www.transfermarkt.de/xabi-alonso/profil/spieler/7476',
    'http://www.transfermarkt.de/joshua-kimmich/profil/spieler/161056',
    'http://www.transfermarkt.de/arturo-vidal/profil/spieler/37666',
    'http://www.transfermarkt.de/thiago/profil/spieler/60444',
    'http://www.transfermarkt.de/gianluca-gaudino/profil/spieler/195051',
    'http://www.transfermarkt.de/mario-gotze/profil/spieler/74842',
    'http://www.transfermarkt.de/franck-ribery/profil/spieler/22068',
    'http://www.transfermarkt.de/douglas-costa/profil/spieler/75615',
    'http://www.transfermarkt.de/kingsley-coman/profil/spieler/243714',
    'http://www.transfermarkt.de/sinan-kurt/profil/spieler/170530',
    'http://www.transfermarkt.de/julian-green/profil/spieler/161204',
    'http://www.transfermarkt.de/arjen-robben/profil/spieler/4360',
    'http://www.transfermarkt.de/thomas-muller/profil/spieler/58358',
    'http://www.transfermarkt.de/robert-lewandowski/profil/spieler/38253',

    # Borussia Dortmund
    'http://www.transfermarkt.de/roman-burki/profil/spieler/59027',
    'http://www.transfermarkt.de/roman-weidenfeller/profil/spieler/26',
    'http://www.transfermarkt.de/hendrik-bonmann/profil/spieler/104220',
    'http://www.transfermarkt.de/mats-hummels/profil/spieler/39728',
    'http://www.transfermarkt.de/sokratis/profil/spieler/34322',
    'http://www.transfermarkt.de/neven-subotic/profil/spieler/40995',
    'http://www.transfermarkt.de/matthias-ginter/profil/spieler/124502',
    'http://www.transfermarkt.de/marcel-schmelzer/profil/spieler/35208',
    'http://www.transfermarkt.de/joo-ho-park/profil/spieler/111900',
    'http://www.transfermarkt.de/lukasz-piszczek/profil/spieler/25727',
    'http://www.transfermarkt.de/erik-durm/profil/spieler/93922',
    'http://www.transfermarkt.de/pascal-stenzel/profil/spieler/195246',
    'http://www.transfermarkt.de/sven-bender/profil/spieler/29993',
    'http://www.transfermarkt.de/julian-weigl/profil/spieler/196792',
    'http://www.transfermarkt.de/ilkay-gundogan/profil/spieler/53622',
    'http://www.transfermarkt.de/gonzalo-castro/profil/spieler/28947',
    'http://www.transfermarkt.de/nuri-sahin/profil/spieler/31095',
    'http://www.transfermarkt.de/moritz-leitner/profil/spieler/82243',
    'http://www.transfermarkt.de/henrikh-mkhitaryan/profil/spieler/55735',
    'http://www.transfermarkt.de/shinji-kagawa/profil/spieler/81785',
    'http://www.transfermarkt.de/adnan-januzaj/profil/spieler/177847',
    'http://www.transfermarkt.de/marco-reus/profil/spieler/35207',
    'http://www.transfermarkt.de/jonas-hofmann/profil/spieler/7161',
    'http://www.transfermarkt.de/pierre-emerick-aubameyang/profil/spieler/58864',
    'http://www.transfermarkt.de/adrian-ramos/profil/spieler/73782',
    'http://www.transfermarkt.de/marvin-ducksch/profil/spieler/125103',
]

for player in players:
    crawly.savePlayerData(player)

print('--- %s seconds for %s players ---' % (round((time.time() - start_time), 2), len(players)))

