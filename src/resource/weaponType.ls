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
    ["sword"	"刀"			19 30 140 1560 75 65 12072 1715 1585]
    ["lance"	"槍"			23 30 200 1140 51 48  8820 1267 1192]
    ["hammer"	"槌"			27 30 100 1680 90 66 15540 2194 1742]
    ["shield"	"盾"			24 30  90 1950 61 110 17550 1501 2070]
    ["fist"		"拳"			32 19  90 1900 48 40 16900 1168 1240]

    ["kunai"	"投剣"		24 22 220 1200 60 42  9601 1020 1049]

    ["bow"		"弓"			19 18 280  960 50 39  7432 1234  959]
    ["xbow"		"石弓"		24 24 260 1340 85 55 10500 1909 1375]
    ["arqu"		"鉄砲"		29 27 340  840 90 36  6505 2226  892]
    ["cannon"	"大砲"		42 45 340  870 69 39  6734 1701  959]

    ["dance"	"歌舞"		62 60 300  900 41 37  6972 1037  933]
    ["spell"	"法術"		42 30 240  960 48 34  7432 1192  858]
    ["bell"		"鈴"		 156  1 320 1000 45 36  8000 1197  932]
    ["staff"	"杖"			37 30 240  850 90 34  6350 2194  858]
    ["onusa"	"祓串"		32 30 260  930 40 35  7202 1000  883]
    ["book"   "本"		   0  0 260  900 50 37  6972 1234  901]
  ]
}
module.exports = weaponType
