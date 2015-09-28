# Add all players we want to have
# Data will be saved in /data/playername.pd
# Start with python3 start.py, else errors (python2)

# USE ./TOOLS/LINKEXTRACTOR TO COPY&PASTE WHOLE TEAMS

import crawly
import time

start_time = time.time()

players = [
    # FC Bayern München
    'http://www.transfermarkt.de/manuel-neuer/profil/spieler/17259', 'http://www.transfermarkt.de/sven-ulreich/profil/spieler/40680', 'http://www.transfermarkt.de/tom-starke/profil/spieler/80', 'http://www.transfermarkt.de/ivan-lucic/profil/spieler/164145', 'http://www.transfermarkt.de/jerome-boateng/profil/spieler/26485', 'http://www.transfermarkt.de/medhi-benatia/profil/spieler/45124', 'http://www.transfermarkt.de/holger-badstuber/profil/spieler/54659', 'http://www.transfermarkt.de/jan-kirchhoff/profil/spieler/49734', 'http://www.transfermarkt.de/david-alaba/profil/spieler/59016', 'http://www.transfermarkt.de/juan-bernat/profil/spieler/126719', 'http://www.transfermarkt.de/philipp-lahm/profil/spieler/2219', 'http://www.transfermarkt.de/rafinha/profil/spieler/33947', 'http://www.transfermarkt.de/javi-martinez/profil/spieler/44017', 'http://www.transfermarkt.de/sebastian-rode/profil/spieler/44466', 'http://www.transfermarkt.de/xabi-alonso/profil/spieler/7476', 'http://www.transfermarkt.de/joshua-kimmich/profil/spieler/161056', 'http://www.transfermarkt.de/arturo-vidal/profil/spieler/37666', 'http://www.transfermarkt.de/thiago/profil/spieler/60444', 'http://www.transfermarkt.de/gianluca-gaudino/profil/spieler/195051', 'http://www.transfermarkt.de/mario-gotze/profil/spieler/74842', 'http://www.transfermarkt.de/franck-ribery/profil/spieler/22068', 'http://www.transfermarkt.de/douglas-costa/profil/spieler/75615', 'http://www.transfermarkt.de/kingsley-coman/profil/spieler/243714', 'http://www.transfermarkt.de/sinan-kurt/profil/spieler/170530', 'http://www.transfermarkt.de/julian-green/profil/spieler/161204', 'http://www.transfermarkt.de/arjen-robben/profil/spieler/4360', 'http://www.transfermarkt.de/thomas-muller/profil/spieler/58358', 'http://www.transfermarkt.de/robert-lewandowski/profil/spieler/38253',

    # Borussia Dortmund
    'http://www.transfermarkt.de/roman-burki/profil/spieler/59027', 'http://www.transfermarkt.de/roman-weidenfeller/profil/spieler/26', 'http://www.transfermarkt.de/hendrik-bonmann/profil/spieler/104220', 'http://www.transfermarkt.de/mats-hummels/profil/spieler/39728', 'http://www.transfermarkt.de/sokratis/profil/spieler/34322', 'http://www.transfermarkt.de/neven-subotic/profil/spieler/40995', 'http://www.transfermarkt.de/matthias-ginter/profil/spieler/124502', 'http://www.transfermarkt.de/marcel-schmelzer/profil/spieler/35208', 'http://www.transfermarkt.de/joo-ho-park/profil/spieler/111900', 'http://www.transfermarkt.de/lukasz-piszczek/profil/spieler/25727', 'http://www.transfermarkt.de/erik-durm/profil/spieler/93922', 'http://www.transfermarkt.de/pascal-stenzel/profil/spieler/195246', 'http://www.transfermarkt.de/sven-bender/profil/spieler/29993', 'http://www.transfermarkt.de/julian-weigl/profil/spieler/196792', 'http://www.transfermarkt.de/ilkay-gundogan/profil/spieler/53622', 'http://www.transfermarkt.de/gonzalo-castro/profil/spieler/28947', 'http://www.transfermarkt.de/nuri-sahin/profil/spieler/31095', 'http://www.transfermarkt.de/moritz-leitner/profil/spieler/82243', 'http://www.transfermarkt.de/henrikh-mkhitaryan/profil/spieler/55735', 'http://www.transfermarkt.de/shinji-kagawa/profil/spieler/81785', 'http://www.transfermarkt.de/adnan-januzaj/profil/spieler/177847', 'http://www.transfermarkt.de/marco-reus/profil/spieler/35207', 'http://www.transfermarkt.de/jonas-hofmann/profil/spieler/7161', 'http://www.transfermarkt.de/pierre-emerick-aubameyang/profil/spieler/58864', 'http://www.transfermarkt.de/adrian-ramos/profil/spieler/73782', 'http://www.transfermarkt.de/marvin-ducksch/profil/spieler/125103',

    # Schalke
    'http://www.transfermarkt.de/ralf-fahrmann/profil/spieler/39015', 'http://www.transfermarkt.de/fabian-giefer/profil/spieler/53408', 'http://www.transfermarkt.de/michael-gspurning/profil/spieler/17029', 'http://www.transfermarkt.de/alexander-nubel/profil/spieler/195778', 'http://www.transfermarkt.de/benedikt-howedes/profil/spieler/39020', 'http://www.transfermarkt.de/matija-nastasic/profil/spieler/143559', 'http://www.transfermarkt.de/joel-matip/profil/spieler/82105', 'http://www.transfermarkt.de/kaan-ayhan/profil/spieler/119031', 'http://www.transfermarkt.de/felipe-santana/profil/spieler/54312', 'http://www.transfermarkt.de/marvin-friedrich/profil/spieler/196231', 'http://www.transfermarkt.de/thilo-kehrer/profil/spieler/228948', 'http://www.transfermarkt.de/sead-kolasinac/profil/spieler/94005', 'http://www.transfermarkt.de/dennis-aogo/profil/spieler/19354', 'http://www.transfermarkt.de/atsuto-uchida/profil/spieler/27800', 'http://www.transfermarkt.de/junior-caicara/profil/spieler/112062', 'http://www.transfermarkt.de/sascha-riether/profil/spieler/1662', 'http://www.transfermarkt.de/johannes-geis/profil/spieler/89650', 'http://www.transfermarkt.de/roman-neustadter/profil/spieler/40478', 'http://www.transfermarkt.de/marco-hoger/profil/spieler/55510', 'http://www.transfermarkt.de/leon-goretzka/profil/spieler/153084', 'http://www.transfermarkt.de/kevin-prince-boateng/profil/spieler/16922', 'http://www.transfermarkt.de/max-meyer/profil/spieler/146164', 'http://www.transfermarkt.de/leroy-sane/profil/spieler/192565', 'http://www.transfermarkt.de/sidney-sam/profil/spieler/39102', 'http://www.transfermarkt.de/franco-di-santo/profil/spieler/59783', 'http://www.transfermarkt.de/klaas-jan-huntelaar/profil/spieler/4357', 'http://www.transfermarkt.de/felix-platte/profil/spieler/195782', 'http://www.transfermarkt.de/julian-draxler/profil/spieler/85148', 'http://www.transfermarkt.de/filip-kostic/profil/spieler/161011',

    # Wolfsburg
    'http://www.transfermarkt.de/diego-benaglio/profil/spieler/1667', 'http://www.transfermarkt.de/koen-casteels/profil/spieler/108880', 'http://www.transfermarkt.de/max-grun/profil/spieler/32779', 'http://www.transfermarkt.de/robin-knoche/profil/spieler/94201', 'http://www.transfermarkt.de/dante/profil/spieler/16136', 'http://www.transfermarkt.de/naldo/profil/spieler/32213', 'http://www.transfermarkt.de/timm-klose/profil/spieler/65255', 'http://www.transfermarkt.de/felipe/profil/spieler/45448', 'http://www.transfermarkt.de/moritz-sprenger/profil/spieler/158055', 'http://www.transfermarkt.de/ricardo-rodriguez/profil/spieler/86784', 'http://www.transfermarkt.de/marcel-schafer/profil/spieler/8317', 'http://www.transfermarkt.de/vieirinha/profil/spieler/35247', 'http://www.transfermarkt.de/sebastian-jung/profil/spieler/49730', 'http://www.transfermarkt.de/christian-trasch/profil/spieler/38440', 'http://www.transfermarkt.de/luiz-gustavo/profil/spieler/10471', 'http://www.transfermarkt.de/josuha-guilavogui/profil/spieler/93704', 'http://www.transfermarkt.de/carlos-ascues/profil/spieler/189283', 'http://www.transfermarkt.de/paul-seguin/profil/spieler/183780', 'http://www.transfermarkt.de/maximilian-arnold/profil/spieler/117674', 'http://www.transfermarkt.de/julian-draxler/profil/spieler/85148', 'http://www.transfermarkt.de/daniel-caligiuri/profil/spieler/38410', 'http://www.transfermarkt.de/francisco-rodriguez/profil/spieler/227967', 'http://www.transfermarkt.de/ismail-azzaoui/profil/spieler/289507', 'http://www.transfermarkt.de/andre-schurrle/profil/spieler/58205', 'http://www.transfermarkt.de/max-kruse/profil/spieler/36182', 'http://www.transfermarkt.de/bas-dost/profil/spieler/56331', 'http://www.transfermarkt.de/nicklas-bendtner/profil/spieler/34557', 'http://www.transfermarkt.de/oskar-zawada/profil/spieler/232015', 'http://www.transfermarkt.de/sebastian-stolze/profil/spieler/157927', 'http://www.transfermarkt.de/ivan-perisic/profil/spieler/42460', 'http://www.transfermarkt.de/breel-embolo/profil/spieler/237662', 'http://www.transfermarkt.de/daniel-didavi/profil/spieler/57995', 'http://www.transfermarkt.de/dennis-praet/profil/spieler/129588', 'http://www.transfermarkt.de/mario-gotze/profil/spieler/74842', 'http://www.transfermarkt.de/filip-kostic/profil/spieler/161011',

    # 1. FC Koeln
    'http://www.transfermarkt.de/timo-horn/profil/spieler/84938', 'http://www.transfermarkt.de/thomas-kessler/profil/spieler/5072', 'http://www.transfermarkt.de/daniel-mesenholer/profil/spieler/150080', 'http://www.transfermarkt.de/dominique-heintz/profil/spieler/110036', 'http://www.transfermarkt.de/frederik-sorensen/profil/spieler/91716', 'http://www.transfermarkt.de/dominic-maroh/profil/spieler/41023', 'http://www.transfermarkt.de/mergim-mavraj/profil/spieler/38267', 'http://www.transfermarkt.de/jonas-hector/profil/spieler/108537', 'http://www.transfermarkt.de/pawel-olkowski/profil/spieler/117469', 'http://www.transfermarkt.de/lukas-klunter/profil/spieler/282577', 'http://www.transfermarkt.de/kevin-vogt/profil/spieler/84435', 'http://www.transfermarkt.de/matthias-lehmann/profil/spieler/1126', 'http://www.transfermarkt.de/yannick-gerhardt/profil/spieler/119277', 'http://www.transfermarkt.de/milos-jojic/profil/spieler/160285', 'http://www.transfermarkt.de/leonardo-bittencourt/profil/spieler/93844', 'http://www.transfermarkt.de/kazuki-nagasawa/profil/spieler/263685', 'http://www.transfermarkt.de/dusan-svento/profil/spieler/34543', 'http://www.transfermarkt.de/marcel-risse/profil/spieler/51176', 'http://www.transfermarkt.de/bard-finne/profil/spieler/202925', 'http://www.transfermarkt.de/anthony-modeste/profil/spieler/50512', 'http://www.transfermarkt.de/yuya-osako/profil/spieler/108650', 'http://www.transfermarkt.de/simon-zoller/profil/spieler/79967', 'http://www.transfermarkt.de/philipp-hosiner/profil/spieler/37788',

    # Ingolstadt
    'http://www.transfermarkt.de/orjan-nyland/profil/spieler/73517', 'http://www.transfermarkt.de/ramazan-ozcan/profil/spieler/16498', 'http://www.transfermarkt.de/christian-ortag/profil/spieler/196826', 'http://www.transfermarkt.de/benjamin-hubner/profil/spieler/52348', 'http://www.transfermarkt.de/romain-bregerie/profil/spieler/43257', 'http://www.transfermarkt.de/marvin-matip/profil/spieler/17025', 'http://www.transfermarkt.de/michael-zant/profil/spieler/198014', 'http://www.transfermarkt.de/danilo-soares/profil/spieler/154396', 'http://www.transfermarkt.de/markus-suttner/profil/spieler/31514', 'http://www.transfermarkt.de/danny-da-costa/profil/spieler/85906', 'http://www.transfermarkt.de/tobias-levels/profil/spieler/31216', 'http://www.transfermarkt.de/konstantin-engel/profil/spieler/42318', 'http://www.transfermarkt.de/roger/profil/spieler/56435', 'http://www.transfermarkt.de/max-christiansen/profil/spieler/192300', 'http://www.transfermarkt.de/robert-bauer/profil/spieler/179634', 'http://www.transfermarkt.de/almog-cohen/profil/spieler/56711', 'http://www.transfermarkt.de/pascal-gross/profil/spieler/82873', 'http://www.transfermarkt.de/alfredo-morales/profil/spieler/58500', 'http://www.transfermarkt.de/stefan-wannenwetsch/profil/spieler/94598', 'http://www.transfermarkt.de/maurice-multhaup/profil/spieler/187496', 'http://www.transfermarkt.de/thomas-pledl/profil/spieler/131561', 'http://www.transfermarkt.de/mathew-leckie/profil/spieler/126214', 'http://www.transfermarkt.de/stefan-lex/profil/spieler/116792', 'http://www.transfermarkt.de/elias-kachunga/profil/spieler/49501', 'http://www.transfermarkt.de/lukas-hinterseer/profil/spieler/59054', 'http://www.transfermarkt.de/moritz-hartmann/profil/spieler/42952', 'http://www.transfermarkt.de/tomas-pekhart/profil/spieler/38746',

    # Hertha
    'http://www.transfermarkt.de/thomas-kraft/profil/spieler/39732', 'http://www.transfermarkt.de/rune-jarstein/profil/spieler/24112', 'http://www.transfermarkt.de/marius-gersbeck/profil/spieler/196382', 'http://www.transfermarkt.de/nils-korber/profil/spieler/241974', 'http://www.transfermarkt.de/john-anthony-brooks/profil/spieler/124732', 'http://www.transfermarkt.de/fabian-lustenberger/profil/spieler/42203', 'http://www.transfermarkt.de/sebastian-langkamp/profil/spieler/39094', 'http://www.transfermarkt.de/marvin-plattenhardt/profil/spieler/89592', 'http://www.transfermarkt.de/peter-pekarik/profil/spieler/51100', 'http://www.transfermarkt.de/niklas-stark/profil/spieler/162434', 'http://www.transfermarkt.de/florian-kohls/profil/spieler/172168', 'http://www.transfermarkt.de/vladimir-darida/profil/spieler/179643', 'http://www.transfermarkt.de/per-ciljan-skjelbred/profil/spieler/18918', 'http://www.transfermarkt.de/tolga-cigerci/profil/spieler/94199', 'http://www.transfermarkt.de/jens-hegeler/profil/spieler/51168', 'http://www.transfermarkt.de/valentin-stocker/profil/spieler/45178', 'http://www.transfermarkt.de/alexander-baumjohann/profil/spieler/16474', 'http://www.transfermarkt.de/ronny/profil/spieler/43847', 'http://www.transfermarkt.de/anis-ben-hatira/profil/spieler/35872', 'http://www.transfermarkt.de/mitchell-weiser/profil/spieler/119211', 'http://www.transfermarkt.de/genki-haraguchi/profil/spieler/79377', 'http://www.transfermarkt.de/roy-beerens/profil/spieler/25427', 'http://www.transfermarkt.de/salomon-kalou/profil/spieler/7971', 'http://www.transfermarkt.de/julian-schieber/profil/spieler/58124', 'http://www.transfermarkt.de/vedad-ibisevic/profil/spieler/21175', 'http://www.transfermarkt.de/sami-allagui/profil/spieler/37013', 'http://www.transfermarkt.de/nico-beyer/profil/spieler/241970', 'http://www.transfermarkt.de/adrian-ramos/profil/spieler/73782', 'http://www.transfermarkt.de/simon-terodde/profil/spieler/36284',

    # HSV
    'http://www.transfermarkt.de/rene-adler/profil/spieler/1784', 'http://www.transfermarkt.de/jaroslav-drobny/profil/spieler/12864', 'http://www.transfermarkt.de/andreas-hirzel/profil/spieler/167189', 'http://www.transfermarkt.de/johan-djourou/profil/spieler/34561', 'http://www.transfermarkt.de/cleber-reis/profil/spieler/226009', 'http://www.transfermarkt.de/emir-spahic/profil/spieler/25812', 'http://www.transfermarkt.de/matthias-ostrzolek/profil/spieler/53669', 'http://www.transfermarkt.de/ronny-marcos/profil/spieler/159037', 'http://www.transfermarkt.de/dennis-diekmeier/profil/spieler/42044', 'http://www.transfermarkt.de/gotoku-sakai/profil/spieler/103310', 'http://www.transfermarkt.de/ashton-gotz/profil/spieler/124083', 'http://www.transfermarkt.de/gojko-kacar/profil/spieler/28683', 'http://www.transfermarkt.de/gideon-jung/profil/spieler/247661', 'http://www.transfermarkt.de/finn-porath/profil/spieler/241307', 'http://www.transfermarkt.de/albin-ekdal/profil/spieler/49275', 'http://www.transfermarkt.de/marcelo-diaz/profil/spieler/83895', 'http://www.transfermarkt.de/lewis-holtby/profil/spieler/55508', 'http://www.transfermarkt.de/aaron-hunt/profil/spieler/4687', 'http://www.transfermarkt.de/zoltan-stieber/profil/spieler/61591', 'http://www.transfermarkt.de/ivo-ilicevic/profil/spieler/30308', 'http://www.transfermarkt.de/nicolai-muller/profil/spieler/39426', 'http://www.transfermarkt.de/michael-gregoritsch/profil/spieler/120205', 'http://www.transfermarkt.de/philipp-muller/profil/spieler/196570', 'http://www.transfermarkt.de/sven-schipplock/profil/spieler/52530', 'http://www.transfermarkt.de/artjoms-rudnevs/profil/spieler/103547', 'http://www.transfermarkt.de/ivica-olic/profil/spieler/7427', 'http://www.transfermarkt.de/batuhan-altintas/profil/spieler/216597', 'http://www.transfermarkt.de/louis-schaub/profil/spieler/147485', 'http://www.transfermarkt.de/jonathan-de-guzman/profil/spieler/31067', 'http://www.transfermarkt.de/filip-kostic/profil/spieler/161011', 'http://www.transfermarkt.de/shkelzen-gashi/profil/spieler/32704',

    # Mainz 05
    'http://www.transfermarkt.de/loris-karius/profil/spieler/85864', 'http://www.transfermarkt.de/gianluca-curci/profil/spieler/24001', 'http://www.transfermarkt.de/jannik-huth/profil/spieler/160954', 'http://www.transfermarkt.de/stefan-bell/profil/spieler/82350', 'http://www.transfermarkt.de/niko-bungert/profil/spieler/30070', 'http://www.transfermarkt.de/henrique-sereno/profil/spieler/48931', 'http://www.transfermarkt.de/pierre-bengtsson/profil/spieler/50577', 'http://www.transfermarkt.de/gaetan-bussmann/profil/spieler/127177', 'http://www.transfermarkt.de/daniel-brosinski/profil/spieler/43984', 'http://www.transfermarkt.de/gonzalo-jara/profil/spieler/40429', 'http://www.transfermarkt.de/leon-balogun/profil/spieler/56100', 'http://www.transfermarkt.de/niki-zimling/profil/spieler/15045', 'http://www.transfermarkt.de/suat-serdar/profil/spieler/261905', 'http://www.transfermarkt.de/fabian-frei/profil/spieler/52595', 'http://www.transfermarkt.de/christoph-moritz/profil/spieler/55519', 'http://www.transfermarkt.de/danny-latza/profil/spieler/39025', 'http://www.transfermarkt.de/elkin-soto/profil/spieler/40937', 'http://www.transfermarkt.de/yunus-malli/profil/spieler/85352', 'http://www.transfermarkt.de/patrick-pflucke/profil/spieler/159522', 'http://www.transfermarkt.de/philipp-klement/profil/spieler/60394', 'http://www.transfermarkt.de/pablo-de-blasis/profil/spieler/75446', 'http://www.transfermarkt.de/christian-clemens/profil/spieler/44713', 'http://www.transfermarkt.de/todor-nedelev/profil/spieler/217593', 'http://www.transfermarkt.de/devante-parker/profil/spieler/196836', 'http://www.transfermarkt.de/yoshinori-muto/profil/spieler/230541', 'http://www.transfermarkt.de/jairo-samperio/profil/spieler/171167', 'http://www.transfermarkt.de/maximilian-beister/profil/spieler/58379', 'http://www.transfermarkt.de/jhon-cordoba/profil/spieler/185245', 'http://www.transfermarkt.de/ola-toivonen/profil/spieler/36500',

    # Darmstadt 98
    'http://www.transfermarkt.de/christian-mathenia/profil/spieler/82361', 'http://www.transfermarkt.de/lukasz-zaluska/profil/spieler/32273', 'http://www.transfermarkt.de/patrick-platins/profil/spieler/1743', 'http://www.transfermarkt.de/luca-caldirola/profil/spieler/88680', 'http://www.transfermarkt.de/aytac-sulu/profil/spieler/11765', 'http://www.transfermarkt.de/benjamin-gorka/profil/spieler/31123', 'http://www.transfermarkt.de/noel-wembacher/profil/spieler/335633', 'http://www.transfermarkt.de/junior-diaz/profil/spieler/35383', 'http://www.transfermarkt.de/fabian-holland/profil/spieler/54846', 'http://www.transfermarkt.de/michael-stegmayer/profil/spieler/16628', 'http://www.transfermarkt.de/gyorgy-garics/profil/spieler/2926', 'http://www.transfermarkt.de/sandro-sirigu/profil/spieler/40456', 'http://www.transfermarkt.de/florian-jungwirth/profil/spieler/33078', 'http://www.transfermarkt.de/peter-niemeyer/profil/spieler/4691', 'http://www.transfermarkt.de/jan-finger/profil/spieler/335635', 'http://www.transfermarkt.de/mario-vrancic/profil/spieler/39372', 'http://www.transfermarkt.de/jerome-gondorf/profil/spieler/77108', 'http://www.transfermarkt.de/yannick-stark/profil/spieler/49737', 'http://www.transfermarkt.de/tobias-kempe/profil/spieler/42072', 'http://www.transfermarkt.de/milan-ivana/profil/spieler/21039', 'http://www.transfermarkt.de/nick-volk/profil/spieler/335646', 'http://www.transfermarkt.de/konstantin-rausch/profil/spieler/45668', 'http://www.transfermarkt.de/ali-kazimi/profil/spieler/335636', 'http://www.transfermarkt.de/marcel-heller/profil/spieler/32207', 'http://www.transfermarkt.de/jan-rosenthal/profil/spieler/31173', 'http://www.transfermarkt.de/marco-sailer/profil/spieler/18277', 'http://www.transfermarkt.de/dominik-stroh-engel/profil/spieler/19736', 'http://www.transfermarkt.de/sandro-wagner/profil/spieler/39743', 'http://www.transfermarkt.de/alexander-madlung/profil/spieler/2767',

    # Leverkusen
    'http://www.transfermarkt.de/bernd-leno/profil/spieler/72476', 'http://www.transfermarkt.de/dario-kresic/profil/spieler/14219', 'http://www.transfermarkt.de/david-yelldell/profil/spieler/4746', 'http://www.transfermarkt.de/omer-toprak/profil/spieler/43512', 'http://www.transfermarkt.de/tin-jedvaj/profil/spieler/206386', 'http://www.transfermarkt.de/jonathan-tah/profil/spieler/196357', 'http://www.transfermarkt.de/lukas-boeder/profil/spieler/227078', 'http://www.transfermarkt.de/wendell/profil/spieler/228433', 'http://www.transfermarkt.de/sebastian-boenisch/profil/spieler/36914', 'http://www.transfermarkt.de/roberto-hilbert/profil/spieler/3256', 'http://www.transfermarkt.de/giulio-donati/profil/spieler/88684', 'http://www.transfermarkt.de/robin-becker/profil/spieler/237444', 'http://www.transfermarkt.de/lars-bender/profil/spieler/30059', 'http://www.transfermarkt.de/christoph-kramer/profil/spieler/82097', 'http://www.transfermarkt.de/andre-ramalho/profil/spieler/175792', 'http://www.transfermarkt.de/marlon-frey/profil/spieler/182752', 'http://www.transfermarkt.de/charles-aranguiz/profil/spieler/89701', 'http://www.transfermarkt.de/hakan-calhanoglu/profil/spieler/126414', 'http://www.transfermarkt.de/vladlen-yurchenko/profil/spieler/157373', 'http://www.transfermarkt.de/benjamin-henrichs/profil/spieler/202591', 'http://www.transfermarkt.de/julian-brandt/profil/spieler/187492', 'http://www.transfermarkt.de/karim-bellarabi/profil/spieler/61087', 'http://www.transfermarkt.de/kevin-kampl/profil/spieler/53418', 'http://www.transfermarkt.de/admir-mehmedi/profil/spieler/66058', 'http://www.transfermarkt.de/seung-woo-ryu/profil/spieler/261406', 'http://www.transfermarkt.de/chicharito/profil/spieler/50935', 'http://www.transfermarkt.de/stefan-kiessling/profil/spieler/6237', 'http://www.transfermarkt.de/timo-werner/profil/spieler/170527', 'http://www.transfermarkt.de/gonzalo-castro/profil/spieler/28947', 'http://www.transfermarkt.de/max-meyer/profil/spieler/146164',

    # Eintracht Frankfurt
    'http://www.transfermarkt.de/heinz-lindner/profil/spieler/59082', 'http://www.transfermarkt.de/lukas-hradecky/profil/spieler/48015', 'http://www.transfermarkt.de/emil-balayev/profil/spieler/236366', 'http://www.transfermarkt.de/yannick-zummack/profil/spieler/215784', 'http://www.transfermarkt.de/carlos-zambrano/profil/spieler/53533', 'http://www.transfermarkt.de/marco-russ/profil/spieler/16520', 'http://www.transfermarkt.de/david-abraham/profil/spieler/58178', 'http://www.transfermarkt.de/bamba-anderson/profil/spieler/78553', 'http://www.transfermarkt.de/david-kinsombi/profil/spieler/196834', 'http://www.transfermarkt.de/bastian-oczipka/profil/spieler/53437', 'http://www.transfermarkt.de/constant-djakpa/profil/spieler/41866', 'http://www.transfermarkt.de/timothy-chandler/profil/spieler/49723', 'http://www.transfermarkt.de/aleksandar-ignjovski/profil/spieler/74295', 'http://www.transfermarkt.de/stefan-reinartz/profil/spieler/43274', 'http://www.transfermarkt.de/makoto-hasebe/profil/spieler/39259', 'http://www.transfermarkt.de/slobodan-medojevic/profil/spieler/48164', 'http://www.transfermarkt.de/johannes-flum/profil/spieler/38415', 'http://www.transfermarkt.de/marc-stendera/profil/spieler/160943', 'http://www.transfermarkt.de/sonny-kittel/profil/spieler/78950', 'http://www.transfermarkt.de/joel-gerezgiher/profil/spieler/196770', 'http://www.transfermarkt.de/mijat-gacinovic/profil/spieler/215864', 'http://www.transfermarkt.de/stefan-aigner/profil/spieler/35183', 'http://www.transfermarkt.de/vaclav-kadlec/profil/spieler/91423', 'http://www.transfermarkt.de/alexander-meier/profil/spieler/1565', 'http://www.transfermarkt.de/haris-seferovic/profil/spieler/109256', 'http://www.transfermarkt.de/luc-castaignos/profil/spieler/91915', 'http://www.transfermarkt.de/luca-waldschmidt/profil/spieler/196095', 'http://www.transfermarkt.de/enis-bunjaki/profil/spieler/261943', 'http://www.transfermarkt.de/sidney-sam/profil/spieler/39102', 'http://www.transfermarkt.de/sebastian-jung/profil/spieler/49730',

    # Werder Bremen
    'http://www.transfermarkt.de/felix-wiedwald/profil/spieler/44594', 'http://www.transfermarkt.de/raphael-wolf/profil/spieler/39306', 'http://www.transfermarkt.de/michael-zetterer/profil/spieler/196813', 'http://www.transfermarkt.de/jannik-vestergaard/profil/spieler/99331', 'http://www.transfermarkt.de/alejandro-galvez/profil/spieler/128488', 'http://www.transfermarkt.de/assani-lukimya/profil/spieler/32618', 'http://www.transfermarkt.de/mateo-pavlovic/profil/spieler/69436', 'http://www.transfermarkt.de/oliver-husing/profil/spieler/109436', 'http://www.transfermarkt.de/santiago-garcia/profil/spieler/90489', 'http://www.transfermarkt.de/janek-sternberg/profil/spieler/89542', 'http://www.transfermarkt.de/marnon-busch/profil/spieler/117478', 'http://www.transfermarkt.de/luca-zander/profil/spieler/139278', 'http://www.transfermarkt.de/felix-kroos/profil/spieler/31910', 'http://www.transfermarkt.de/philipp-bargfrede/profil/spieler/42033', 'http://www.transfermarkt.de/lukas-frode/profil/spieler/153628', 'http://www.transfermarkt.de/julian-von-haacke/profil/spieler/117484', 'http://www.transfermarkt.de/clemens-fritz/profil/spieler/1277', 'http://www.transfermarkt.de/zlatko-junuzovic/profil/spieler/31007', 'http://www.transfermarkt.de/ulisses-garcia/profil/spieler/192616', 'http://www.transfermarkt.de/levin-oztunali/profil/spieler/168543', 'http://www.transfermarkt.de/fin-bartels/profil/spieler/36207', 'http://www.transfermarkt.de/levent-aycicek/profil/spieler/117476', 'http://www.transfermarkt.de/ozkan-yildirim/profil/spieler/83256', 'http://www.transfermarkt.de/maximilian-eggestein/profil/spieler/190284', 'http://www.transfermarkt.de/florian-grillitsch/profil/spieler/195736', 'http://www.transfermarkt.de/anthony-ujah/profil/spieler/142281', 'http://www.transfermarkt.de/aron-johannsson/profil/spieler/119169', 'http://www.transfermarkt.de/claudio-pizarro/profil/spieler/532', 'http://www.transfermarkt.de/melvyn-lorenzen/profil/spieler/143121', 'http://www.transfermarkt.de/marius-wolf/profil/spieler/193900',

    # FC Augsburg
    'http://www.transfermarkt.de/marwin-hitz/profil/spieler/59238', 'http://www.transfermarkt.de/alexander-manninger/profil/spieler/5278', 'http://www.transfermarkt.de/ioannis-gelios/profil/spieler/156676', 'http://www.transfermarkt.de/yannik-oettl/profil/spieler/265398', 'http://www.transfermarkt.de/ragnar-klavan/profil/spieler/26669', 'http://www.transfermarkt.de/jeong-ho-hong/profil/spieler/126638', 'http://www.transfermarkt.de/christoph-janker/profil/spieler/14977', 'http://www.transfermarkt.de/tim-rieder/profil/spieler/111277', 'http://www.transfermarkt.de/philipp-max/profil/spieler/111275', 'http://www.transfermarkt.de/daniel-opare/profil/spieler/65781', 'http://www.transfermarkt.de/paul-verhaegh/profil/spieler/18021', 'http://www.transfermarkt.de/raphael-framberger/profil/spieler/146163', 'http://www.transfermarkt.de/daniel-baier/profil/spieler/4018', 'http://www.transfermarkt.de/marco-schuster/profil/spieler/168186', 'http://www.transfermarkt.de/maik-uhde/profil/spieler/156781', 'http://www.transfermarkt.de/dominik-kohr/profil/spieler/118847', 'http://www.transfermarkt.de/markus-feulner/profil/spieler/1986', 'http://www.transfermarkt.de/jan-moravek/profil/spieler/63022', 'http://www.transfermarkt.de/max-reinthaler/profil/spieler/202838', 'http://www.transfermarkt.de/ja-cheol-koo/profil/spieler/91841', 'http://www.transfermarkt.de/halil-altintop/profil/spieler/1791', 'http://www.transfermarkt.de/piotr-trochowski/profil/spieler/2623', 'http://www.transfermarkt.de/tobias-werner/profil/spieler/26878', 'http://www.transfermarkt.de/arif-ekin/profil/spieler/156730', 'http://www.transfermarkt.de/caiuby/profil/spieler/54137', 'http://www.transfermarkt.de/alexander-esswein/profil/spieler/45662', 'http://www.transfermarkt.de/raul-bobadilla/profil/spieler/51356', 'http://www.transfermarkt.de/tim-matavz/profil/spieler/50303', 'http://www.transfermarkt.de/shawn-parker/profil/spieler/89659', 'http://www.transfermarkt.de/dong-won-ji/profil/spieler/164265', 'http://www.transfermarkt.de/sascha-molders/profil/spieler/17689', 'http://www.transfermarkt.de/bastian-kurz/profil/spieler/238541', 'http://www.transfermarkt.de/moritz-leitner/profil/spieler/82243',

    # VfB
    'http://www.transfermarkt.de/mitchell-langerak/profil/spieler/49347', 'http://www.transfermarkt.de/przemyslaw-tyton/profil/spieler/33210', 'http://www.transfermarkt.de/odisseas-vlachodimos/profil/spieler/124419', 'http://www.transfermarkt.de/benjamin-uphoff/profil/spieler/120296', 'http://www.transfermarkt.de/toni-sunjic/profil/spieler/60790', 'http://www.transfermarkt.de/timo-baumgartl/profil/spieler/187491', 'http://www.transfermarkt.de/georg-niedermeier/profil/spieler/31570', 'http://www.transfermarkt.de/adam-hlousek/profil/spieler/62800', 'http://www.transfermarkt.de/stephen-sama/profil/spieler/86204', 'http://www.transfermarkt.de/emiliano-insua/profil/spieler/45599', 'http://www.transfermarkt.de/philip-heise/profil/spieler/112617', 'http://www.transfermarkt.de/daniel-schwaab/profil/spieler/38434', 'http://www.transfermarkt.de/florian-klein/profil/spieler/20276', 'http://www.transfermarkt.de/carlos-gruezo/profil/spieler/189475', 'http://www.transfermarkt.de/serey-die/profil/spieler/77708', 'http://www.transfermarkt.de/mart-ristl/profil/spieler/170523', 'http://www.transfermarkt.de/christian-gentner/profil/spieler/19112', 'http://www.transfermarkt.de/lukas-rupp/profil/spieler/82863', 'http://www.transfermarkt.de/alexandru-maxim/profil/spieler/129513', 'http://www.transfermarkt.de/daniel-didavi/profil/spieler/57995', 'http://www.transfermarkt.de/marvin-wanitzek/profil/spieler/119581', 'http://www.transfermarkt.de/arianit-ferati/profil/spieler/247380', 'http://www.transfermarkt.de/filip-kostic/profil/spieler/161011', 'http://www.transfermarkt.de/jerome-kiesewetter/profil/spieler/94167', 'http://www.transfermarkt.de/martin-harnik/profil/spieler/31159', 'http://www.transfermarkt.de/jan-kliment/profil/spieler/218299', 'http://www.transfermarkt.de/timo-werner/profil/spieler/170527', 'http://www.transfermarkt.de/robbie-kruse/profil/spieler/51972', 'http://www.transfermarkt.de/daniel-ginczek/profil/spieler/79501',

    # Moenchengladbach
    'http://www.transfermarkt.de/yann-sommer/profil/spieler/42205', 'http://www.transfermarkt.de/tobias-sippel/profil/spieler/31653', 'http://www.transfermarkt.de/christofer-heimeroth/profil/spieler/1144', 'http://www.transfermarkt.de/alvaro-dominguez/profil/spieler/62915', 'http://www.transfermarkt.de/tony-jantschke/profil/spieler/47587', 'http://www.transfermarkt.de/nico-elvedi/profil/spieler/192635', 'http://www.transfermarkt.de/andreas-christensen/profil/spieler/196948', 'http://www.transfermarkt.de/martin-stranzl/profil/spieler/568', 'http://www.transfermarkt.de/roel-brouwers/profil/spieler/4607', 'http://www.transfermarkt.de/marvin-schulz/profil/spieler/168678', 'http://www.transfermarkt.de/oscar-wendt/profil/spieler/19305', 'http://www.transfermarkt.de/nico-schulz/profil/spieler/85867', 'http://www.transfermarkt.de/julian-korb/profil/spieler/77809', 'http://www.transfermarkt.de/havard-nordtveit/profil/spieler/42234', 'http://www.transfermarkt.de/granit-xhaka/profil/spieler/111455', 'http://www.transfermarkt.de/lars-stindl/profil/spieler/48298', 'http://www.transfermarkt.de/mahmoud-dahoud/profil/spieler/191422', 'http://www.transfermarkt.de/thorgan-hazard/profil/spieler/102226', 'http://www.transfermarkt.de/fabian-johnson/profil/spieler/31041', 'http://www.transfermarkt.de/ibrahima-traore/profil/spieler/47285', 'http://www.transfermarkt.de/patrick-herrmann/profil/spieler/32711', 'http://www.transfermarkt.de/andre-hahn/profil/spieler/42783', 'http://www.transfermarkt.de/marlon-ritter/profil/spieler/151636', 'http://www.transfermarkt.de/raffael/profil/spieler/19819', 'http://www.transfermarkt.de/josip-drmic/profil/spieler/140579', 'http://www.transfermarkt.de/branimir-hrgota/profil/spieler/171209', 'http://www.transfermarkt.de/kristoffer-ajer/profil/spieler/328658',

    # Hoffenheim
    'http://www.transfermarkt.de/oliver-baumann/profil/spieler/55089', 'http://www.transfermarkt.de/jens-grahl/profil/spieler/40034', 'http://www.transfermarkt.de/alexander-stolz/profil/spieler/10329', 'http://www.transfermarkt.de/fabian-schar/profil/spieler/135343', 'http://www.transfermarkt.de/niklas-sule/profil/spieler/166601', 'http://www.transfermarkt.de/ermin-bicakcic/profil/spieler/51676', 'http://www.transfermarkt.de/tobias-strobl/profil/spieler/57845', 'http://www.transfermarkt.de/benedikt-gimber/profil/spieler/227084', 'http://www.transfermarkt.de/nicolai-rapp/profil/spieler/185427', 'http://www.transfermarkt.de/jin-su-kim/profil/spieler/132529', 'http://www.transfermarkt.de/jeremy-toljan/profil/spieler/129674', 'http://www.transfermarkt.de/pavel-kaderabek/profil/spieler/143798', 'http://www.transfermarkt.de/eugen-polanski/profil/spieler/19548', 'http://www.transfermarkt.de/pirmin-schwegler/profil/spieler/14533', 'http://www.transfermarkt.de/sebastian-rudy/profil/spieler/57051', 'http://www.transfermarkt.de/nadiem-amiri/profil/spieler/232454', 'http://www.transfermarkt.de/tarik-elyounoussi/profil/spieler/37287', 'http://www.transfermarkt.de/steven-zuber/profil/spieler/68033', 'http://www.transfermarkt.de/kai-herdling/profil/spieler/6791', 'http://www.transfermarkt.de/jonathan-schmid/profil/spieler/70285', 'http://www.transfermarkt.de/jiloan-hamad/profil/spieler/63833', 'http://www.transfermarkt.de/philipp-ochs/profil/spieler/207592', 'http://www.transfermarkt.de/eduardo-vargas/profil/spieler/89718', 'http://www.transfermarkt.de/filip-malbasic/profil/spieler/162652', 'http://www.transfermarkt.de/kevin-volland/profil/spieler/82009', 'http://www.transfermarkt.de/adam-szalai/profil/spieler/39106', 'http://www.transfermarkt.de/mark-uth/profil/spieler/112935', 'http://www.transfermarkt.de/kevin-kuranyi/profil/spieler/1331', 'http://www.transfermarkt.de/joelinton/profil/spieler/333241',

    # Hannover 96
    'http://www.transfermarkt.de/ron-robert-zieler/profil/spieler/21327', 'http://www.transfermarkt.de/philipp-tschauner/profil/spieler/21726', 'http://www.transfermarkt.de/timo-konigsmann/profil/spieler/217718', 'http://www.transfermarkt.de/samuel-radlinger/profil/spieler/77563', 'http://www.transfermarkt.de/andre-hoffmann/profil/spieler/85164', 'http://www.transfermarkt.de/marcelo/profil/spieler/52920', 'http://www.transfermarkt.de/christian-schulz/profil/spieler/1586', 'http://www.transfermarkt.de/felipe/profil/spieler/68815', 'http://www.transfermarkt.de/waldemar-anton/profil/spieler/193004', 'http://www.transfermarkt.de/miiko-albornoz/profil/spieler/75852', 'http://www.transfermarkt.de/niklas-teichgraber/profil/spieler/193051', 'http://www.transfermarkt.de/oliver-sorg/profil/spieler/55114', 'http://www.transfermarkt.de/hiroki-sakai/profil/spieler/83002', 'http://www.transfermarkt.de/vladimir-rankovic/profil/spieler/92453', 'http://www.transfermarkt.de/salif-sane/profil/spieler/126534', 'http://www.transfermarkt.de/manuel-schmiedebach/profil/spieler/41507', 'http://www.transfermarkt.de/leon-andreasen/profil/spieler/22837', 'http://www.transfermarkt.de/ceyhun-gulselam/profil/spieler/37216', 'http://www.transfermarkt.de/maurice-hirsch/profil/spieler/119555', 'http://www.transfermarkt.de/hiroshi-kiyotake/profil/spieler/86175', 'http://www.transfermarkt.de/tim-dierssen/profil/spieler/170516', 'http://www.transfermarkt.de/sebastian-ernst/profil/spieler/108198', 'http://www.transfermarkt.de/edgar-prib/profil/spieler/60028', 'http://www.transfermarkt.de/mike-steven-bahre/profil/spieler/193006', 'http://www.transfermarkt.de/felix-klaus/profil/spieler/89591', 'http://www.transfermarkt.de/allan-saint-maximin/profil/spieler/272642', 'http://www.transfermarkt.de/uffe-bech/profil/spieler/94939', 'http://www.transfermarkt.de/valmir-sulejmani/profil/spieler/193050', 'http://www.transfermarkt.de/kenan-karaman/profil/spieler/119557', 'http://www.transfermarkt.de/mevlut-erdinc/profil/spieler/38360', 'http://www.transfermarkt.de/charlison-benschop/profil/spieler/66783', 'http://www.transfermarkt.de/artur-sobiech/profil/spieler/75640'
]



class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# clear file (get rid of old data, but just ONCE, thats why we do it here and not in crawly.py, awesome idea right?)
try:
    print("Clearing file ...")
    n = "playerData"
    path = 'data/general/' + n + '.pd'
    file = open(path, 'w')
    file.write("[ ]")
    file.close()
except:
    print(bcolors.FAIL + "Clearing file " + n + " failed [Code F1]" + bcolors.ENDC)

print(bcolors.OKGREEN + "Clearing file " + n + " successful" + bcolors.ENDC)

for player in players:
    crawly.savePlayerData(player)

print('--- %s seconds for %s players ---' % (round((time.time() - start_time), 2), len(players)))
