 const layouts = {
    "qwerty": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "[{", "]}", "\\|"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", ";:", "'\""],
            "row4": ["zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "dvorak": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}"],
            "row2": ["'\"", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "=+", "\\|"],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_"],
            "row4": [";:", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },

    "colemak_dh_iso": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}" ],
            "row3": ["aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"", "\\|"],
            "row4": ["zZ", "xX", "cC", "dD", "vV", "\\|", "kK", "hH", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "colemak_dh_wide": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "=+", "7&", "8*", "9(", "0)", "-_"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "[{", "jJ", "lL", "uU", "yY", ";:", "'\"", "\\|"],
            "row3": ["aA", "rR", "sS", "tT", "gG", "]}", "mM", "nN", "eE", "iI", "oO"],
            "row4": ["xX", "cC", "dD", "vV", "zZ", "/?", "kK", "hH", ",<", ".>"],
            "row5": [" "]
        }
    },
    "colemak_dh_iso_wide": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "=+", "7&", "8*", "9(", "0)", "-_"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "[{", "jJ", "lL", "uU", "yY", ";:", "/?" ],
            "row3": ["aA", "rR", "sS", "tT", "gG", "]}", "mM", "nN", "eE", "iI", "oO", "'\""],
            "row4": ["zZ", "xX", "cC", "dD", "vV", "\\|", "##", "kK", "hH", ",<", ".>"],
            "row5": [" "]
        }
    },
    "colemak_dhk": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|"],
            "row3": ["aA", "rR", "sS", "tT", "gG", "kK", "nN", "eE", "iI", "oO", "'\""],
            "row4": ["xX", "cC", "dD", "vV", "zZ", "mM", "hH", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "colemak_dh_matrix": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|"],
            "row3": ["aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\""],
            "row4": ["zZ", "xX", "cC", "dD", "vV", "kK", "hH", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "colemak_dhk_iso": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}"],
            "row3": ["aA", "rR", "sS", "tT", "gG", "kK", "nN", "eE", "iI", "oO", "'\"", "#'"],
            "row4": ["zZ", "xX", "cC", "dD", "vV", "\\|", "mM", "hH", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "colemak_dhv": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{"],
            "row2": ["qQ", "wW", "cC", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "-_", "]}", "\\|"],
            "row3": ["aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\""],
            "row4": ["zZ", "xX", "fF", "dD", "kK", "vV", "hH", "/?", ".>", ",<"],
            "row5": [" "]
        }
    },
    "qwertz": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["^°", "1!", "2\"", "3§", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "ß?", "´`"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "zZ", "uU", "iI", "oO", "pP", "üÜ", "+*"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "öÖ", "äÄ", "#'"],
            "row4": ["<>", "yY", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "swiss_german":{
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["§°", "1+", "2\"", "3*", "4ç", "5%", "6&", "7/", "8(", "9)", "0=", "'?", "^`"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "zZ", "uU", "iI", "oO", "pP", "üè", "‥!"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "öé", "äà", "$£"],
            "row4": ["<>", "yY", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "swiss_french":{
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["§°", "1+", "2\"", "3*", "4ç", "5%", "6&", "7/", "8(", "9)", "0=", "'?", "^`"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "zZ", "uU", "iI", "oO", "pP", "èü", "‥!"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "éö", "àä", "$£"],
            "row4": ["<>", "yY", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "workman": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "dD", "rR", "wW", "bB", "jJ", "fF", "uU", "pP", ";:", "[{", "]}", "\\|"],
            "row3": ["aA", "sS", "hH", "tT", "gG", "yY", "nN", "eE", "oO", "iI", "'\""],
            "row4": ["zZ", "xX", "mM", "cC", "vV", "kK", "lL", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "prog_workman": {
        "keymapShowTopRow": true,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "!1", "@2", "#3", "$4", "%5", "^6", "&7", "*8", "(9", ")0", "-_", "=+"],
            "row2": ["qQ", "dD", "rR", "wW", "bB", "jJ", "fF", "uU", "pP", ";:", "{[", "}]", "\\|"],
            "row3": ["aA", "sS", "hH", "tT", "gG", "yY", "nN", "eE", "oO", "iI", "'\""],
            "row4": ["zZ", "xX", "mM", "cC", "vV", "kK", "lL", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "turkish_q": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["\"é", "1!", "2'", "3^", "4+", "5%", "6&", "7/", "8(", "9)", "0=", "*?", "-_"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "ıI", "oO", "pP", "ğĞ", "üÜ", ",;"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "şŞ", "iİ"],
            "row4": ["zZ", "xX", "cC", "vV", "bB", "nN", "mM", "öÖ", "çÇ", ".:"],
            "row5": [" "]
        }
    },
    "turkish_f": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["*+", "1!", "2\"", "3^", "4$", "5%", "6&", "7'", "8(", "9)", "0=", "/?", "-_"],
            "row2": ["fF", "gG", "ğĞ", "ıI", "oO", "dD", "rR", "nN", "hH", "pP", "qQ", "wW", "xX"],
            "row3": ["uU", "iİ", "eE", "aA", "üÜ", "tT", "kK", "mM", "lL", "yY", "şŞ"],
            "row4": ["jJ", "öÖ", "vV", "cC", "çÇ", "zZ", "sS", "bB", ".:", ",;"],
            "row5": [" "]
        }
    },
    "turkish_e": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["*+", "1!", "2\"", "3^", "4$", "5%", "6&", "7'", "8(", "9)", "0=", "/?", "-_"],
            "row2": ["qQ", "jJ", "üÜ", "oO", "fF", "cC", "tT", "mM", "kK", "bB", "sS", "pP"],
            "row3": ["eE", "aA", "iİ", "ıI", "gG", "ğĞ", "lL", "nN", "rR", "dD", "vV", ",;"],
            "row4": ["<>", "xX", "wW", "öÖ", "uU", "hH", "zZ", "çÇ", "yY", "şŞ", ".:"],
            "row5": [" "]
        }
    },
    "MTGAP_ASRT": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "lL", "dD", "bB", "jJ", "fF", "uU", "kK", "pP", "[{", "]}", "\\|"],
            "row3": ["aA", "sS", "rR", "tT", "gG", "hH", "nN", "eE", "oO", "iI", "/?"],
            "row4": ["zZ", "xX", "cC", "vV", ";:", "yY", "mM", ",<", ".>", "'\""],
            "row5": [" "]
        }
    },
    "norman": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "dD", "fF", "kK", "jJ", "uU", "rR", "lL", ";:", "[{", "]}", "\\|"],
            "row3": ["aA", "sS", "eE", "tT", "gG", "yY", "nN", "iI", "oO", "hH", "'\""],
            "row4": ["zZ", "xX", "cC", "vV", "bB", "pP", "mM", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "halmak": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9<", "0>", "-_", "=+"],
            "row2": ["wW", "lL", "rR", "bB", "zZ", ";:", "qQ", "uU", "dD", "jJ", "[{", "]}", "\\|"],
            "row3": ["sS", "hH", "nN", "tT", ",(", ".)", "aA", "eE", "oO", "iI", "'\""],
            "row4": ["fF", "mM", "vV", "cC", "/?", "gG", "pP", "xX", "kK", "yY"],
            "row5": [" "]
        }
    },
    "QGMLWB": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "gG", "mM", "lL", "wW", "bB", "yY", "uU", "vV", ";:", "[{", "]}", "\\|"],
            "row3": ["dD", "sS", "tT", "nN", "rR", "iI", "aA", "eE", "oO", "hH", "'\""],
            "row4": ["zZ", "xX", "cC", "fF", "jJ", "kK", "pP", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "QGMLWY": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "gG", "mM", "lL", "wW", "yY", "fF", "uU", "bB", ";:", "[{", "]}", "\\|"],
            "row3": ["dD", "sS", "tT", "nN", "rR", "iI", "aA", "eE", "oO", "hH", "'\""],
            "row4": ["zZ", "xX", "cC", "vV", "jJ", "kK", "pP", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "qwpr": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "pP", "rR", "fF", "yY", "uU", "kK", "lL", ";:", "[{", "]}", "\\|"],
            "row3": ["aA", "sS", "dD", "tT", "gG", "hH", "nN", "iI", "oO", "eE", "'\""],
            "row4": ["zZ", "xX", "cC", "vV", "bB", "jJ", "mM", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "uk_qwerty": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`¬", "1!", "2\"", "3£", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "[{", "]}", "#~"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", ";:", "'@"],
            "row4": ["zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",<", ".>", "/?"],
            "row5": [" "]
        }
    },
    "spanish_qwerty": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["ºª", "1!", "2\"", "3·", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "'?", "¡¿"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "`^", "+*"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "ñÑ", "´¨", "çÇ"],
            "row4": ["<>", "zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "italian_qwerty": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["\\|", "1!", "2\"", "3£", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "‘?", "ì^"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "èé", "+*"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "òç", "à°", "ù§"],
            "row4": ["<>", "zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "latam_qwerty": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["|°", "1!", "2\"", "3#", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "'?", "¿¡"],
            "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "´¨", "+*"],
            "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "ñÑ", "{[", "  "],
            "row4": ["<>", "zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "prog_dvorak": {
        "keymapShowTopRow": true,
        "type": "ansi",
        "keys": {
            "row1": ["$~", "&%", "[7", "{5", "}3", "(1", "=9", "*0", ")2", "+4", "]6", "!8", "#`"],
            "row2": [";:", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "@^", "\\|"],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_"],
            "row4": ["'\"", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },
    "prog_dvorak_prime": {
        "keymapShowTopRow": true,
        "type": "ansi",
        "keys": {
            "row1": ["$~", "+1", "[2", "{3", "(4", "&5", "=6", ")7", "}8", "]9", "*0", "!%", "|`"],
            "row2": [";:", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "@^", "\\#"],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_"],
            "row4": ["'\"", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },
    "german_dvorak": {
        "keymapShowTopRow": true,
        "type": "iso",
        "keys": {
            "row1": ["^°", "1!", "2\"", "3§", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "+*", "<>"],
            "row2": ["üÜ", ",;", ".:", "pP", "yY", "fF", "gG", "cC", "tT", "zZ", "ß?", "\\/"],
            "row3": ["aA", "oO", "eE", "iI", "uU", "hH", "dD", "rR", "nN", "sS", "lL", "-_"],
            "row4": ["äÄ", "öÖ", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "#'"],
            "row5": [" "]
        }
    },
    "german_dvorak_imp": {
        "keymapShowTopRow": true,
        "type": "iso",
        "keys": {
            "row1": ["^°", "1§", "2²", "3³", "4#", "5@", "6&", "7~", "8\\", "9(", "0)", "+*", "=%"],
            "row2": ["üÜ", ",;", ".:", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "'\""],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "ß!", "-_"],
            "row4": ["äÄ", "öÖ", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },
    "spanish_dvorak": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["ºª", "1!", "2\"", "3·", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "'?", "¡¿"],
            "row2": [".:", ",;", "ñÑ", "pP", "yY", "fF", "gG", "cC", "hH", "lL", "`^", "+*"],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "rR", "tT", "nN", "sS", "´¨", "çÇ"],
            "row4": ["<>", "-_", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },
    "swedish_colemak": {
        "keymapShowTopRow": false,
        "matrixShowRightColumn": true,
        "type": "iso",
        "keys": {
            "row1": ["§½", "1!", "2\"", "3#", "4¤", "5%", "6&", "7/", "8(", "9)", "0=", "+?", "´`"],
            "row2": ["qQ", "wW", "fF", "pP", "gG", "jJ", "lL", "uU", "yY", "öÖ", "åÅ", "¨^"],
            "row3": ["aA", "rR", "sS", "tT", "dD", "hH", "nN", "eE", "iI", "oO", "äÄ", "'*"],
            "row4": ["<>", "zZ", "xX", "cC", "vV", "bB", "kK", "mM", ",;", ".:", "-_"],
            "row5": [" "]
        }
    },
    "swedish_dvorak": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["§°", "1!", "2\"", "3#", "4€", "5%", "6&", "7/", "8(", "9)", "0=", "+?", "´`"],
            "row2": ["åÅ", "äÄ", "öÖ", "pP", "yY", "fF", "gG", "cC", "rR", "lL", ",;", "¨^"],
            "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_", "'*"],
            "row4": ["<>", ".:", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
            "row5": [" "]
        }
    },
    "dvorak_L": {
        "keymapShowTopRow": true,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "[{", "]}", "/?", "pP", "fF", "mM", "lL", "jJ", "4$", "3#", "2@", "1!"],
            "row2": [";:", "qQ", "bB", "yY", "uU", "rR", "sS", "oO", ".>", "6^", "5%", "=+", "\\|"],
            "row3": ["-_", "kK", "cC", "dD", "tT", "hH", "eE", "aA", "zZ", "8*", "7&"],
            "row4": ["'\"", "xX", "gG", "vV", "wW", "nN", "iI", ",<", "0)", "9("],
            "row5": [" "]
        }
    },
    "dvorak_R": {
        "keymapShowTopRow": true,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "jJ", "lL", "mM", "fF", "pP", "/?", "[{", "]}"],
            "row2": ["5%", "6^", "qQ", ".>", "oO", "rR", "sS", "uU", "yY", "bB", ";:", "=+", "\\|"],
            "row3": ["7&", "8*", "zZ", "aA", "eE", "hH", "tT", "dD", "cC", "kK", "-_"],
            "row4": ["9(", "0)", "xX", ",<", "iI", "nN", "wW", "vV", "gG", "'\""],
            "row5": [" "]
        }
    },
    "dvorak_fr": {
        "keymapShowTopRow": false,
        "type": "iso",
        "keys": {
            "row1": ["*«", "1»", "2/", "3-", "4è", "5\\", "6^", "7(", "8`", "9)", "0_", "+[", "%]"],
            "row2": ["?:", "<'", ">é", "gG", "!.", "hH", "vV", "cC", "mM", "kK", "zZ", "=-"],
            "row3": ["oO", "aA", "uU", "eE", "bB", "fF", "sS", "tT", "nN", "dD", "wW","#~"],
            "row4": ["çà", "|;", "qQ", "@,", "iI", "yY", "xX", "rR", "lL", "pP","jJ"],
            "row5": [" "]
        }
    },
    "azerty": {
        "keymapShowTopRow": true,
        "type": "iso",
        "keys": {
            "row1": ["`", "&1", "é2~", "\"3#", "'4{", "(5[", "-6|", "è7`", "_8\\", "ç9", "à0@", ")°]", "=+}"],
            "row2": ["aA", "zZ", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "^¨", "$£¤"],
            "row3": ["qQ", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "mM", "ù%", "*µ"],
            "row4": ["<>", "wW", "xX", "cC", "vV", "bB", "nN", ",?", ";.", ":/", "!§"],
            "row5": [" "]
        }
    },

    "scythe": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["bB", "uU", "aA", "rR", "jJ", "gG", "wW", "dD", "yY", "'\"", "[{", "]}", "\\|"],
            "row3": ["sS", "iI", "oO", "nN", "lL", "cC", "mM", "tT", "hH", "eE", ";:"],
            "row4": ["qQ", ",<", ".>", "xX", "zZ", "vV", "fF", "pP", "kK", "/?"],
            "row5": [" "]
        }
    },
    "inqwerted": {
        "keymapShowTopRow": false,
        "type": "ansi",
        "keys": {
            "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
            "row2": ["tT", "rR", "eE", "wW", "qQ", "pP", "oO", "iI", "uU", "yY", "[{", "]}", "\\|"],
            "row3": ["gG", "fF", "dD", "sS", "aA", ";:", "lL", "kK", "jJ", "hH", "'\""],
            "row4": ["bB", "vV", "cC", "xX", "zZ", "/?", ".>", ",<", "mM", "nN"],
            "row5": [" "]
        }
    },

}


const Keyboard = (() => {
    const elements = {
        main: null,
        keysContainer: null,
        keys: [],
        capsKey: null,
    };

    let currentLayout = layouts.qwerty;

    let properties = Object.assign({}, currentLayout);



    const init = () => {

        elements.layoutDropdown = document.createElement("div");

        document.body.appendChild(elements.layoutDropdown);

        elements.main = document.createElement("div");
        elements.main.classList.add("keyboard");
        document.body.appendChild(elements.main);

        elements.keysContainer = document.createElement("div");
        elements.keysContainer.classList.add("keyboard__keys");
        elements.main.appendChild(elements.keysContainer);

        const dropdown = document.createElement("div");
        dropdown.classList.add("mx-auto", "flex", "items-center", "justify-center", "mb-2");


        dropdown.innerHTML = `
            
        <select name="layouts" id="layouts" class="bg-gray-200 rounded-full p-2 pr-4 text-gray-700 focus:outline-none focus:ring-indigo-500">
          
        </select>
                `

        //add layouts to dropdown
        Object.keys(layouts).forEach((layout) => {
            const option = document.createElement("option");
            option.value = layout;
            option.textContent = layout;
            dropdown.getElementsByTagName("select")[0].appendChild(option);
        });

        dropdown.getElementsByTagName("select")[0].addEventListener("change", (e) => {
            const selectedLayout = e.target.value;
            currentLayout = layouts[selectedLayout];
            properties = Object.assign({}, currentLayout);
            layout = selectedLayout;

            elements.keysContainer.innerHTML = "";
            elements.keysContainer.appendChild(createKeys());
            elements.keys = elements.keysContainer.querySelectorAll(".keyboard__key");
        });

        document.getElementsByClassName('keyboard')[0].prepend(dropdown);

        elements.keysContainer.appendChild(createKeys());
        elements.keys = elements.keysContainer.querySelectorAll(".keyboard__key");

        properties.keyboardInputs = document.querySelectorAll(".use-keyboard-input");
        properties.keyboardInputs.forEach((element) => {
            element.addEventListener("focus", () => {
                openKeyboard(element.value, (currentValue) => {
                    element.value = currentValue;
                });
            });
        });
    };

    const createKeys = () => {
        const fragment = document.createDocumentFragment();
        const keyLayout = properties.keys;

        for (const row in keyLayout) {
            keyLayout[row].forEach((key) => {
                const keyElement = document.createElement("button");
                keyElement.setAttribute("type", "button");
                keyElement.classList.add("keyboard__key");

                const [lowerCase, upperCase] = key.split("");
                keyElement.textContent = properties.capsLock ? upperCase || lowerCase : lowerCase;

                keyElement.addEventListener("click", () => {
                    const value = properties.capsLock && upperCase ? upperCase : lowerCase;
                    properties.value += value;
                    updateValueInTarget();
                });

                fragment.appendChild(keyElement);
            });
            fragment.appendChild(document.createElement("br"));
        }

        return fragment;
    };

    const updateValueInTarget = () => {
        properties.keyboardInputs.forEach((keyboard) => {
            keyboard.value = properties.value;
        });
    };

    const openKeyboard = (initialValue) => {
        properties.value = initialValue || "";
        elements.main.classList.remove("keyboard--hidden");
    };

    const closeKeyboard = () => {
        elements.main.classList.add("keyboard--hidden");
    };




    return { init, elements, openKeyboard, closeKeyboard };
})();

window.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", (event) => {
        const pressedKey = event.key.toLowerCase();
        Keyboard.elements.keys.forEach((keyElement) => {
            if (keyElement.textContent.toLowerCase() === pressedKey) {
                keyElement.style.backgroundColor = "lightgray";
                keyElement.style.scale = '0.9'
            }
        });
    });

    document.addEventListener("keyup", (event) => {
        const pressedKey = event.key.toLowerCase();
        Keyboard.elements.keys.forEach((keyElement) => {
            if (keyElement.textContent.toLowerCase() === pressedKey) {
                keyElement.style.backgroundColor = "";
                keyElement.style.scale = '1'
            }
        });
    });

    document.addEventListener("keyup", () => {
        Keyboard.elements.keys.forEach((keyElement) => {
            keyElement.style.backgroundColor = "";
        });
    });



    Keyboard.init();
});
