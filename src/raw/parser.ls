require! {
  'fs': fs
  './weapons.ls': weapons
  './weaponType.ls': weaponType
  './chars.ls': chars
}

# ===============================================================================
# PARSE WEAPONS DATA
# ===============================================================================
outWeapon = []
for weapon, i in weapons.data
  outWeapon[i] = {}
  for slotValue, j in weapons.slotWeapon
    if slotValue !== 'X'
      outWeapon[i][slotValue] = weapon[j]

for weapon, i in outWeapon
  weapon.id = i
  weapon.ref = 0
  weapon.refText = '+0'
  weapon.damage = 0
  weapon.frame1 = 0
  weapon.frame2 = 0
  weapon.dps = 0

outWeapon = JSON.stringify outWeapon
console.log 'weapons.json arrange complete!'
fs.writeFileSync './src/raw/weapons.json', outWeapon

# ===============================================================================
# PARSE WEAPON TYPES DATA
# ===============================================================================
outType = []
for type, i in weaponType.data
  outType[i] = {}
  for slotValue, j in weaponType.slotType
    if slotValue !== 'X'
      outType[i][slotValue] = type[j]

outType = JSON.stringify outType
console.log 'weaponTypes.json arrange complete!'
fs.writeFileSync './src/raw/weaponTypes.json', outType

# ===============================================================================
# PARSE CHARACTER DATA
# ===============================================================================
outChar = []
for char, i in chars.data
  outChar[i] = {}
  for slotValue, j in chars.slotChar
    if slotValue !== 'X'
      outChar[i][slotValue] = char[j]

for char, i in outChar
  char.id = i

outChar = JSON.stringify outChar
console.log 'chars.json arrange complete!'
fs.writeFileSync './src/raw/chars.json', outChar
