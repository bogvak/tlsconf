const framesForTopMenu = {
	"WALL" : {
		"Premium Line IPL" : {
			"Cover frame for three slots" : {
				"article" : 8659200,
				"support-frame_amount": 1,
				"frame-width" : 3
			},
			"Cover frame for six slots" : {
				"article" : 8659201,
				"support-frame_amount": 2,
				"frame-width" : 3
			},
			"Cover frame for nine slots" : {
				"article" : 8659202,
				"support-frame_amount": 3,
				"frame-width" : 3
			}
		},
		"Universal Line WP" : {
			"IUP Support frame for 2 slots" : {
				"article" : 8639670,
				"support-frame_amount" : 1,
				"frame-width" : 2
			},
			"IUL Support Frame for 2 slots (Feller Edizio CH)" : {
				"article" : "8639670/1271",
				"support-frame_amount" : 1,
				"frame-width" : 2
			}
		}
	},
	"TABLE" : {
		"TAM 201" : {
			"Six signal slots" : {
				"article" : "87004250",
				"signal-slots" : 6,
			},
			"One power socket and three signal slots" : {
				"article" : "87004251",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"type" : "Standart",
			},
			"Two power sockets" : {
				"article" : "87004252",
				"power-sockets" : 2,
			},
			"Three signal slots and Conference-control" : {
				"article" : "87004280",
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control" : {
				"article" : "87004281",
				"power-sockets" : 1,
				"conference-control" : 1,
			},
			"Two Conference-control" : {
				"article" : "87004282",
				"conference-control" : 2,
			}
		},
		"TAM 305" : {
			"Twelve signal slots" : {
				"article" : "87004260",
				"signal-slots" : 12,
			},
			"One power socket and nine signal slots" : {
				"article" : "87004261",
				"power-sockets" : 1,
				"signal-slots" : 9,
			},
			"Two power sockets and six signal slots" : {
				"article" : "87004262",
				"power-sockets" : 2,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Three power sockets and three signal slots" : {
				"article" : "87004263",
				"power-sockets" : 3,
				"signal-slots" : 3,
			},
			"Four power sockets" : {
				"article" : "87004264",
				"power-sockets" : 4,
			},
			"Three signal slots, one power socket and Conference-control" : {
				"article" : "87004283",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control double frame" : {
				"article" : "87004284",
				"power-sockets" : 1,
				"conference-control-double-frame": 1,
			},
			"Three signal slots and Conference-control double frame" : {
				"article" : "87004285",
				"signal-slots" : 3,
				"conference-control-double-frame": 1,
			}
		},
		"TAM 401" : {
			"Fifteen signal slots" : {
				"article" : "87004270",
				"signal-slots" : 15,
			},
			"One power socket and twelve signal slots" : {
				"article" : "87004271",
				"power-sockets" : 1,
				"signal-slots" : 12,
			},
			"Two power sockets and nine signal slots" : {
				"article" : "87004272",
				"power-sockets" : 2,
				"signal-slots" : 9,
			},
			"Three power sockets and six signal slots" : {
				"article" : "87004273",
				"power-sockets" : 3,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Four power sockets and three signal slots" : {
				"article" : "87004274",
				"power-sockets" : 4,
				"signal-slots" : 3,
			},
			"Five power sockets" : {
				"article" : "87004275",
				"power-sockets" : 5,
			},
			"Three signal slots, one power socket and Conference-control double frame" : {
				"article" : "87004286",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"conference-control-double-frame": 1,
			},
			"Six signal slots, one power socket and Conference-control" : {
				"article" : "87004287",
				"power-sockets" : 1,
				"signal-slots" : 6,
				"conference-control" : 1,
			},
			"Three signal slots, two power sockets and Conference-control" : {
				"article" : "87004288",
				"power-sockets" : 2,
				"signal-slots" : 3,
				"conference-control" : 1,
			}
		}
	},
	//In order to escape error checking this was commitet until adding information
	/*"FLOOR" : {
		"Worldplate Floorbox GB2" : {
			"__comment" : "Только один основной вариант?"
		},
		"Worldplate Floorbox GB3" : {
			"__comment" : "Только один основной вариант?"
		}
	},*/
}

const modulesForBottomMenu = {
	"Signalslots IPL" : {
		"Blind slots" : {
			"Blind Slot (1 Slot width) incl. fixation" : {
				"article" : 8639210
			},
			"Blind Slot (2 Slot width) incl. fixation" : {
				"article" : 8639211
			},
			"Blind Slot (3 Slot width) incl. fixation" : {
				"article" : 8639212
			}
		},
		"Vidio": {
			"VGA (15pin HD) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639261,
					"40 cm cable" : 8639260,
					"gender changer": 8639256
				}
			},
			"VGA (15pin HD) male/female" : {
				"article-list" : {
					"solder-terminal" : 8639307,
					"40 cm cable" : 8639285,
					"gender changer": ""
				}
			},
			"VGA (15pin HD) male/male" : {
				"article-list" : {
					"solder-terminal" : 8639285,
					"40 cm cable" : 8639257,
					"gender changer": 8639287
				}
			},
			"VGA (15pin HD) female/female ECO" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639251,
					"gender changer": ""
				}
			},
			"HDMI Digital (HDMI/HDMI) female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639336,
					"gender changer": 8639339
				}
			},
			"HDMI Digital (HDMI/DVI) female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639338,
					"gender changer": ""
				}
			},
			"HDMI screwable" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639530
				}
			},
			"DVI-D Digital female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639270,
					"gender changer": ""
				}
			},
			"DVI-D / HDMI Digital female/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639293,
					"gender changer": ""
				}
			},
			"DVI-I female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639331
				}
			},
			"Video (1xRCA) female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639224,
					"gender changer": 8639225
				}
			},
			"Video (1xBNC) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639294,
					"40 cm cable" : 8639295,
					"gender changer": 8639296
				}
			},
			"Video YUV (3xRCA)  female" : {
				"article-list" : {
					"solder-terminal" : 8639313,
					"40 cm cable" : "",
					"gender changer": ""
				}
			},
			"S-Video / Video (1x4pin Mini DIN, 1xRCA)  female/female" : {
				"article-list" : {
					"solder-terminal" : 8639241,
					"40 cm cable" : 8639243,
					"gender changer": ""
				}
			},
			"S-Video/Video (1xpin Mini DIN, 1xBNC) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639252,
					"40 cm cable" : 8639253,
					"gender changer": ""
				}
			}
		},
		"Vidio-Audio" : {
			"VGA/Audio (15pol HD, 1x3,5mm plug) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639265,
					"40 cm cable" : 8639266,
					"gender changer": 8639303
				}
			},
			"VGA/Audio  (15pin HD, 3,5mm Klinke) male/female" : {
				"article-list" : {
					"solder-terminal" : 8639301,
					"40 cm cable" : 8639302,
					"gender changer": 8639304
				}
			},
			"VGA / Audio (15pin HD) female/female ECO" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639255,
					"gender changer": ""
				}
			},
			"Video (1xRCA ye / 3,5 mm plug) female/female " : {
				"article-list" : {
					"solder-terminal" : 8639231,
					"40 cm cable" : 8639232,
					"gender changer": ""
				}
			},
			"Video / Audio (1xBNC / 1x3,5 mm plug) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639309,
					"40 cm cable" : 8639310,
					"gender changer": ""
				}
			},
			"Video / Audio L/R (3xRCA ye/re/bl) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639233,
					"40 cm cable" : 8639234,
					"gender changer": 8639235
				}
			},
			"Video / Audio (1xBNC / 2xRCA re/bl) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639297,
					"40 cm cable" : 8639298,
					"gender changer": 8639299
				}
			},
			"S-Video/Audio (1xpin Mini DIN, 1x3,5 mm plug) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639246,
					"40 cm cable" : 8639247,
					"gender changer": ""
				}
			},
			"S-Video/Audio (1xpin Mini DIN, 2xRCA) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639248,
					"40 cm cable" : 8639249,
					"gender changer": ""
				}
			}
		},
		"Audio" : {
			"Audio (1x3,5mm plug) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639220,
					"40 cm cable" : 8639221,
					"gender changer": ""
				}
			},
			"Audio (2x3,5mm plug Stereo) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639229,
					"40 cm cable" : 8639230,
					"gender changer": ""
				}
			},
			"Audio (3x3,5mm plug) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639236,
					"40 cm cable" : 8639237,
					"gender changer": ""
				}
			},
			"Audio L/R (2xRCA re/bl) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639226,
					"40 cm cable" : 8639226,
					"gender changer": 8639228
				}
			},
			"Audio (XLR 3pin) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639277,
					"40 cm cable" : 8639278,
					"gender changer": ""
				}
			},
			"Audio (XLR 3pin) male/female" : {
				"article-list" : {
					"solder-terminal" : 8639283,
					"40 cm cable" : 8639284,
					"gender changer": ""
				}
			},
			"Audio (XLR 4pin) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639348,
					"40 cm cable" : 8639349,
					"gender changer": ""
				}
			},
			"Audio (Speakon 4pin) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639335,
					"40 cm cable" : 8639334,
					"gender changer": ""
				}
			}
		},
		"Control" : {
			"USB (Type A) female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8640601,
					"gender changer": 8640603
				}
			},
			"Serial (9pin DSub) female/female" : {
				"article-list" : {
					"solder-terminal" : 8639288,
					"40 cm cable" : 8639308,
					"gender changer": 8639200
				}
			},
			"Serial (9pin Dsub)  male" : {
				"article-list" : {
					"solder-terminal" : 8639262,
					"40 cm cable" : 8639263,
					"gender changer": 8639264
				}
			},
			"LAN 1xCat6a female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639324,
					"gender changer": ""
				}
			},
			"LAN 2xCat6a female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639327,
					"gender changer": 8639328
				}
			},
			"ISDN (RJ45)  female" : {
				"article-list" : {
					"solder-terminal" : 8639305,
					"40 cm cable" : "",
					"gender changer": ""
				}
			},
			"230V Wieland female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639356,
					"gender changer": ""
				}
			},
			"230V Wieland male/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639357,
					"gender changer": ""
				}
			},
			"Taster 2fach" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639369,
					"gender changer": ""
				}
			},
			"Taster mit LED2fach" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639386,
					"gender changer": ""
				}
			},
			"Schlüsselschalter ON/OFF" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639368,
					"gender changer": ""
				}
			},
			"Control 9pin DSub female/female" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : 8639354,
					"gender changer": ""
				}
			}
		},
		"Optic" : {
			"Light wave SM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639391
				}
			},
			"Light wave SM MTRJ/MTRJ  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639392
				}
			},
			"Light wave SC/SC-Duplex MM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639393
				}
			},
			"Light wave E2000 APC/ E2000 APC  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639394
				}
			},
			"Light wave E2000 / E2000  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639395
				}
			},
			"Light wave LC Duplex MM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639396
				}
			},
			"Light wave LC Duplex SM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639397
				}
			},
			"Light wave ST Duplex MM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639398
				}
			},
			"Light wave SC Duplex SM  male/male" : {
				"article-list" : {
					"solder-terminal" : "",
					"40 cm cable" : "",
					"gender changer": 8639399
				}
			}
		},
		"Power Sockets" : {
			"Power socket DE" : {
				slots_takes: 3,
				"article" : 8639214
			},
			"Power socket CH" : {
				slots_takes: 3,
				"article" : 8639215,
			},
			"Power socket GB" : {
				slots_takes: 3,
				"article" : 8639216
			},
			"Power socket IT" : {
				slots_takes: 3,
				"article" : 8639217
			},
			"Power socket US/CA" : {
				slots_takes: 3,
				"article" : 8639218
			},
			"Power socket BE/FR/CZ/PL" : {
				slots_takes: 3,
				"article" : 8639219
			},
			"Rocker switch with LED" : {
				slots_takes: 3,
				"article" : 8639340
			},
			"Rocker switch for shutters with arrows" : {
				slots_takes: 3,
				"article" : 8639347
			},
		}
	},
	"Signal slots WP" : {
		"Blind slots" : {
			"Blind Slot (1 Slot width) incl.mount" : {
				"article" : 8639606
			},
			"Blind Slot (2 Slot width) incl.mount" : {
				"article" : 8639607
			},
			"Blind Slot (3 Slot width) incl.mount" : {
				"article" : 8639608
			}
		},
        "Vidio": {
			"VGA 15pol HD Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639618,
					"gender changer": 8639692,
					"solder-terminal": 8639642
				}
			},
			"VGA 15pol HD horizontal Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639617,
					"gender changer": 8639691,
					"solder-terminal": 8639641 
				}
			},
			"VGA 15pol mit 40cm Kabel (Ecoline) Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639668,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"HDMI Digital (HDMI/HDMI) Buchse/Buchse " : {
				"article-list" : {
					"40 cm cable": 8639659,
					"gender changer": 8639629,
					"solder-terminal": ""
				}
			},
			"HDMI Digital (HDMI/DVI) Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639669,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"DVI-D Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639605,
					"gender changer": "",
					"solder-terminal": 8639633
				}
			},
			"HDMI Schraubanschluss" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639678,
					"solder-terminal": ""
				}
			},
			"Video BNC Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": "",
					"solder-terminal": 8639644
				}
			},
			"Video Cinch Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639621,
					"gender changer": 8639695,
					"solder-terminal": 8639645
				}
			},
			"3 x Cinch YUV Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": "",
					"solder-terminal": 8639646
				}
			},
			"S-Video 4pol Hosiden Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639614,
					"gender changer": "",
					"solder-terminal": 8639638
				}
			},
			"SVideo 4pol Hosiden to 2xBNC Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639628,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"S-Video 4pol / Video BNC  Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639609,
					"gender changer": "",
					"solder-terminal": 8639634
				}
			},
			"SVideo 4pol / Video Cinch Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639610,
					"gender changer": "",
					"solder-terminal": 8639635
				}
			}
		},
		"Vidio-Audio" : {
			"DVI-D / Audio Buchse/Buchse" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": "",
					"solder-terminal": 8639831
				}
			}
		},
		"Audio" : {
			"Audio L/R Cinch Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639600,
					"gender changer": 8639680,
					"solder-terminal": 8639630
				}
			},
			"Audio 2 x 3,5 mm Klinke  Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639601,
					"gender changer": "",
					"solder-terminal": 8639649
				}
			},
			"Audio 1x3,5mm Klinke Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639602,
					"gender changer": "",
					"solder-terminal": 8639655
				}
			},
			"Audio XLR 3pol Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639603,
					"gender changer": "",
					"solder-terminal": 8639631
				}
			},
			"Audio XLR 4pol Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639654,
					"gender changer": "",
					"solder-terminal": 8639657
				}
			},
			"Audio XLR 5pol  Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639653,
					"gender changer": "",
					"solder-terminal": 8639652
				}
			},
			"Audio Speakon Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639667,
					"gender changer": "",
					"solder-terminal": 8639631
				}
			}
		},
		"Control" : {
			"Serial 9pol D-Sub horizontal Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639611,
					"gender changer": "",
					"solder-terminal": 8639648
				}
			},
			"Serial 9pol D-Sub  Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639612,
					"gender changer": 8639686,
					"solder-terminal": 8639636
				}
			},
			"Control 9pol D-Sub Buchse/offen" : {
				"article-list" : {
					"40 cm cable": 8639690,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"LAN RJ45 CAT6 Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8639613,
					"gender changer": 8639687,
					"solder-terminal": ""
				}
			},
			"USB (Typ A) Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": 8640700,
					"gender changer": 8640605,
					"solder-terminal": "" 
				}
			},
			"ISDN  RJ45 Buchse/Buchse" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": 8639626,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"USB 3.0 (Typ B-B) Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8640604,
					"solder-terminal": ""
				}
			},
			"USB 3.0 (Typ B-A) Buchse/Buchse" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8649696,
					"solder-terminal": "" 
				}
			},
			"Worldplate Schlüsselschalter  ON / OFF" : {
				"article-list" : {
					"40 cm cable": 8639683,
					"gender changer": "",
					"solder-terminal": 8639682
				}
			},
			"Worldplate Taster 2fach" : {
				"article-list" : {
					"40 cm cable": 8639684,
					"gender changer": "",
					"solder-terminal": 8639636
				}
			},
			"Worldplate Taster mit LED 2fach" : {
				"article-list" : {
					"40 cm cable": 8639698,
					"gender changer": "",
					"solder-terminal": ""
				}
			},
			"Worldplate Kabeldurchführung 3fach" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": "",
					"solder-terminal": 8639830
				}
			}

		},
		"Optic" : {
			"Lichtwelle SM Stecker/Stecker" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639833,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle SM MTRJ/MTRJ Stecker/Stecker" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 869834,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle SC/SCDuplex MM Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639835,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle E2000 APC/E2000 APC Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639836,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle E2000/E2000 Stecker/Stecker" : {
				"outOfImg" : true,
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8699837,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle LC Duplex MM  Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8649838,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle LC Duplex SM  Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639839,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle ST Duplex MM  Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8649840,
					"solder-terminal": ""
				}
			},
			"Worldplate Slot Lichtwelle SC Duplex SM  Stecker/Stecker" : {
				"article-list" : {
					"40 cm cable": "",
					"gender changer": 8639841,
					"solder-terminal": ""
				}
			}
		}
    }
}

const supportFrames = {
	"IPL": {
		"Blind slots" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Vidio" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Vidio-Audio" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Audio" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Control" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Optic" : {
			article: 8659213,
			desc: "Support frame for 3 signals slot",
		},
		"Power Sockets": {
			article: 8639209,
			desc: "Support frame for socket DE ",
		},
	},
	"WP": {
		"Blind slots" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
		"Vidio" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
		"Vidio-Audio" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
		"Audio" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
		"Control" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
		"Optic" : {
			article: 8639670,
			desc: "Support frame for 2 signals slot",
		},
	}
}

const subModulesType = {
	"WALL" : {
		"Premium Line" : {
			"Cover frame for three slots": {
				"Cover frame for three slots": 8659200,
			},
			"Cover frame for six slots": {
				"Cover frame for six slots":  8659201,
			},
			"Cover frame for nine slots": {
				"Cover frame for nine slots": 8659202,
			},
		},
		"Universal Line" : {

		}
	},
	"TABLE" : {
		"TAM 201" : {
			"4mm" : 8659511,
			"4mm + button" : 8659512,
			"2.5mm" : 8659513,
			"2.5mm + button" : 8659514,
		},
		"TAM 305" : {
			"4mm" : 8659501,
			"4mm + button" : 8659502,
			"2.5mm" : 8659503,
			"2.5mm + button" : 8659504,
		},
		"TAM 401" : {
			"4mm" : 8659561,
			"4mm + button" : 8659565,
			"2.5mm" : 8659563,
			"2.5mm + button" : 8659564,
		},
	},
	"FLOOR" : {
		"Worldplate Floorbox GB2" : {

		},
		"Worldplate Floorbox GB3" : {

		}
	}
}



const PowerSocket = {
	"Power socket DE" : 8639214,
	"Power socket CH" : 8639215,
	"Power socket GB" : 8639216,
	"Power socket IT" : 8639217,
	"Power socket US/CA" : 8639218,
	"Power socket BE/FR/CZ/PL" : 8639219,
	"Rocker switch with LED" : 8639340,
	"Rocker switch for shutters with arrows" : 8639347
}

export {supportFrames, subModulesType, framesForTopMenu, modulesForBottomMenu, PowerSocket}