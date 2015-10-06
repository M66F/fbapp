print("Saving to file...")
n = "öü雨雨雨雨雨"
path = 'data/' + n + '.pd'

file = open(path, 'w')
file.write("x")
file.close()