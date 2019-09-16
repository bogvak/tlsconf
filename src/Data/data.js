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

const ModulesContent = {
	"WALL" : {
		"Premium Line" : {
			"Cover frame simple" : {
				"article" : "865 9200"
			},
			"Cover frame double" : {
				"article" : "865 9201"
			},
			"Cover frame triple" : {
				"article" : "865 9202"
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
				"power-sokets" : 1,
				"signal-slots" : 3,
				"type" : "Standart",
			},
			"Two power sockets" : {
				"article" : "8700 4252",
				"power-sokets" : 2,
			},
			"Three signal slots and Conference-control" : {
				"article" : "8700 4280",
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control" : {
				"article" : "8700 4281",
				"power-sokets" : 1,
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
				"power-sokets" : 1,
				"signal-slots" : 9,
			},
			"Two power sockets and six signal slots" : {
				"article" : "8700 4262",
				"power-sokets" : 2,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Three power sockets and three signal slots" : {
				"article" : "8700 4263",
				"power-sokets" : 3,
				"signal-slots" : 3,
			},
			"Four power sockets" : {
				"article" : "8700 4264",
				"power-sokets" : 4,
			},
			"Three signal slots, one power socket and Conference-control" : {
				"article" : "8700 4283",
				"power-sokets" : 1,
				"signal-slots" : 3,
				"conference-control" : 1,
			},
			"One power socket and Conference-control double frame" : {
				"article" : "8700 4284",
				"power-sokets" : 1,
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
				"power-sokets" : 1,
				"signal-slots" : 12,
			},
			"Two power sockets and nine signal slots" : {
				"article" : "8700 4272",
				"power-sokets" : 2,
				"signal-slots" : 9,
			},
			"Three power sockets and six signal slots" : {
				"article" : "8700 4273",
				"power-sokets" : 3,
				"signal-slots" : 6,
				"type" : "Standart",
			},
			"Four power sockets and three signal slots" : {
				"article" : "8700 4274",
				"power-sokets" : 4,
				"signal-slots" : 3,
			},
			"Five power sockets" : {
				"article" : "8700 4275",
				"power-sokets" : 5,
			},
			"Three signal slots, one power socket and Conference-control double frame" : {
				"article" : "8700 4286",
				"power-sokets" : 1,
				"signal-slots" : 3,
				"conference-control-double-frame": 1,
			},
			"Six signal slots, one power socket and Conference-control" : {
				"article" : "8700 4287",
				"power-sokets" : 1,
				"signal-slots" : 6,
				"conference-control" : 1,
			},
			"Three signal slots, two power sockets and Conference-control" : {
				"article" : "8700 4288",
				"power-sokets" : 2,
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
				"article" : "863 9210",	
			},
			"Blind slot double" : {
				"slots-takes" : 2,
				"article" : "863 9211",	
			},
			"Blind slot triple" : {
				"slots-takes" : 3,
				"article" : "863 9212",
			},
			"Audio slot female 1 x 3,5 mm jack" : {
				"slots-takes" : 1,
				"article" : "863 9220",
			},
			"Audio 1/2 slot female 2 x 3,5 mm jack" : {
				"slots-takes" : 1,
				"article" : "863 9229",
			},
			"Audio IN/OUT/Mic slot female 3 x 3,5 mm jack " : {
				"slots-takes" : 1,
				"article" : "863 9236",
			},
			"Audio L/R slot female 2 x Cinch (isolated)" : {
				"slots-takes" : 1,
				"article" : "863 9226",
			},
			"Audio XLR slot female 3 pin" : {
				"slots-takes" : 2,
				"article" : "863 9277",
			},
			"Audio XLR slot male 3 pin" : {
				"slots-takes" : 2,
				"article" : "863 9283",
			},
			"Audio XLR slot female 4 pin" : {
				"slots-takes" : 2,
				"article" : "863 9348",
			},
			"Audio Speakon slot female " : {
				"slots-takes" : 1,
				"article" : "863 9334",
			},
		},
		"Video-/Audio" : {
			"Video slot female Cinch (isolated)" : {
				"slots-takes" : 1,
				"article" : "863 9223",
			},
			"Video slot female BNC (isolated) " : {
				"slots-takes" : 1,
				"article" : "863 9294",
			},
			"Video + Audio slot female Cinch/3,5 mm jack" : {
				"slots-takes" : 1,
				"article" : "863 9231",
			},
			"Video + Audio slot female BNC/3,5 mm jack" : {
				"slots-takes" : 1,
				"article" : "863 9309",
			},
			"Video + Audio L/R slot female 3 x Cinch (isolated)" : {
				"slots-takes" : 1,
				"article" : "863 9233",
			},
			"Video + Audio L/R slot female BNC/2 x Cinch (isolated) " : {
				"slots-takes" : 1,
				"article" : "863 9297",
			},
			"S-Video slot female 4 pin Mini DIN" : {
				"slots-takes" : 1,
				"article" : "863 9238",
			},
			"S-Video + Audio slot female 4 pin Mini DIN/3,5 x mm jack " : {
				"slots-takes" : 1,
				"article" : "863 9246",
			},
			"S-Video + Audio L/R slot female 4 pin Mini DIN/2 x Cinch" : {
				"slots-takes" : 1,
				"article" : "863 9248",
			},
			"S-Video + Video slot female 4 pin Mini DIN/Cinch" : {
				"slots-takes" : 1,
				"article" : "863 9241",
			},
			"S-Video + Video slot female 4 pin Mini DIN/BNC" : {
				"slots-takes" : 1,
				"article" : "863 9252",
			},
		},
		"Analogue-/Digital-/HDMI-/Control signal slots": {
			"YUV slot female (isolated) 3 x RCA" : {
				"slots-takes" : 1,
				"article" : "863 9313",
			},
			"VGA slot female 15 pin HD" : {
				"slots-takes" : 1,
				"article" : "863 9256",
			},
			"VGA slot male 15 pin HD" : {
				"slots-takes" : 1,
				"article" : "863 9285",
			},
			"VGA + Audio slot female 15 pin HD/3,5 mm jack" : {
				"slots-takes" : 1,
				"article" : "863 9265",
			},
			"VGA + Audio slot male 15 pin HD/3,5 mm jack " : {
				"slots-takes" : 1,
				"article" : "863 9301",
			},
			"DVI-A slot female" : {
				"slots-takes" : 1,
				"article" : "863 9267",
			},
			"DVI-D slot female" : {
				"slots-takes" : 1,
				"article" : "863 9269",
			},
			"RGBHV slot female 5 x BNC (isolated)" : {
				"slots-takes" : 2,
				"article" : "863 9279",
			},
			"HDMI slot female" : {
				"slots-takes" : 1,
				"article" : "863 9336",
			},
			"Control slot female 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article" : "863 9353",
			},
		},
		"Computer signal slots" : {
			"Serial slot male 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article" : "863 9262",
			},
			"Serial slot female 9 pin D-Sub" : {
				"slots-takes" : 1,
				"article" : "863 9288",
			},
			"PS/2 slot female 6 pin MIni DIN" : {
				"slots-takes" : 1,
				"article" : "863 9291",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
			},
			"" : {
				"slots-takes" : 1,
				"article" : "",
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

export {TypeOfFrame, ModulesContent, ModulesForBottomMenu}