# ============================================================================
# Column settings
# ============================================================================
# name:		weapon name of this class
# cname:	weapon name of this class
# frame1:	frame number of attack animation
# frame2:	frame number of rest after attack
# range:	attack range
# hp:		class HP at level 0
# atk:		class ATK at level 0
# def:		class DEF at level 0
# hpM:		class HP at level 1000
# atkM:		class ATK at level 1000
# defM:		class DEF at level 1000
# ============================================================================

weaponType = {
  slotType: <[name cname frame1 frame2 range hp atk def hpM atkM defM]>
  data:[
    ["sword"	"刀"			19 30 140 1560 75 65 2874 280 255]
    ["lance"	"槍"			23 30 200 1140 51 48 2100 203 191]
    ["hammer"	"槌"			27 30 100 1680 90 66 3500 353 285]
    ["shield"	"盾"			24 30  90 2050 65 116 4150 250 385]
    ["fist"		"拳"			32 19  90 1900 55 40 3775 205 190]
    ["scythe"	"鎌"			32 19  90 1200 85 25 2400 325  95]

    ["kunai"	"投剣"		24 22 220 1200 60 43 2250 180 167]
    ["whip"		"鞭"			32 19  90 1350 80 60 2500 260 215]

    ["bow"		"弓"			19 18 280  960 50 39 1769 198 154]
    ["xbow"		"石弓"		24 24 260 1340 85 55 2485 313 220]
    ["arqu"		"鉄砲"		29 27 340  840 90 36 1548 357 143]
    ["cannon"	"大砲"		42 45 340  870 75 39 1603 293 154]

    ["dance"	"歌舞"		62 60 300  900 42 37 1659 166 149]
    ["spell"	"法術"		42 30 240  960 54 34 1769 212 137]
    ["bell"		"鈴"		 156  1 320 1000 52 36 1875 210 148]
    ["staff"	"杖"			37 30 240  850 90 34 1538 353 137]
    ["onusa"	"祓串"		32 30 260  930 40 35 1714 160 141]
    ["book"   "本"		   0  0 260  900 50 37 1659 198 145]
  ]
}
module.exports = weaponType
