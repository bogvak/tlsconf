const TypeOfFrame = {
	"WALL" : {
		"menuname" : 3
	},
	"TABLE" : {
		"menuname" : 4
	},
	"FLOOR" : {
		"menuname" : 5
	},
}

const TypeOfModule = {
	"Blind-and-Audio" : {
		"menuname" : 6
	},
	"Video-/Audio" : {
		"menuname" : 7
	},
	"Analogue-/Digital-/Control signal slots" : {
		"menuname" : 8
	},
	"Computer signal slots" : {
		"menuname" : 9
	},
	"AC outlets" : {
		"menuname" : 10
	},
	"Active Module" : {
		"menuname" : 11
	},
}

const SubModulesType = {
	"WALL" : {
		"Premium Line" : {
			"support frame": "865 9213",
		},
		"Universal Line" : {

		}
	},
	"TABLE" : {
		"TAM 201" : {
			"4mm" : "865 9511",
			"4mm + button" : "865 9512",
			"2.5mm" : "865 9513",
			"2.5mm + button" : "865 9514",
		},
		"TAM 305" : {
			"4mm" : "865 9501",
			"4mm + button" : "865 9502",
			"2.5mm" : "865 9503",
			"2.5mm + button" : "865 9504",
		},
		"TAM 401" : {
			"4mm" : "865 9561",
			"4mm + button" : "865 9565",
			"2.5mm" : "865 9563",
			"2.5mm + button" : "865 9564",
		},
	},
	"FLOOR" : {
		"Worldplate Floorbox GB2" : {

		},
		"Worldplate Floorbox GB3" : {

		}
	}
}

const ModulesContent = {
	"WALL" : {
		"Premium Line" : {
			"Cover frame for three slots" : {
				"article" : "865 9200",
				"support-frame": 1,
			},
			"Cover frame for six slots" : {
				"article" : "865 9201",
				"support-frame": 2,
			},
			"Cover frame for nine slots" : {
				"article" : "865 9202",
				"support-frame": 3,
			}
		},
		"Universal Line" : {
			"__comment" : "Что у нас будет здесь ?"
		}
	},
	"TABLE" : {
		"TAM 201" : {
			"Six signal slots" : {
				"article" : "8700 4250",
				"signal-slots" : 6,
			},
			"One power socket and three signal slots" : {
				"article" : "8700 4251",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"type" : "Standart",
			},
			"Two power sockets" : {
				"article" : "8700 4252",
				"power-sockets" : 2,
			},
			"Three signal slots and Conference-control" : {
				"article" : "8700 4280",
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control" : {
				"article" : "8700 4281",
				"power-sockets" : 1,
				"conference-control" : 1,
			},
			"Two Conference-control" : {
				"article" : "8700 4282",
				"conference-control" : 2,
			}
		},
		"TAM 305" : {
			"Twelve signal slots" : {
				"article" : "8700 4260",
				"signal-slots" : 12,
			},
			"One power socket and nine signal slots" : {
				"article" : "8700 4261",
				"power-sockets" : 1,
				"signal-slots" : 9,
			},
			"Two power sockets and six signal slots" : {
				"article" : "8700 4262",
				"power-sockets" : 2,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Three power sockets and three signal slots" : {
				"article" : "8700 4263",
				"power-sockets" : 3,
				"signal-slots" : 3,
			},
			"Four power sockets" : {
				"article" : "8700 4264",
				"power-sockets" : 4,
			},
			"Three signal slots, one power socket and Conference-control" : {
				"article" : "8700 4283",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control double frame" : {
				"article" : "8700 4284",
				"power-sockets" : 1,
				"conference-control-double-frame": 1,
			},
			"Three signal slots and Conference-control double frame" : {
				"article" : "8700 4285",
				"signal-slots" : 3,
				"conference-control-double-frame": 1,
			}
		},
		"TAM 401" : {
			"Fifteen signal slots" : {
				"article" : "8700 4270",
				"signal-slots" : 15,
			},
			"One power socket and twelve signal slots" : {
				"article" : "8700 4271",
				"power-sockets" : 1,
				"signal-slots" : 12,
			},
			"Two power sockets and nine signal slots" : {
				"article" : "8700 4272",
				"power-sockets" : 2,
				"signal-slots" : 9,
			},
			"Three power sockets and six signal slots" : {
				"article" : "8700 4273",
				"power-sockets" : 3,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Four power sockets and three signal slots" : {
				"article" : "8700 4274",
				"power-sockets" : 4,
				"signal-slots" : 3,
			},
			"Five power sockets" : {
				"article" : "8700 4275",
				"power-sockets" : 5,
			},
			"Three signal slots, one power socket and Conference-control double frame" : {
				"article" : "8700 4286",
				"power-sockets" : 1,
				"signal-slots" : 3,
				"conference-control-double-frame": 1,
			},
			"Six signal slots, one power socket and Conference-control" : {
				"article" : "8700 4287",
				"power-sockets" : 1,
				"signal-slots" : 6,
				"conference-control" : 1,
			},
			"Three signal slots, two power sockets and Conference-control" : {
				"article" : "8700 4288",
				"power-sockets" : 2,
				"signal-slots" : 3,
				"conference-control" : 1,
			}
		}
	},
	"FLOOR" : {
		"Worldplate Floorbox GB2" : {
			"__comment" : "Только один основной вариант?"
		},
		"Worldplate Floorbox GB3" : {
			"__comment" : "Только один основной вариант?"
		}
	}
}

//const SupportAndCoverFrames = {

//}

const ModulesForBottomMenu = {
	"Signalslots IPL" : {
		"Blind-and-Audio" : {
			"Blind slot simple" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9210",
				},	
			},
			"Blind slot double" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminal" : "863 9211",
				},
			},
			"Blind slot triple" : {
				"slots-takes" : 3,
				"article-list" : {
					"solder-terminal" : "863 9212",
				},
				
			},
			"Audio slot female 1 x 3,5 mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9220",
					"40 cm cable" : "863 9221",
				},
			},
			"Audio 1/2 slot female 2 x 3,5 mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9229",
					"40 cm cable" : "863 9230",
				},
			},
			"Audio IN/OUT/Mic slot female 3 x 3,5 mm jack " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9236",
					"40 cm cable" : "863 9237",
				},
			},
			"Audio L/R slot female 2 x Cinch" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9226",
					"40 cm cable" : "863 9227",
					"gender changer" : "863 9228",
				},
			},
			"Audio XLR slot female 3 pin" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminal" : "863 9277",
					"40 cm cable" : "863 9278",
				},
			},
			"Audio XLR slot male 3 pin" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminal" : "863 9283",
					"40 cm cable" : "863 9284",
				},
			},
			"Audio XLR slot female 4 pin" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminal" : "863 9348",
					"40 cm cable" : "863 9349",
				},
			},
			"Audio Speakon slot female " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9334",
					"40 cm cable" : "863 9335"
				},
			},
		},
		"Video-/Audio" : {
			"Video slot female Cinch" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9223",
					"40 cm cable" : "863 9224",
					"gender changer" : "863 9225",
				},
			},
			"Video slot female BNC " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9294",
					"40 cm cable" : "863 9295",
					"gender changer" : "863 9296",
				},
			},
			"Video + Audio slot female Cinch/3,5 mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9231",
					"40 cm cable" : "863 9232",
				},
			},
			"Video + Audio slot female BNC/3,5 mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9309",
					"40 cm cable" : "863 9310",
				},
			},
			"Video + Audio L/R slot female 3 x Cinch" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9233",
					"40 cm cable" : "863 9234",
					"gender changer" : "863 9235",
				},
			},
			"Video + Audio L/R slot female BNC/2 x Cinch " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9297",
					"40 cm cable" : "863 9298",
					"gender changer" : "863 9299",
				},
			},
			"S-Video slot female 4 pin Mini DIN" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9238",
					"40 cm cable" : "863 9239",
					"gender changer" : "863 9333",
				},
			},
			"S-Video + Audio slot female 4 pin Mini DIN/3,5 x mm jack " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9246",
					"40 cm cable" : "863 9247",
				},
			},
			"S-Video + Audio L/R slot female 4 pin Mini DIN/2 x Cinch" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9248",
					"40 cm cable" : "863 9249",
				},
			},
			"S-Video + Video slot female 4 pin Mini DIN/Cinch" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9241",
					"40 cm cable" : "863 9243",
				},
			},
			"S-Video + Video slot female 4 pin Mini DIN/BNC" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9252",
					"40 cm cable" : "863 9253",
				},
			},
		},
		"Analogue-/Digital-/Control signal slots": {
			"YUV slot female 3 x RCA" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9313",
					"40 cm cable": "863 9314",
				},
			},
			"VGA slot female 15 pin HD" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9256",
					"40 cm cable": "863 9260",
					"gender changer" : "863 9260",
				},
			},
			"VGA slot male 15 pin HD" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9285",
					"40 cm cable": "863 9307",
					"gender changer": "863 9287"
				},
			},
			"VGA + Audio slot female 15 pin HD/3,5 mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9265",
					"40 cm cable": "863 9266",
					"gender changer": "863 9303",
				},
			},
			"VGA + Audio slot male 15 pin HD/3,5 mm jack " : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9301",
					"40 cm cable" : "863 9302",
					"gender changer" : "863 9304",
				},
			},
			"DVI-A slot female" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9267",
					"40 cm cable": "863 9268",
				},
			},
			"DVI-D slot female" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9269",
					"40 cm cable" : "863 9270",
				},
			},
			"RGBHV slot female 5 x BNC" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminal" : "863 9279",
					"40 cm cable" : "863 9280",
					"gender changer" : "863 9300",
				},
			},
			"HDMI slot female" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9336",
					"40 cm cable" : "863 9338",
				},
			},
			"Control slot female 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9353",
					"40 cm cable" : "863 9354",
				},
			},
		},
		"Computer signal slots" : {
			"Serial slot male 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9262",
					"40 cm cable" : "863 9263",
					"gender changer" : "863 9264",
				},
			},
			"Serial slot female 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9288",
					"40 cm cable" : "863 9308",
					"gender changer" : "863 9290",
				},
			},
			"PS/2 slot female 6 pin MIni DIN" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminal" : "863 9291",
					"40 cm cable" : "863 9292",
				},
			},
			"USB slot female Type A" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9271",
					"40 cm cable" : "863 9272",
				}
			},
			"USB slot female Type B" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9273",
					"40 cm cable" : "863 9274",
				}
			},
			"ISDN slot female RJ45" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9305",
					"40 cm cable" : "863 9306",
				}
			},
			"D-Sub slot female 25 pin" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9282",
					"40 cm cable" : "863 9281",
				}
			},
			//??what??
			"LAN slot female 1 x CAT5" : {
				"slots-takes" : 1,
				"article-list" : {
					"40 cm cable" : "863 9324",
					"gender changer": "863 9325",
				}
			},
			"LAN slot female 2 x CAT6" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "",
					"40 cm cable" : "863 9327",
					"gender changer": "863 9328",
				}
			},
			"Wieland slot female" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9321",
					"40 cm cable" : "863 9356",
				}
			},
			"Wieland slot male" : {
				"slots-takes" : 1,
				"article-list" : {
					"solder-terminl" : "863 9322",
					"40 cm cable" : "863 9357",
				}
			},
			"Key switch slot" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminl" : "863 9358",
					"40 cm cable" : "863 9368",
				}
			},
			"Button slot 2 x 18 mm" : {
				"slots-takes" : 2,
				"article-list" : {
					"solder-terminl" : "863 9359",
					"40 cm cable" : "863 9369",
					"gender changer": "",
				}
			},
			"Button slot LED blue 2 x 18 mm/2,5mm jack" : {
				"slots-takes" : 1,
				"article-list" : {
					"40 cm cable" : "863 9386",
				}
			},
		},
		"AC outlets" : {
			"comments__": "There will be some Modules"
		},
		"Active Module" : {
			"comments__": "There will be some Modules"
		},
	},
	"Signalslots WP" : {
		"comment__": "There will be something"
	},
}

const PowerSocket = {
	"Power socket DE" : "863 9214",
	"Power socket CH" : "863 9215",
	"Power socket GB" : "863 9216",
	"Power socket IT" : "863 9217",
	"Power socket US/CA" : "863 9218",
	"Power socket BE/FR/CZ/PL" : "863 9219",
	"Rocker switch with LED" : "863 9340",
	"Rocker switch for shutters with arrows" : "863 9347"
}

export {TypeOfFrame, TypeOfModule, SubModulesType, ModulesContent, ModulesForBottomMenu, PowerSocket}