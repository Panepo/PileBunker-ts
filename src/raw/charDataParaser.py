import codecs

fileData = './src/raw/charData.txt'
fileDataLs = './src/raw/chars.ls'

with codecs.open(fileData,'r',encoding='utf8') as f:
  data = f.read()

front = '''# ============================================================================
# Column settings
# ============================================================================
# name:		name of this character
# class:	class of this character
# rarity:	rarity of this character
# plain:	plain type of this character
# hpF:		HP increase factor
# atF:		ATK increase factor
# dfF:		DEF increase factor
# totF:		total increase factor
# ============================================================================

char = {
  slotChar: <[name weapon rarity plain hpF atF dfF totF]>
  data:[\n'''

back = '''    ]
}
module.exports = char'''

with codecs.open(fileDataLs,'w',encoding='utf8') as f:
  f.write(front)

  for line in data.splitlines():
    line = line.strip()
    f.write("    <[" + line + "]>\n")

  f.write(back)
  print("chars.ls generated complete!")
