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
			"1 slot width" : {
				"soket-takes" : 1,
				"article" : "8639210",
				"desc2" : "IPL blind slot",	
			},
			"2 slot width" : {
				"soket-takes" : 2,
				"article" : "8639211",
				"desc2" : "IPL blind slot",	
			},
		},
		"Video-/Audio" : {
			"3xRCA, 1 slot width, solder version" : {
				"soket-takes" : 1,
				"article" : "863 9233",
				"desc2" : "IPL Signal Slot Video+Audio",
			},
			"1xRCA + 3,5mm jack, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9231",
				"desc2" : "IPL Signal Slot Video+Aud. solder version",
			},
			"4pin MiniDIN, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9238",
				"desc2" : "IPL Signal Slot S-Video solder version",
			},
			"4pin MiniDIN + 1xRCA, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9241",
				"desc2" : "IPL Slot S-Video+Video solder version",
			},
			"4pin MiniDIN+1x3,5mm jack,  1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9246",
				"desc2" : "IPL Slot S-Video+Audio solder version",
			},
			"4pin MiniDIN + 2xRCA R/L, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9248",
				"desc2" : "IPL Slot S-Video+Audio solder version",
			},
			"4pin MiniDIN + 1xBNC, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9252",
				"desc2" : "IPL Slot S-Video+Audio solder version",
			},
			"1xBNC, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9294",
				"desc2" : "IPL Signal Slot Video solder flute1xBNC, 1 slot width",
			},
			"1xBNC + 2xRCA 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9297",
				"desc2" : "IPL Signal Slot Video+Aud. sold. version",
			},
			"1xBNC + 3,5mm jack, 1 slot width" : {
				"soket-takes" : 1,
				"article" : "863 9310",
				"desc2" : "IPL Signal Slot Video+Audio with Cable",
			},
		},
		"Analog-/Digital-/HDMI-/Control": {
			"comments__": "There will be some Modules"
		},
		"Computer" : {
			"comments__": "There will be some Modules"
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