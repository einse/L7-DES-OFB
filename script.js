// http://stackoverflow.com/a/2711936 

var DMap = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 59: 59, 60: 60, 61: 61, 62: 62, 63: 63, 64: 64, 65: 65, 66: 66, 67: 67, 68: 68, 69: 69, 70: 70, 71: 71, 72: 72, 73: 73, 74: 74, 75: 75, 76: 76, 77: 77, 78: 78, 79: 79, 80: 80, 81: 81, 82: 82, 83: 83, 84: 84, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 91: 91, 92: 92, 93: 93, 94: 94, 95: 95, 96: 96, 97: 97, 98: 98, 99: 99, 100: 100, 101: 101, 102: 102, 103: 103, 104: 104, 105: 105, 106: 106, 107: 107, 108: 108, 109: 109, 110: 110, 111: 111, 112: 112, 113: 113, 114: 114, 115: 115, 116: 116, 117: 117, 118: 118, 119: 119, 120: 120, 121: 121, 122: 122, 123: 123, 124: 124, 125: 125, 126: 126, 127: 127, 1027: 129, 8225: 135, 1046: 198, 8222: 132, 1047: 199, 1168: 165, 1048: 200, 1113: 154, 1049: 201, 1045: 197, 1050: 202, 1028: 170, 160: 160, 1040: 192, 1051: 203, 164: 164, 166: 166, 167: 167, 169: 169, 171: 171, 172: 172, 173: 173, 174: 174, 1053: 205, 176: 176, 177: 177, 1114: 156, 181: 181, 182: 182, 183: 183, 8221: 148, 187: 187, 1029: 189, 1056: 208, 1057: 209, 1058: 210, 8364: 136, 1112: 188, 1115: 158, 1059: 211, 1060: 212, 1030: 178, 1061: 213, 1062: 214, 1063: 215, 1116: 157, 1064: 216, 1065: 217, 1031: 175, 1066: 218, 1067: 219, 1068: 220, 1069: 221, 1070: 222, 1032: 163, 8226: 149, 1071: 223, 1072: 224, 8482: 153, 1073: 225, 8240: 137, 1118: 162, 1074: 226, 1110: 179, 8230: 133, 1075: 227, 1033: 138, 1076: 228, 1077: 229, 8211: 150, 1078: 230, 1119: 159, 1079: 231, 1042: 194, 1080: 232, 1034: 140, 1025: 168, 1081: 233, 1082: 234, 8212: 151, 1083: 235, 1169: 180, 1084: 236, 1052: 204, 1085: 237, 1035: 142, 1086: 238, 1087: 239, 1088: 240, 1089: 241, 1090: 242, 1036: 141, 1041: 193, 1091: 243, 1092: 244, 8224: 134, 1093: 245, 8470: 185, 1094: 246, 1054: 206, 1095: 247, 1096: 248, 8249: 139, 1097: 249, 1098: 250, 1044: 196, 1099: 251, 1111: 191, 1055: 207, 1100: 252, 1038: 161, 8220: 147, 1101: 253, 8250: 155, 1102: 254, 8216: 145, 1103: 255, 1043: 195, 1105: 184, 1039: 143, 1026: 128, 1106: 144, 8218: 130, 1107: 131, 8217: 146, 1108: 186, 1109: 190}

function UnicodeToWin1251(s) {
    var L = []
    for (var i=0; i<s.length; i++) {
        var ord = s.charCodeAt(i)
        if (!(ord in DMap))
            throw "Character "+s.charAt(i)+" isn't supported by win1251!"
        L.push(String.fromCharCode(DMap[ord]))
    }
    return L.join('')
}

// end of http://stackoverflow.com/a/2711936 


var ascii2unicode_table = {
	0x00: 0x0000, //NULL
	0x01: 0x0001, //START OF HEADING
	0x02: 0x0002, //START OF TEXT
	0x03: 0x0003, //END OF TEXT
	0x04: 0x0004, //END OF TRANSMISSION
	0x05: 0x0005, //ENQUIRY
	0x06: 0x0006, //ACKNOWLEDGE
	0x07: 0x0007, //BELL
	0x08: 0x0008, //BACKSPACE
	0x09: 0x0009, //HORIZONTAL TABULATION
	0x0A: 0x000A, //LINE FEED
	0x0B: 0x000B, //VERTICAL TABULATION
	0x0C: 0x000C, //FORM FEED
	0x0D: 0x000D, //CARRIAGE RETURN
	0x0E: 0x000E, //SHIFT OUT
	0x0F: 0x000F, //SHIFT IN
	0x10: 0x0010, //DATA LINK ESCAPE
	0x11: 0x0011, //DEVICE CONTROL ONE
	0x12: 0x0012, //DEVICE CONTROL TWO
	0x13: 0x0013, //DEVICE CONTROL THREE
	0x14: 0x0014, //DEVICE CONTROL FOUR
	0x15: 0x0015, //NEGATIVE ACKNOWLEDGE
	0x16: 0x0016, //SYNCHRONOUS IDLE
	0x17: 0x0017, //END OF TRANSMISSION BLOCK
	0x18: 0x0018, //CANCEL
	0x19: 0x0019, //END OF MEDIUM
	0x1A: 0x001A, //SUBSTITUTE
	0x1B: 0x001B, //ESCAPE
	0x1C: 0x001C, //FILE SEPARATOR
	0x1D: 0x001D, //GROUP SEPARATOR
	0x1E: 0x001E, //RECORD SEPARATOR
	0x1F: 0x001F, //UNIT SEPARATOR
	0x20: 0x0020, //SPACE
	0x21: 0x0021, //EXCLAMATION MARK
	0x22: 0x0022, //QUOTATION MARK
	0x23: 0x0023, //NUMBER SIGN
	0x24: 0x0024, //DOLLAR SIGN
	0x25: 0x0025, //PERCENT SIGN
	0x26: 0x0026, //AMPERSAND
	0x27: 0x0027, //APOSTROPHE
	0x28: 0x0028, //LEFT PARENTHESIS
	0x29: 0x0029, //RIGHT PARENTHESIS
	0x2A: 0x002A, //ASTERISK
	0x2B: 0x002B, //PLUS SIGN
	0x2C: 0x002C, //COMMA
	0x2D: 0x002D, //HYPHEN-MINUS
	0x2E: 0x002E, //FULL STOP
	0x2F: 0x002F, //SOLIDUS
	0x30: 0x0030, //DIGIT ZERO
	0x31: 0x0031, //DIGIT ONE
	0x32: 0x0032, //DIGIT TWO
	0x33: 0x0033, //DIGIT THREE
	0x34: 0x0034, //DIGIT FOUR
	0x35: 0x0035, //DIGIT FIVE
	0x36: 0x0036, //DIGIT SIX
	0x37: 0x0037, //DIGIT SEVEN
	0x38: 0x0038, //DIGIT EIGHT
	0x39: 0x0039, //DIGIT NINE
	0x3A: 0x003A, //COLON
	0x3B: 0x003B, //SEMICOLON
	0x3C: 0x003C, //LESS-THAN SIGN
	0x3D: 0x003D, //EQUALS SIGN
	0x3E: 0x003E, //GREATER-THAN SIGN
	0x3F: 0x003F, //QUESTION MARK
	0x40: 0x0040, //COMMERCIAL AT
	0x41: 0x0041, //LATIN CAPITAL LETTER A
	0x42: 0x0042, //LATIN CAPITAL LETTER B
	0x43: 0x0043, //LATIN CAPITAL LETTER C
	0x44: 0x0044, //LATIN CAPITAL LETTER D
	0x45: 0x0045, //LATIN CAPITAL LETTER E
	0x46: 0x0046, //LATIN CAPITAL LETTER F
	0x47: 0x0047, //LATIN CAPITAL LETTER G
	0x48: 0x0048, //LATIN CAPITAL LETTER H
	0x49: 0x0049, //LATIN CAPITAL LETTER I
	0x4A: 0x004A, //LATIN CAPITAL LETTER J
	0x4B: 0x004B, //LATIN CAPITAL LETTER K
	0x4C: 0x004C, //LATIN CAPITAL LETTER L
	0x4D: 0x004D, //LATIN CAPITAL LETTER M
	0x4E: 0x004E, //LATIN CAPITAL LETTER N
	0x4F: 0x004F, //LATIN CAPITAL LETTER O
	0x50: 0x0050, //LATIN CAPITAL LETTER P
	0x51: 0x0051, //LATIN CAPITAL LETTER Q
	0x52: 0x0052, //LATIN CAPITAL LETTER R
	0x53: 0x0053, //LATIN CAPITAL LETTER S
	0x54: 0x0054, //LATIN CAPITAL LETTER T
	0x55: 0x0055, //LATIN CAPITAL LETTER U
	0x56: 0x0056, //LATIN CAPITAL LETTER V
	0x57: 0x0057, //LATIN CAPITAL LETTER W
	0x58: 0x0058, //LATIN CAPITAL LETTER X
	0x59: 0x0059, //LATIN CAPITAL LETTER Y
	0x5A: 0x005A, //LATIN CAPITAL LETTER Z
	0x5B: 0x005B, //LEFT SQUARE BRACKET
	0x5C: 0x005C, //REVERSE SOLIDUS
	0x5D: 0x005D, //RIGHT SQUARE BRACKET
	0x5E: 0x005E, //CIRCUMFLEX ACCENT
	0x5F: 0x005F, //LOW LINE
	0x60: 0x0060, //GRAVE ACCENT
	0x61: 0x0061, //LATIN SMALL LETTER A
	0x62: 0x0062, //LATIN SMALL LETTER B
	0x63: 0x0063, //LATIN SMALL LETTER C
	0x64: 0x0064, //LATIN SMALL LETTER D
	0x65: 0x0065, //LATIN SMALL LETTER E
	0x66: 0x0066, //LATIN SMALL LETTER F
	0x67: 0x0067, //LATIN SMALL LETTER G
	0x68: 0x0068, //LATIN SMALL LETTER H
	0x69: 0x0069, //LATIN SMALL LETTER I
	0x6A: 0x006A, //LATIN SMALL LETTER J
	0x6B: 0x006B, //LATIN SMALL LETTER K
	0x6C: 0x006C, //LATIN SMALL LETTER L
	0x6D: 0x006D, //LATIN SMALL LETTER M
	0x6E: 0x006E, //LATIN SMALL LETTER N
	0x6F: 0x006F, //LATIN SMALL LETTER O
	0x70: 0x0070, //LATIN SMALL LETTER P
	0x71: 0x0071, //LATIN SMALL LETTER Q
	0x72: 0x0072, //LATIN SMALL LETTER R
	0x73: 0x0073, //LATIN SMALL LETTER S
	0x74: 0x0074, //LATIN SMALL LETTER T
	0x75: 0x0075, //LATIN SMALL LETTER U
	0x76: 0x0076, //LATIN SMALL LETTER V
	0x77: 0x0077, //LATIN SMALL LETTER W
	0x78: 0x0078, //LATIN SMALL LETTER X
	0x79: 0x0079, //LATIN SMALL LETTER Y
	0x7A: 0x007A, //LATIN SMALL LETTER Z
	0x7B: 0x007B, //LEFT CURLY BRACKET
	0x7C: 0x007C, //VERTICAL LINE
	0x7D: 0x007D, //RIGHT CURLY BRACKET
	0x7E: 0x007E, //TILDE
	0x7F: 0x007F, //DELETE
	0x80: 0x0402, //CYRILLIC CAPITAL LETTER DJE
	0x81: 0x0403, //CYRILLIC CAPITAL LETTER GJE
	0x82: 0x201A, //SINGLE LOW-9 QUOTATION MARK
	0x83: 0x0453, //CYRILLIC SMALL LETTER GJE
	0x84: 0x201E, //DOUBLE LOW-9 QUOTATION MARK
	0x85: 0x2026, //HORIZONTAL ELLIPSIS
	0x86: 0x2020, //DAGGER
	0x87: 0x2021, //DOUBLE DAGGER
	0x88: 0x20AC, //EURO SIGN
	0x89: 0x2030, //PER MILLE SIGN
	0x8A: 0x0409, //CYRILLIC CAPITAL LETTER LJE
	0x8B: 0x2039, //SINGLE LEFT-POINTING ANGLE QUOTATION MARK
	0x8C: 0x040A, //CYRILLIC CAPITAL LETTER NJE
	0x8D: 0x040C, //CYRILLIC CAPITAL LETTER KJE
	0x8E: 0x040B, //CYRILLIC CAPITAL LETTER TSHE
	0x8F: 0x040F, //CYRILLIC CAPITAL LETTER DZHE
	0x90: 0x0452, //CYRILLIC SMALL LETTER DJE
	0x91: 0x2018, //LEFT SINGLE QUOTATION MARK
	0x92: 0x2019, //RIGHT SINGLE QUOTATION MARK
	0x93: 0x201C, //LEFT DOUBLE QUOTATION MARK
	0x94: 0x201D, //RIGHT DOUBLE QUOTATION MARK
	0x95: 0x2022, //BULLET
	0x96: 0x2013, //EN DASH
	0x97: 0x2014, //EM DASH
//	0x98: 0x0000, //UNDEFINED
	0x99: 0x2122, //TRADE MARK SIGN
	0x9A: 0x0459, //CYRILLIC SMALL LETTER LJE
	0x9B: 0x203A, //SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
	0x9C: 0x045A, //CYRILLIC SMALL LETTER NJE
	0x9D: 0x045C, //CYRILLIC SMALL LETTER KJE
	0x9E: 0x045B, //CYRILLIC SMALL LETTER TSHE
	0x9F: 0x045F, //CYRILLIC SMALL LETTER DZHE
	0xA0: 0x00A0, //NO-BREAK SPACE
	0xA1: 0x040E, //CYRILLIC CAPITAL LETTER SHORT U
	0xA2: 0x045E, //CYRILLIC SMALL LETTER SHORT U
	0xA3: 0x0408, //CYRILLIC CAPITAL LETTER JE
	0xA4: 0x00A4, //CURRENCY SIGN
	0xA5: 0x0490, //CYRILLIC CAPITAL LETTER GHE WITH UPTURN
	0xA6: 0x00A6, //BROKEN BAR
	0xA7: 0x00A7, //SECTION SIGN
	0xA8: 0x0401, //CYRILLIC CAPITAL LETTER IO
	0xA9: 0x00A9, //COPYRIGHT SIGN
	0xAA: 0x0404, //CYRILLIC CAPITAL LETTER UKRAINIAN IE
	0xAB: 0x00AB, //LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
	0xAC: 0x00AC, //NOT SIGN
	0xAD: 0x00AD, //SOFT HYPHEN
	0xAE: 0x00AE, //REGISTERED SIGN
	0xAF: 0x0407, //CYRILLIC CAPITAL LETTER YI
	0xB0: 0x00B0, //DEGREE SIGN
	0xB1: 0x00B1, //PLUS-MINUS SIGN
	0xB2: 0x0406, //CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I
	0xB3: 0x0456, //CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I
	0xB4: 0x0491, //CYRILLIC SMALL LETTER GHE WITH UPTURN
	0xB5: 0x00B5, //MICRO SIGN
	0xB6: 0x00B6, //PILCROW SIGN
	0xB7: 0x00B7, //MIDDLE DOT
	0xB8: 0x0451, //CYRILLIC SMALL LETTER IO
	0xB9: 0x2116, //NUMERO SIGN
	0xBA: 0x0454, //CYRILLIC SMALL LETTER UKRAINIAN IE
	0xBB: 0x00BB, //RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
	0xBC: 0x0458, //CYRILLIC SMALL LETTER JE
	0xBD: 0x0405, //CYRILLIC CAPITAL LETTER DZE
	0xBE: 0x0455, //CYRILLIC SMALL LETTER DZE
	0xBF: 0x0457, //CYRILLIC SMALL LETTER YI
	0xC0: 0x0410, //CYRILLIC CAPITAL LETTER A
	0xC1: 0x0411, //CYRILLIC CAPITAL LETTER BE
	0xC2: 0x0412, //CYRILLIC CAPITAL LETTER VE
	0xC3: 0x0413, //CYRILLIC CAPITAL LETTER GHE
	0xC4: 0x0414, //CYRILLIC CAPITAL LETTER DE
	0xC5: 0x0415, //CYRILLIC CAPITAL LETTER IE
	0xC6: 0x0416, //CYRILLIC CAPITAL LETTER ZHE
	0xC7: 0x0417, //CYRILLIC CAPITAL LETTER ZE
	0xC8: 0x0418, //CYRILLIC CAPITAL LETTER I
	0xC9: 0x0419, //CYRILLIC CAPITAL LETTER SHORT I
	0xCA: 0x041A, //CYRILLIC CAPITAL LETTER KA
	0xCB: 0x041B, //CYRILLIC CAPITAL LETTER EL
	0xCC: 0x041C, //CYRILLIC CAPITAL LETTER EM
	0xCD: 0x041D, //CYRILLIC CAPITAL LETTER EN
	0xCE: 0x041E, //CYRILLIC CAPITAL LETTER O
	0xCF: 0x041F, //CYRILLIC CAPITAL LETTER PE
	0xD0: 0x0420, //CYRILLIC CAPITAL LETTER ER
	0xD1: 0x0421, //CYRILLIC CAPITAL LETTER ES
	0xD2: 0x0422, //CYRILLIC CAPITAL LETTER TE
	0xD3: 0x0423, //CYRILLIC CAPITAL LETTER U
	0xD4: 0x0424, //CYRILLIC CAPITAL LETTER EF
	0xD5: 0x0425, //CYRILLIC CAPITAL LETTER HA
	0xD6: 0x0426, //CYRILLIC CAPITAL LETTER TSE
	0xD7: 0x0427, //CYRILLIC CAPITAL LETTER CHE
	0xD8: 0x0428, //CYRILLIC CAPITAL LETTER SHA
	0xD9: 0x0429, //CYRILLIC CAPITAL LETTER SHCHA
	0xDA: 0x042A, //CYRILLIC CAPITAL LETTER HARD SIGN
	0xDB: 0x042B, //CYRILLIC CAPITAL LETTER YERU
	0xDC: 0x042C, //CYRILLIC CAPITAL LETTER SOFT SIGN
	0xDD: 0x042D, //CYRILLIC CAPITAL LETTER E
	0xDE: 0x042E, //CYRILLIC CAPITAL LETTER YU
	0xDF: 0x042F, //CYRILLIC CAPITAL LETTER YA
	0xE0: 0x0430, //CYRILLIC SMALL LETTER A
	0xE1: 0x0431, //CYRILLIC SMALL LETTER BE
	0xE2: 0x0432, //CYRILLIC SMALL LETTER VE
	0xE3: 0x0433, //CYRILLIC SMALL LETTER GHE
	0xE4: 0x0434, //CYRILLIC SMALL LETTER DE
	0xE5: 0x0435, //CYRILLIC SMALL LETTER IE
	0xE6: 0x0436, //CYRILLIC SMALL LETTER ZHE
	0xE7: 0x0437, //CYRILLIC SMALL LETTER ZE
	0xE8: 0x0438, //CYRILLIC SMALL LETTER I
	0xE9: 0x0439, //CYRILLIC SMALL LETTER SHORT I
	0xEA: 0x043A, //CYRILLIC SMALL LETTER KA
	0xEB: 0x043B, //CYRILLIC SMALL LETTER EL
	0xEC: 0x043C, //CYRILLIC SMALL LETTER EM
	0xED: 0x043D, //CYRILLIC SMALL LETTER EN
	0xEE: 0x043E, //CYRILLIC SMALL LETTER O
	0xEF: 0x043F, //CYRILLIC SMALL LETTER PE
	0xF0: 0x0440, //CYRILLIC SMALL LETTER ER
	0xF1: 0x0441, //CYRILLIC SMALL LETTER ES
	0xF2: 0x0442, //CYRILLIC SMALL LETTER TE
	0xF3: 0x0443, //CYRILLIC SMALL LETTER U
	0xF4: 0x0444, //CYRILLIC SMALL LETTER EF
	0xF5: 0x0445, //CYRILLIC SMALL LETTER HA
	0xF6: 0x0446, //CYRILLIC SMALL LETTER TSE
	0xF7: 0x0447, //CYRILLIC SMALL LETTER CHE
	0xF8: 0x0448, //CYRILLIC SMALL LETTER SHA
	0xF9: 0x0449, //CYRILLIC SMALL LETTER SHCHA
	0xFA: 0x044A, //CYRILLIC SMALL LETTER HARD SIGN
	0xFB: 0x044B, //CYRILLIC SMALL LETTER YERU
	0xFC: 0x044C, //CYRILLIC SMALL LETTER SOFT SIGN
	0xFD: 0x044D, //CYRILLIC SMALL LETTER E
	0xFE: 0x044E, //CYRILLIC SMALL LETTER YU
	0xFF: 0x044F  //CYRILLIC SMALL LETTER YA
};

var ascii_table = {
	0x0000: 0x00, //NULL
	0x0001: 0x01, //START OF HEADING
	0x0002: 0x02, //START OF TEXT
	0x03: 0x0003, //END OF TEXT
	0x04: 0x0004, //END OF TRANSMISSION
	0x05: 0x0005, //ENQUIRY
	0x06: 0x0006, //ACKNOWLEDGE
	0x07: 0x0007, //BELL
	0x08: 0x0008, //BACKSPACE
	0x09: 0x0009, //HORIZONTAL TABULATION
	0x0A: 0x000A, //LINE FEED
	0x0B: 0x000B, //VERTICAL TABULATION
	0x0C: 0x000C, //FORM FEED
	0x0D: 0x000D, //CARRIAGE RETURN
	0x0E: 0x000E, //SHIFT OUT
	0x0F: 0x000F, //SHIFT IN
	0x10: 0x0010, //DATA LINK ESCAPE
	0x11: 0x0011, //DEVICE CONTROL ONE
	0x12: 0x0012, //DEVICE CONTROL TWO
	0x13: 0x0013, //DEVICE CONTROL THREE
	0x14: 0x0014, //DEVICE CONTROL FOUR
	0x15: 0x0015, //NEGATIVE ACKNOWLEDGE
	0x16: 0x0016, //SYNCHRONOUS IDLE
	0x17: 0x0017, //END OF TRANSMISSION BLOCK
	0x18: 0x0018, //CANCEL
	0x19: 0x0019, //END OF MEDIUM
	0x1A: 0x001A, //SUBSTITUTE
	0x1B: 0x001B, //ESCAPE
	0x1C: 0x001C, //FILE SEPARATOR
	0x1D: 0x001D, //GROUP SEPARATOR
	0x1E: 0x001E, //RECORD SEPARATOR
	0x1F: 0x001F, //UNIT SEPARATOR
	0x20: 0x0020, //SPACE
	0x21: 0x0021, //EXCLAMATION MARK
	0x22: 0x0022, //QUOTATION MARK
	0x23: 0x0023, //NUMBER SIGN
	0x24: 0x0024, //DOLLAR SIGN
	0x25: 0x0025, //PERCENT SIGN
	0x26: 0x0026, //AMPERSAND
	0x27: 0x0027, //APOSTROPHE
	0x28: 0x0028, //LEFT PARENTHESIS
	0x29: 0x0029, //RIGHT PARENTHESIS
	0x2A: 0x002A, //ASTERISK
	0x2B: 0x002B, //PLUS SIGN
	0x2C: 0x002C, //COMMA
	0x2D: 0x002D, //HYPHEN-MINUS
	0x2E: 0x002E, //FULL STOP
	0x2F: 0x002F, //SOLIDUS
	0x30: 0x0030, //DIGIT ZERO
	0x31: 0x0031, //DIGIT ONE
	0x32: 0x0032, //DIGIT TWO
	0x33: 0x0033, //DIGIT THREE
	0x34: 0x0034, //DIGIT FOUR
	0x35: 0x0035, //DIGIT FIVE
	0x36: 0x0036, //DIGIT SIX
	0x37: 0x0037, //DIGIT SEVEN
	0x38: 0x0038, //DIGIT EIGHT
	0x39: 0x0039, //DIGIT NINE
	0x3A: 0x003A, //COLON
	0x3B: 0x003B, //SEMICOLON
	0x3C: 0x003C, //LESS-THAN SIGN
	0x3D: 0x003D, //EQUALS SIGN
	0x3E: 0x003E, //GREATER-THAN SIGN
	0x3F: 0x003F, //QUESTION MARK
	0x40: 0x0040, //COMMERCIAL AT
	0x41: 0x0041, //LATIN CAPITAL LETTER A
	0x42: 0x0042, //LATIN CAPITAL LETTER B
	0x43: 0x0043, //LATIN CAPITAL LETTER C
	0x44: 0x0044, //LATIN CAPITAL LETTER D
	0x45: 0x0045, //LATIN CAPITAL LETTER E
	0x46: 0x0046, //LATIN CAPITAL LETTER F
	0x47: 0x0047, //LATIN CAPITAL LETTER G
	0x48: 0x0048, //LATIN CAPITAL LETTER H
	0x49: 0x0049, //LATIN CAPITAL LETTER I
	0x4A: 0x004A, //LATIN CAPITAL LETTER J
	0x4B: 0x004B, //LATIN CAPITAL LETTER K
	0x4C: 0x004C, //LATIN CAPITAL LETTER L
	0x4D: 0x004D, //LATIN CAPITAL LETTER M
	0x4E: 0x004E, //LATIN CAPITAL LETTER N
	0x4F: 0x004F, //LATIN CAPITAL LETTER O
	0x50: 0x0050, //LATIN CAPITAL LETTER P
	0x51: 0x0051, //LATIN CAPITAL LETTER Q
	0x52: 0x0052, //LATIN CAPITAL LETTER R
	0x53: 0x0053, //LATIN CAPITAL LETTER S
	0x54: 0x0054, //LATIN CAPITAL LETTER T
	0x55: 0x0055, //LATIN CAPITAL LETTER U
	0x56: 0x0056, //LATIN CAPITAL LETTER V
	0x57: 0x0057, //LATIN CAPITAL LETTER W
	0x58: 0x0058, //LATIN CAPITAL LETTER X
	0x59: 0x0059, //LATIN CAPITAL LETTER Y
	0x5A: 0x005A, //LATIN CAPITAL LETTER Z
	0x5B: 0x005B, //LEFT SQUARE BRACKET
	0x5C: 0x005C, //REVERSE SOLIDUS
	0x5D: 0x005D, //RIGHT SQUARE BRACKET
	0x5E: 0x005E, //CIRCUMFLEX ACCENT
	0x5F: 0x005F, //LOW LINE
	0x60: 0x0060, //GRAVE ACCENT
	0x61: 0x0061, //LATIN SMALL LETTER A
	0x62: 0x0062, //LATIN SMALL LETTER B
	0x63: 0x0063, //LATIN SMALL LETTER C
	0x64: 0x0064, //LATIN SMALL LETTER D
	0x65: 0x0065, //LATIN SMALL LETTER E
	0x66: 0x0066, //LATIN SMALL LETTER F
	0x67: 0x0067, //LATIN SMALL LETTER G
	0x68: 0x0068, //LATIN SMALL LETTER H
	0x69: 0x0069, //LATIN SMALL LETTER I
	0x6A: 0x006A, //LATIN SMALL LETTER J
	0x6B: 0x006B, //LATIN SMALL LETTER K
	0x6C: 0x006C, //LATIN SMALL LETTER L
	0x6D: 0x006D, //LATIN SMALL LETTER M
	0x6E: 0x006E, //LATIN SMALL LETTER N
	0x6F: 0x006F, //LATIN SMALL LETTER O
	0x70: 0x0070, //LATIN SMALL LETTER P
	0x71: 0x0071, //LATIN SMALL LETTER Q
	0x72: 0x0072, //LATIN SMALL LETTER R
	0x73: 0x0073, //LATIN SMALL LETTER S
	0x74: 0x0074, //LATIN SMALL LETTER T
	0x75: 0x0075, //LATIN SMALL LETTER U
	0x76: 0x0076, //LATIN SMALL LETTER V
	0x77: 0x0077, //LATIN SMALL LETTER W
	0x78: 0x0078, //LATIN SMALL LETTER X
	0x79: 0x0079, //LATIN SMALL LETTER Y
	0x7A: 0x007A, //LATIN SMALL LETTER Z
	0x7B: 0x007B, //LEFT CURLY BRACKET
	0x7C: 0x007C, //VERTICAL LINE
	0x7D: 0x007D, //RIGHT CURLY BRACKET
	0x7E: 0x007E, //TILDE
	0x7F: 0x007F, //DELETE
	0x0402: 0x80, //CYRILLIC CAPITAL LETTER DJE
	0x0403: 0x81, //CYRILLIC CAPITAL LETTER GJE
	0x201A: 0x82, //SINGLE LOW-9 QUOTATION MARK
	0x0453: 0x83, //CYRILLIC SMALL LETTER GJE
	0x201E: 0x84, //DOUBLE LOW-9 QUOTATION MARK
	0x2026: 0x85, //HORIZONTAL ELLIPSIS
	0x2020: 0x86, //DAGGER
	0x2021: 0x87, //DOUBLE DAGGER
	0x20AC: 0x88, //EURO SIGN
	0x2030: 0x89, //PER MILLE SIGN
	0x0409: 0x8A, //CYRILLIC CAPITAL LETTER LJE
	0x2039: 0x8B, //SINGLE LEFT-POINTING ANGLE QUOTATION MARK
	0x040A: 0x8C, //CYRILLIC CAPITAL LETTER NJE
	0x040C: 0x8D, //CYRILLIC CAPITAL LETTER KJE
	0x040B: 0x8E, //CYRILLIC CAPITAL LETTER TSHE
	0x040F: 0x8F, //CYRILLIC CAPITAL LETTER DZHE
	0x0452: 0x90, //CYRILLIC SMALL LETTER DJE
	0x2018: 0x91, //LEFT SINGLE QUOTATION MARK
	0x2019: 0x92, //RIGHT SINGLE QUOTATION MARK
	0x201C: 0x93, //LEFT DOUBLE QUOTATION MARK
	0x201D: 0x94, //RIGHT DOUBLE QUOTATION MARK
	0x2022: 0x95, //BULLET
	0x2013: 0x96, //EN DASH
	0x2014: 0x97, //EM DASH
//	0x98: 0x0000, //UNDEFINED
	0x2122: 0x99, //TRADE MARK SIGN
	0x0459: 0x9A, //CYRILLIC SMALL LETTER LJE
	0x203A: 0x9B, //SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
	0x045A: 0x9C, //CYRILLIC SMALL LETTER NJE
	0x045C: 0x9D, //CYRILLIC SMALL LETTER KJE
	0x045B: 0x9E, //CYRILLIC SMALL LETTER TSHE
	0x045F: 0x9F, //CYRILLIC SMALL LETTER DZHE
	0x00A0: 0xA0, //NO-BREAK SPACE
	0x040E: 0xA1, //CYRILLIC CAPITAL LETTER SHORT U
	0x045E: 0xA2, //CYRILLIC SMALL LETTER SHORT U
	0x0408: 0xA3, //CYRILLIC CAPITAL LETTER JE
	0x00A4: 0xA4, //CURRENCY SIGN
	0x0490: 0xA5, //CYRILLIC CAPITAL LETTER GHE WITH UPTURN
	0x00A6: 0xA6, //BROKEN BAR
	0x00A7: 0xA7, //SECTION SIGN
	0x0401: 0xA8, //CYRILLIC CAPITAL LETTER IO
	0x00A9: 0xA9, //COPYRIGHT SIGN
	0x0404: 0xAA, //CYRILLIC CAPITAL LETTER UKRAINIAN IE
	0x00AB: 0xAB, //LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
	0x00AC: 0xAC, //NOT SIGN
	0x00AD: 0xAD, //SOFT HYPHEN
	0x00AE: 0xAE, //REGISTERED SIGN
	0x0407: 0xAF, //CYRILLIC CAPITAL LETTER YI
	0x00B0: 0xB0, //DEGREE SIGN
	0x00B1: 0xB1, //PLUS-MINUS SIGN
	0x0406: 0xB2, //CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I
	0x0456: 0xB3, //CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I
	0x0491: 0xB4, //CYRILLIC SMALL LETTER GHE WITH UPTURN
	0x00B5: 0xB5, //MICRO SIGN
	0x00B6: 0xB6, //PILCROW SIGN
	0x00B7: 0xB7, //MIDDLE DOT
	0x0451: 0xB8, //CYRILLIC SMALL LETTER IO
	0x2116: 0xB9, //NUMERO SIGN
	0x0454: 0xBA, //CYRILLIC SMALL LETTER UKRAINIAN IE
	0x00BB: 0xBB, //RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
	0x0458: 0xBC, //CYRILLIC SMALL LETTER JE
	0x0405: 0xBD, //CYRILLIC CAPITAL LETTER DZE
	0x0455: 0xBE, //CYRILLIC SMALL LETTER DZE
	0x0457: 0xBF, //CYRILLIC SMALL LETTER YI
	0x0410: 0xC0, //CYRILLIC CAPITAL LETTER A
	0x0411: 0xC1, //CYRILLIC CAPITAL LETTER BE
	0x0412: 0xC2, //CYRILLIC CAPITAL LETTER VE
	0x0413: 0xC3, //CYRILLIC CAPITAL LETTER GHE
	0x0414: 0xC4, //CYRILLIC CAPITAL LETTER DE
	0x0415: 0xC5, //CYRILLIC CAPITAL LETTER IE
	0x0416: 0xC6, //CYRILLIC CAPITAL LETTER ZHE
	0x0417: 0xC7, //CYRILLIC CAPITAL LETTER ZE
	0x0418: 0xC8, //CYRILLIC CAPITAL LETTER I
	0x0419: 0xC9, //CYRILLIC CAPITAL LETTER SHORT I
	0x041A: 0xCA, //CYRILLIC CAPITAL LETTER KA
	0x041B: 0xCB, //CYRILLIC CAPITAL LETTER EL
	0x041C: 0xCC, //CYRILLIC CAPITAL LETTER EM
	0x041D: 0xCD, //CYRILLIC CAPITAL LETTER EN
	0x041E: 0xCE, //CYRILLIC CAPITAL LETTER O
	0x041F: 0xCF, //CYRILLIC CAPITAL LETTER PE
	0x0420: 0xD0, //CYRILLIC CAPITAL LETTER ER
	0x0421: 0xD1, //CYRILLIC CAPITAL LETTER ES
	0x0422: 0xD2, //CYRILLIC CAPITAL LETTER TE
	0x0423: 0xD3, //CYRILLIC CAPITAL LETTER U
	0x0424: 0xD4, //CYRILLIC CAPITAL LETTER EF
	0x0425: 0xD5, //CYRILLIC CAPITAL LETTER HA
	0x0426: 0xD6, //CYRILLIC CAPITAL LETTER TSE
	0x0427: 0xD7, //CYRILLIC CAPITAL LETTER CHE
	0x0428: 0xD8, //CYRILLIC CAPITAL LETTER SHA
	0x0429: 0xD9, //CYRILLIC CAPITAL LETTER SHCHA
	0x042A: 0xDA, //CYRILLIC CAPITAL LETTER HARD SIGN
	0x042B: 0xDB, //CYRILLIC CAPITAL LETTER YERU
	0x042C: 0xDC, //CYRILLIC CAPITAL LETTER SOFT SIGN
	0x042D: 0xDD, //CYRILLIC CAPITAL LETTER E
	0x042E: 0xDE, //CYRILLIC CAPITAL LETTER YU
	0x042F: 0xDF, //CYRILLIC CAPITAL LETTER YA
	0x0430: 0xE0, //CYRILLIC SMALL LETTER A
	0x0431: 0xE1, //CYRILLIC SMALL LETTER BE
	0x0432: 0xE2, //CYRILLIC SMALL LETTER VE
	0x0433: 0xE3, //CYRILLIC SMALL LETTER GHE
	0x0434: 0xE4, //CYRILLIC SMALL LETTER DE
	0x0435: 0xE5, //CYRILLIC SMALL LETTER IE
	0x0436: 0xE6, //CYRILLIC SMALL LETTER ZHE
	0x0437: 0xE7, //CYRILLIC SMALL LETTER ZE
	0x0438: 0xE8, //CYRILLIC SMALL LETTER I
	0x0439: 0xE9, //CYRILLIC SMALL LETTER SHORT I
	0x043A: 0xEA, //CYRILLIC SMALL LETTER KA
	0x043B: 0xEB, //CYRILLIC SMALL LETTER EL
	0x043C: 0xEC, //CYRILLIC SMALL LETTER EM
	0x043D: 0xED, //CYRILLIC SMALL LETTER EN
	0x043E: 0xEE, //CYRILLIC SMALL LETTER O
	0x043F: 0xEF, //CYRILLIC SMALL LETTER PE
	0x0440: 0xF0, //CYRILLIC SMALL LETTER ER
	0x0441: 0xF1, //CYRILLIC SMALL LETTER ES
	0x0442: 0xF2, //CYRILLIC SMALL LETTER TE
	0x0443: 0xF3, //CYRILLIC SMALL LETTER U
	0x0444: 0xF4, //CYRILLIC SMALL LETTER EF
	0x0445: 0xF5, //CYRILLIC SMALL LETTER HA
	0x0446: 0xF6, //CYRILLIC SMALL LETTER TSE
	0x0447: 0xF7, //CYRILLIC SMALL LETTER CHE
	0x0448: 0xF8, //CYRILLIC SMALL LETTER SHA
	0x0449: 0xF9, //CYRILLIC SMALL LETTER SHCHA
	0x044A: 0xFA, //CYRILLIC SMALL LETTER HARD SIGN
	0x044B: 0xFB, //CYRILLIC SMALL LETTER YERU
	0x044C: 0xFC, //CYRILLIC SMALL LETTER SOFT SIGN
	0x044D: 0xFD, //CYRILLIC SMALL LETTER E
	0x044E: 0xFE, //CYRILLIC SMALL LETTER YU
	0x044F: 0xFF  //CYRILLIC SMALL LETTER YA
};


var ASCII_BLOCK_LENGTH = 8;
var DES_BLOCK_LENGTH = 64;



var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

  $scope.eCopy = function(newmsg) {
    $scope.msg = newmsg;
  }
  
  $scope.eCopy2 = function(newmsg) {
    $scope.msg_ascii_numbers_field = newmsg;
  }
  
  $scope.eClear = function() {
    $scope.msg = "";
  }
  
  $scope.eClear2 = function() {
    $scope.msg_ascii_numbers_field = "";
  }
  
  $scope.dCopy = function(s) {
    $scope.cypher = s;
  }
  
  $scope.dCopy2 = function(s) {
    $scope.cypher_d = s;
  }
  
  $scope.dClear = function() {
    $scope.cypher = "";
  }
  
  $scope.dClear2 = function() {
    $scope.cypher_d = "";
  }
  
  $scope.UnicodeString2UnicodeNumbers = function(unicode_text) {
    var unicode_numbers = [];
    for (var i = 0; i < unicode_text.length; i++) {
      unicode_numbers.push(unicode_text.charCodeAt(i));
    }
    return unicode_numbers;
  }
  
  $scope.UnicodeNumbers2AsciiNumbers = function(unicode_numbers) {
    var ascii_numbers = [];
    for (var i = 0; i < unicode_numbers.length; i++) {
      for (var k in ascii_table) {
        if (unicode_numbers[i] == k) {
          ascii_numbers.push(ascii_table[k]);
        }
      }
    }
    return ascii_numbers;
  }
  
  $scope.AsciiNumbers2blocks = function(unicode_numbers) {
    var bit_array = [];
    for (var i = 0; i < unicode_numbers.length; i++) {
      var subarray = [];
      var a = unicode_numbers[i];
      for (var k = 0; k < ASCII_BLOCK_LENGTH; k++) {
        subarray[ASCII_BLOCK_LENGTH-k-1] = a % 2;
        a = (a - (a%2)) / 2;
      }
      bit_array.push(subarray);
    }
    return bit_array;
  }
  
  $scope.blocks2pure = function(blocked_bit_array) {
    var smooth_bit_array = [];
    for (var i = 0; i < blocked_bit_array.length; i++) {
      for (var j = 0; j < blocked_bit_array[i].length; j++) {
        smooth_bit_array.push(blocked_bit_array[i][j]);
      }
    }
    return smooth_bit_array;
  }
  
  $scope.pure2blocks = function(base, smooth_bit_array) {
    var blocks = [];
    var index = 0;
    var index_max = smooth_bit_array.length;
    while (index < index_max)
    {
      var one_block = [];
      for (var i = 0; i < base; i++) {
        if (smooth_bit_array[index+i]) {
          one_block.push(smooth_bit_array[index+i]);
        } else {
          one_block.push(0);
        }
      }
      blocks.push(one_block);
      index += base;
    }
    return blocks;
  }
  
  $scope.blocks2AsciiNumbers = function(blocks) {
    var ascii_numbers = [];
    for (var i = 0; i < blocks.length; i++) {
      var number = 0;
      for (var j = 0; j < ASCII_BLOCK_LENGTH; j++) {
        number += Math.pow(2, ASCII_BLOCK_LENGTH-1-j) * blocks[i][j];
      }
      ascii_numbers.push(number);
    }
    return ascii_numbers;
  }
  
  $scope.AsciiNumbers2UnicodeNumbers = function(ascii_numbers)
  {
    var unicode_numbers = [];
    for (var i = 0; i < ascii_numbers.length; i++) {
      for (var k in ascii2unicode_table) {
        if (ascii_numbers[i] == k) {
          unicode_numbers.push(ascii2unicode_table[k]);
        }
      }
    }
    return unicode_numbers;
  }

  $scope.UnicodeNumbers2UnicodeString = function(unicode_numbers)
  {
    var unicode_string = "";
    for (var i = 0; i < unicode_numbers.length; i++) {
      unicode_string += String.fromCharCode(unicode_numbers[i]);
    }
    return unicode_string;
  }  
  
  $scope.AsciiNumbers2AsciiString = function(ascii_numbers)
  {
    var unicode_numbers = $scope.AsciiNumbers2UnicodeNumbers(ascii_numbers);
    var unicode_string = $scope.UnicodeNumbers2UnicodeString(unicode_numbers);
    return unicode_string;
  }
  
  $scope.AsciiNumbers2AsciiString_2 = function(ascii_numbers)
  {
    var unicode_numbers = $scope.AsciiNumbers2UnicodeNumbers(ascii_numbers);
    var unicode_string = $scope.UnicodeNumbers2UnicodeString(unicode_numbers);
    return UnicodeToWin1251(unicode_string);
  }
  
  $scope.AsciiString2AsciiNumbers = function(ascii_string) {
    var ascii_numbers = [];
    for (var i = 0; i < ascii_string.length; i++) {
      ascii_numbers.push(ascii_string.charCodeAt(i));
    }
    return ascii_numbers;
  }
  
  $scope.validateHexString = function(s) {
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c == 32)
        continue;
      if (c < 48 || c > 102 || (c > 57 && c < 65) || (c > 70 && c < 97))
        return 0;
    }
    return 1;
  }
  
  $scope.key64bits = function(key_string) {
    var r = [];
    for (var i = 0; i < key_string.length; i++) {
      switch (key_string[i]) {
        case '0': r.push(0); r.push(0); r.push(0); r.push(0); break;
        case '1': r.push(0); r.push(0); r.push(0); r.push(1); break;
        case '2': r.push(0); r.push(0); r.push(1); r.push(0); break;
        case '3': r.push(0); r.push(0); r.push(1); r.push(1); break;
        case '4': r.push(0); r.push(1); r.push(0); r.push(0); break;
        case '5': r.push(0); r.push(1); r.push(0); r.push(1); break;
        case '6': r.push(0); r.push(1); r.push(1); r.push(0); break;
        case '7': r.push(0); r.push(1); r.push(1); r.push(1); break;
        case '8': r.push(1); r.push(0); r.push(0); r.push(0); break;
        case '9': r.push(1); r.push(0); r.push(0); r.push(1); break;
        case 'A': r.push(1); r.push(0); r.push(1); r.push(0); break;
        case 'B': r.push(1); r.push(0); r.push(1); r.push(1); break;
        case 'C': r.push(1); r.push(1); r.push(0); r.push(0); break;
        case 'D': r.push(1); r.push(1); r.push(0); r.push(1); break;
        case 'E': r.push(1); r.push(1); r.push(1); r.push(0); break;
        case 'F': r.push(1); r.push(1); r.push(1); r.push(1); break;
        case 'a': r.push(1); r.push(0); r.push(1); r.push(0); break;
        case 'b': r.push(1); r.push(0); r.push(1); r.push(1); break;
        case 'c': r.push(1); r.push(1); r.push(0); r.push(0); break;
        case 'd': r.push(1); r.push(1); r.push(0); r.push(1); break;
        case 'e': r.push(1); r.push(1); r.push(1); r.push(0); break;
        case 'f': r.push(1); r.push(1); r.push(1); r.push(1); break;
        case ' ': break;
      }
    }
    return r;
  }
  
  $scope.ip_table = [
    58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7
  ]
  
  $scope.pc1_table = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4
  ]
  
  $scope.pc2_table = [
    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4,
    26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40,
    51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32
  ]
  
  $scope.ls_table = [
    1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
  ]
  
  $scope.e_table = [
    [2,48], 3, 4, [5,7], [6,8], 9, 10, [11,13], [12,14], 15, 16,
        [17,19], [18,20], 21, 22, [23,25],
    [24,26], 27, 28, [29,31], [30,32], 33, 34, [35,37], [36,38], 
        39, 40, [41,43], [42,44], 45, 46, [1,47]
  ]
  
  $scope.s = [
    [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
    [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]
  ]
  
  $scope.s_table = [
    [ // S1
      [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
      [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
      [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
      [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
    ],
    [ // S2
      [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
      [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
      [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
      [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
    ],
    [ // S3
      [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
      [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
      [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
      [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
    ],
    [ // S4
      [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
      [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
      [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
      [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
    ],
    [ // S5
      [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
      [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
      [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
      [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
    ],
    [ // S6
      [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
      [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
      [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
      [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
    ],
    [ // S7
      [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
      [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
      [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
      [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
    ],
    [ // S8
      [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
      [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
      [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
      [2, 1, 14, 7, 4, 10, 8, 13, 5, 12, 9, 0, 3, 6, 15, 11]
    ]
  ]
  
  $scope.p_table = [
    16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10,
    2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25
  ]
  
  $scope.initialPermutation = function(ot) {
    var ip = [];
    for (var i = 0; i < ot.length; i++) {
      ip.push(ot[$scope.ip_table[i]-1]);
    }
    return ip;
  }

  $scope.leftPart = function(block_64) {
    var block_32 = [];
    for (var i = 0; i < (block_64.length) / 2; i++) {
      block_32.push(block_64[i]);
    }
    return block_32;
  }
  
  $scope.rightPart = function(block_64) {
    var block_32 = [];
    for (var i = (block_64.length) / 2; i < block_64.length; i++) {
      block_32.push(block_64[i]);
    }
    return block_32;
  }

  $scope.keysPC1 = function(block_64){
    var block_56 = [];
    for (var i = 0; i < $scope.pc1_table.length; i++) {
      block_56.push(block_64[$scope.pc1_table[i]-1]);
    }
    return block_56;
  }
  
  $scope.keysPC2 = function(block_56){
    var block_48 = [];
    for (var i = 0; i < $scope.pc2_table.length; i++) {
      block_48.push(block_56[$scope.pc2_table[i]-1]);
    }
    return block_48;
  }
  
  $scope.shiftLeft = function(block) {
    var tmp;
    var res = []
    tmp = block[0];
    for (var i = 0; i < (block.length) - 1; i++) {
      res.push(block[i+1]);
    }
    res.push(tmp);
    return res;
  }
  
  $scope.shiftLeftCustom = function(block, steps) {
    var res = block;
    for (var i = 0; i < steps; i++) {
      res = $scope.shiftLeft(res);
    }
    return res;
  }

  $scope.generateKeys = function(key) {
    $scope.k[0] = key;
    for (var i = 1; i < 17; i++) {
      var tmp = [];
      for (var j = 0; j < 48; j++) {
        tmp.push(key[j]);
      }
      $scope.k[i] = tmp;
    }
    
    // Регистры
    var l = [];
    var r = [];
    
    // PC1
    var pc1 = $scope.keysPC1(key);
    
    // L0, R0;  K1
    var pc2;
    l[0] = $scope.leftPart(pc1);
    r[0] = $scope.rightPart(pc1);
    l[0] = $scope.shiftLeftCustom(l[0], $scope.ls_table[0]);
    r[0] = $scope.shiftLeftCustom(r[0], $scope.ls_table[0]);
    pc2 = $scope.mergeParts(r[0], l[0]);
    pc2 = $scope.keysPC2(pc2);
    $scope.k[1] = pc2;
    
    // L1, R1 ... L15, R15;  K2..K16
    for (var i = 1; i <= 15; i++) {
      l[i] = l[i-1];
      r[i] = r[i-1];
      l[i] = $scope.shiftLeftCustom(l[i], $scope.ls_table[i]);
      r[i] = $scope.shiftLeftCustom(r[i], $scope.ls_table[i]);
      pc2 = $scope.mergeParts(r[i], l[i]);
      pc2 = $scope.keysPC2(pc2);
      $scope.k[i+1] = pc2;
    }
  }
  
  $scope.modSum = function(arg1, arg2) {
    var len1 = arg1.length;
    var len2 = arg2.length;
    if (len1 > len2) { 
    }
    if (len2 > len1) { 
    }
    var max_len = len1;
    var res = [];
    for (var i = 0; i < max_len; i++) {
      res.push(Math.abs(arg1[i]-arg2[i]));
    }
    return res;
  }
  
  $scope.getNum = function(arr) {
    var num = 0;
    for (var j = 0; j < arr.length; j++) {
      num += Math.pow(2, arr.length-1-j) * arr[j];
    }
    return num;
  }
  
  $scope.feistel = function(block_32, one_key) {
    var res = [];
    
    var ext_48 = [];
    for (var i = 0; i < 48; i++) {
      ext_48.push(null);
    }
    
    for (var i = 1; i <= 32; i++) {
      var elem = $scope.e_table[i-1];
      if (elem.length == 2) {
        for (var j = 0; j < elem.length; j++) {
          ext_48[elem[j]-1] = block_32[i-1];
        }
      }
      else {
        ext_48[elem-1] = block_32[i-1];
      }
    }
    
    ext_48 = $scope.modSum(ext_48, one_key);
    
    // Запись в S-блоки
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 6; j++) {
        $scope.s[i][j] = ext_48[i*6+j];
      }
    }
    
    // Вывод из S-блоков
    
    var output_32_nums = [];
    
    for (var i = 0; i < 8; i++) {
      var k = [];
      k.push($scope.s[i][0]);
      k.push($scope.s[i][5]);
      var l = [];
      l.push($scope.s[i][1]);
      l.push($scope.s[i][2]);
      l.push($scope.s[i][3]);
      l.push($scope.s[i][4]);
      var k_num = $scope.getNum(k);
      var l_num = $scope.getNum(l);
      output_32_nums.push($scope.s_table[i][k_num][l_num]);
    }
    
    var r = [];
    for (var i = 0; i < output_32_nums.length; i++) {
      switch (output_32_nums[i]) {
        case 0: r.push(0); r.push(0); r.push(0); r.push(0); break;
        case 1: r.push(0); r.push(0); r.push(0); r.push(1); break;
        case 2: r.push(0); r.push(0); r.push(1); r.push(0); break;
        case 3: r.push(0); r.push(0); r.push(1); r.push(1); break;
        case 4: r.push(0); r.push(1); r.push(0); r.push(0); break;
        case 5: r.push(0); r.push(1); r.push(0); r.push(1); break;
        case 6: r.push(0); r.push(1); r.push(1); r.push(0); break;
        case 7: r.push(0); r.push(1); r.push(1); r.push(1); break;
        case 8: r.push(1); r.push(0); r.push(0); r.push(0); break;
        case 9: r.push(1); r.push(0); r.push(0); r.push(1); break;
        case 10: r.push(1); r.push(0); r.push(1); r.push(0); break;
        case 11: r.push(1); r.push(0); r.push(1); r.push(1); break;
        case 12: r.push(1); r.push(1); r.push(0); r.push(0); break;
        case 13: r.push(1); r.push(1); r.push(0); r.push(1); break;
        case 14: r.push(1); r.push(1); r.push(1); r.push(0); break;
        case 15: r.push(1); r.push(1); r.push(1); r.push(1); break;
      }
    }
    var output_32_bits = r;
    
    var p = [];
    for (var i = 0; i < 32; i++) {
      p.push(output_32_bits[$scope.p_table[i]-1]);
    }
    
    res = p;
    return res;
  }
  
  $scope.mergeParts = function(block_32_left, block_32_right) {
    var res = [];
    for (var i = 0; i < block_32_left.length; i++) {
      res.push(block_32_left[i]);
    }
    for (var i = 0; i < block_32_right.length; i++) {
      res.push(block_32_right[i]);
    }
    return res;
  }
  
  $scope.initialPermutationInversed = function(block_64) {
    var x = block_64;
    var y = [];
    for (var i = 0; i < 64; i++) {
      y.push(null);
    }
    for (var i = 0; i < 64; i++) {
      y[$scope.ip_table[i]-1] = x[i];
    }
    return y;
  }
  
  $scope.k = [];
  
  $scope.des = function(msg_block_64, main_key) {
    var cypher_block_64 = [];
    if (msg_block_64.length != DES_BLOCK_LENGTH) {
      for (var i = 0; i < DES_BLOCK_LENGTH; i++) {
        cypher_block_64.push(0);
      }
      return cypher_block_64;
    }
    var ot = msg_block_64;
    
    // Регистры
    var l = new Array(17);                // undefined
    var r = new Array(17);                // undefined
    var rf = new Array(17);  rf[16] = 0;  // undefined
    
    // Генерация ключей
    $scope.generateKeys(main_key);
    
    // IP
    var ip = $scope.initialPermutation(ot);

    // L0, R0
    l[0] = $scope.leftPart(ip);
    r[0] = $scope.rightPart(ip);
    rf[0] = $scope.feistel(r[0], $scope.k[1]);
    
    // L1..L15, R1..R15
    for (var i = 1; i < 16; i++) {
      l[i] = r[i-1];
      r[i] = $scope.modSum(l[i-1], rf[i-1]);
      rf[i] = $scope.feistel(r[i], $scope.k[i+1]);
    }
    
    // L16, R16
    l[16] = r[15];
    r[16] = $scope.modSum(l[15], rf[15]);
    
    // Соединение частей
    var ipm2 = $scope.mergeParts(l[16], r[16]);
    
    // IP^-1
    var ipm1 = $scope.initialPermutationInversed(ipm2);
    
    cypher_block_64 = ipm1;
    return cypher_block_64;
  }
  
  $scope.cut = function(block_64, n) {
    var cutted = [];
    for (var i = 0; i < n; i++) {
      cutted.push(block_64[i]);
    }
    return cutted;
  }
  
  $scope.add = function(block_64, one_block_k) {
    var block_old = block_64;
    var block_new = [];
    for (var i = one_block_k.length; i < block_old.length; i++) {
      block_new.push(block_old[i]);
    }
    for (var i = 0; i < one_block_k.length; i++) {
      block_new.push(one_block_k[i]);
    }
    return block_new;
  }
  
  $scope.e = function(msg_blocks_k, main_key, c0, small_k) {
    var cypher_blocks_k = [];
    var buff = c0;
    var cbuff = [];
    var block_k = [];
    var one_block_k = [];
    for (var i = 0; i < msg_blocks_k.length; i++) {
      cbuff = $scope.des(buff, main_key);
      block_k = $scope.cut(cbuff, small_k);
      one_block_k = $scope.modSum(msg_blocks_k[i], block_k);
      cypher_blocks_k.push(one_block_k);
      buff = $scope.add(buff, block_k);
    }
    var cypher_blocks_pure = $scope.blocks2pure(cypher_blocks_k);
    return cypher_blocks_pure;
  }
  
  $scope.desm1 = function(cypher_block_64, main_key) {
    var msg_block_64 = [];
    if (cypher_block_64.length != DES_BLOCK_LENGTH) {
      for (var i = 0; i < DES_BLOCK_LENGTH; i++) {
        msg_block_64.push(0);
      }
      return msg_block_64;
    }
    var ct = cypher_block_64;
    
    // Регистры
    var l = new Array(17);                // undefined
    var r = new Array(17);                // undefined
    var rf = new Array(17);  rf[16] = 0;  // undefined
    
    // Генерация ключей
    $scope.generateKeys(main_key);
    
    // IP
    var ip = $scope.initialPermutation(ct);

    // L16, R16
    l[16] = $scope.leftPart(ip);
    r[16] = $scope.rightPart(ip);
    rf[16] = $scope.feistel(l[16], $scope.k[16]);
    
    // L15..L1, R15..R1
    for (var i = 15; i >= 1; i--) {
      l[i] = $scope.modSum(r[i+1], rf[i+1]);
      r[i] = l[i+1];
      rf[i] = $scope.feistel(l[i], $scope.k[i]);
    }
    
    // L0, R0
    l[0] = $scope.modSum(r[1], rf[1]);
    r[0] = l[1];
    
    // Соединение частей
    var ipm2 = $scope.mergeParts(l[0], r[0]);
    
    // IP^-1
    var ipm1 = $scope.initialPermutationInversed(ipm2);
    
    msg_block_64 = ipm1;
    return msg_block_64;
  }

  $scope.d = function(cypher_blocks_k, main_key, c0, small_k) {
    var msg_blocks_k = [];
    var buff = c0;
    var cbuff = [];
    var block_k = [];
    var one_block_k = [];
    for (var i = 0; i < cypher_blocks_k.length; i++) {
      cbuff = $scope.des(buff, main_key);
      block_k = $scope.cut(cbuff, small_k);
      one_block_k = $scope.modSum(cypher_blocks_k[i], block_k);
      msg_blocks_k.push(one_block_k);
      buff = $scope.add(buff, block_k);
    }
    var msg_blocks_pure = $scope.blocks2pure(msg_blocks_k);
    return msg_blocks_pure;
  }

  $scope.eAction = function() {
    $scope.msg_ascii_numbers_field_2 = $scope.msg_ascii_numbers_field;
  }
  
  $scope.commaString2AsciiNumbers = function(comma_string) {
    if (typeof comma_string == 'string') {
      var arr_chars = comma_string.split(',');
      var arr_nums = [];
      for (var i = 0; i < arr_chars.length; i++) {
        arr_nums.push(parseInt(arr_chars[i]));
      }
      return arr_nums;
    }
    return comma_string;
  }
  
  $scope.myParse = function(str) {
    return parseInt(str);
  }
  
});
