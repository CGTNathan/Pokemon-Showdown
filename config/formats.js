// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "ORAS Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "ORAS Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3521201/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3553516/\">OU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew']
	},
	{
		name: "OU (no Mega)",
		section: "ORAS Singles",

		ruleset: ['OU'],
		onBegin: function () {
			for (var i = 0; i < this.p1.pokemon.length; i++) {
				this.p1.pokemon[i].canMegaEvo = false;
			}
			for (var i = 0; i < this.p2.pokemon.length; i++) {
				this.p2.pokemon[i].canMegaEvo = false;
			}
		}
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: []
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3546077/\">np: UU Stage 4</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541343/\">UU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Shadow Tag']
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549031/\">np: RU Stage 11</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3538036/\">RU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545983/\">np: NU Stage 8</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545276/\">NU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3490462/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger']
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">Anything Goes Resources</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal']
	},
	/*{
		name: "CAP Naviathan Playtest",
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Allow CAP', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom',
			'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Volkraken', 'Plasmanta',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew'
		]
	},*/
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528947/\">Battle Spot Singles Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: []
	},
	{
		name: "Battle Spot Special 12",
		section: "ORAS Singles",

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545903/\">np: Doubles OU Stage 3</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Salamencite', 'Soul Dew', 'Dark Void',
			'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder', 'Gravity ++ Spore'
		]
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: ['Abomasnow', 'Aegislash', 'Amoonguss', 'Azumarill', 'Bisharp', 'Breloom', 'Charizard', 'Conkeldurr', 'Cresselia',
			'Diancie', 'Dragonite', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gengar', 'Greninja', 'Gyarados', 'Heatran',
			'Hitmontop', 'Hoopa', 'Hoopa-Unbound', 'Hydreigon', 'Jirachi', 'Kangaskhan', 'Keldeo', 'Kyurem-Black', 'Landorus', 'Landorus-Therian', 'Latios', 'Ludicolo',
			'Metagross', 'Mew', 'Milotic', 'Ninetales', 'Politoed', 'Rotom-Wash', 'Sableye', 'Scizor', 'Scrafty', 'Serperior', 'Shaymin-Sky', 'Suicune',
			'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Thundurus-Therian', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcarona', 'Weavile', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "Doubles NU",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Doubles UU'],
		banlist: ['Snorlax', 'Machamp', 'Lopunny', 'Galvantula', 'Mienshao', 'Infernape', 'Aromatisse', 'Clawitzer', 'Kyurem', 'Flygon',
			'Lucario', 'Alakazam', 'Gastrodon', 'Bronzong', 'Chandelure', 'Dragalge', 'Mamoswine', 'Genesect', 'Arcanine', 'Volcarona',
			'Aggron', 'Manectric', 'Salamence', 'Tornadus', 'Porygon2', 'Latias', 'Meowstic', 'Ninetales', 'Crobat', 'Blastoise',
			'Darmanitan', 'Sceptile', 'Jirachi', 'Goodra', 'Deoxys-Attack', 'Milotic', 'Victini', 'Hariyama', 'Crawdaunt', 'Aerodactyl',
			'Abomasnow', 'Krookodile', 'Cofagrigus', 'Druddigon', 'Escavalier', 'Dusclops', 'Slowbro', 'Slowking', 'Eelektross', 'Spinda',
			'Cloyster', 'Raikou', 'Thundurus-Therian', 'Swampert', 'Nidoking', 'Aurorus', 'Granbull', 'Braviary'
		]
	},
	{
		name: "VGC 2015",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3524352/\">VGC 2015 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3530547/\">VGC 2015 Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3500650/\">VGC Learning Resources</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526666/\">Sample Teams for VGC 2015</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true
	},
	{
		name: "Battle Spot Doubles",
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: []
	},
	{
		name: "Scrappy Skirmish",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3552712/\">Scrappy Skirmish</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['VGC 2015'],
		banlist: ['Venusaur', 'Charizard', 'Pikachu', 'Pikachu-Cosplay', 'Pikachu-Rock-Star', 'Pikachu-Belle', 'Pikachu-Pop-Star',
			'Pikachu-PhD', 'Pikachu-Libre', 'Gengar', 'Kangaskhan', 'Jolteon', 'Lanturn', 'Ampharos',
			'Suicune', 'Tyranitar', 'Ludicolo', 'Gardevoir', 'Mawile', 'Manectric', 'Salamence',
			'Luxray', 'Garchomp', 'Electivire', 'Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost',
			'Rotom-Fan', 'Rotom-Mow', 'Heatran', 'Cresselia', 'Emolga', 'Amoonguss', 'Galvantula',
			'Eelektross', 'Stunfisk', 'Bisharp', 'Hydreigon', 'Terrakion', 'Thundurus', 'Thundurus-Therian',
			'Landorus', 'Landorus-Therian', 'Greninja', 'Talonflame', 'Aegislash', 'Heliolisk', 'Sylveon'
		],
		requirePentagon: true
	},
	{
		name: "Doubles Hackmons Cup",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Smogon Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Smogon Triples</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540390/\">Smogon Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song'
		]
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6]
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: []
	},
	{
		name: "Triples Hackmons Cup",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Highest Stat Meta",
		desc: [
			"All Pok&eacute;mon on a team must share the same highest stat.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3509940/\">Highest Stat Meta</a>"
		],
		section: "OM of the Month",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew'],
		onValidateTeam: function (team) {
			var highest = [];
			for (var i = 0; i < team.length; i++) {
				var template = this.getTemplate(team[i].species);
				var stats = template.baseStats;
				var max = Math.max.apply(Math, Object.values(stats));
				var h = [];
				for (var j in stats) {
					if (stats[j] === max) h.push(j);
				}
				if (i === 0) {
					highest = h;
					continue;
				}
				highest = highest.intersect(h);
				if (!highest.length) {
					return ["Your team must share the same highest stat."];
				}
			}
		}
	},
	{
		name: "No Guard Galaxy",
		desc: [
			"Every move will never miss.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3514582/\">No Guard Galaxy</a>"
		],
		section: "OM of the Month",

		ruleset: ['OU'],
		banlist: ['Dynamic Punch'],
		onAccuracy: function (accuracy, target, source, move) {
			return true;
		}
	},
	{
		name: "[Seasonal] Spoopy Party",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3491902/\">Seasonal Ladder</a>"],
		section: "OM of the Month",

		team: 'randomSpoopy',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
		onSwitchIn: function (pokemon) {
			if (pokemon.species === 'Magikarp') {
				this.boost({spe:4, spd:2, def:2}, pokemon, pokemon, 'the power of dank');
			}
		},
		onModifyMove: function (move) {
			if (move.id === 'aquaring') {
				move.volatileStatus = 'wonderring';
				move.onHit = function (pokemon) {
					this.add('-start', pokemon, 'Aqua Ring');
					this.add('-message', "7.8/10, too much water - IGN");
				};
			}
			if (move.id === 'hyperbeam') {
				move.type = 'Water';
				move.accuracy = true;
				delete move.self;
				move.onTryHit = function (target, source) {
					this.add('-message', target.name + "'s fuel cannot melt " + source.name + " beams!");
				};
			}
			if (move.id === 'trickortreat') {
				switch (this.random(7)) {
				case 0:
					move.category = 'Special';
					move.type = 'Fire';
					move.basePower = 200;
					move.onTryHit = function () {
						this.add('-message', "Pumpkin bomb!");
					};
					move.onHit = function () {};
					break;
				case 1:
					move.category = 'Physical';
					move.type = 'Poison';
					move.basePower = 25;
					move.multihit = 4;
					move.onTryHit = function () {
						this.add('-message', "Toilet paper missile attack!");
					};
					move.onHit = function () {};
					break;
				case 2:
					move.onTryHit = function () {
						this.add('-message', "Yum! Chocolate!");
					};
					move.onHit = function (target, source) {
						this.heal(Math.ceil(target.maxhp * 0.5));
					};
					break;
				case 3:
					move.onTryHit = function () {
						this.add('-message', "This is a rather bland candy.");
					};
					move.onHit = function (target, source) {
						this.heal(Math.ceil(target.maxhp * 0.25));
						target.setStatus('par');
						target.addVolatile('confusion');
					};
					break;
				case 4:
					move.onTryHit = function () {
						this.add('-message', "You are about to be rotten-egged on!");
					};
					move.onHit = function (target, source) {
						target.setStatus('tox');
						target.addVolatile('torment');
					};
					break;
				case 5:
					move.category = 'Special';
					move.type = 'Dark';
					move.basePower = 500;
					move.self = {volatileStatus: 'mustrecharge'};
					move.onTryHit = function () {
						this.add('-message', "Ultimate Super Hiper Mega Awesome Beam destroyer of worlds!");
					};
					move.onHit = function (target, source) {
						this.add('-message', source.name + " was caught in the explosion!");
						source.setStatus('brn');
						source.addVolatile('disabled');
						source.addVolatile('confusion');
					};
					break;
				case 6:
					move.onTryHit = function () {
						this.add('-message', "Have some refreshment, my fellow.");
					};
					move.onHit = function (target, source) {
						target.addVolatile('aquaring');
					};
					break;
				}
			}
		},
		onResidual: function () {
			var allpokes = this.p1.active.concat(this.p2.active);
			var pokemon;
			for (var i = 0; i < allpokes.length; i++) {
				pokemon = allpokes[i];
				if (pokemon.hp && pokemon.volatiles['wonderring']) {
					this.heal(pokemon.maxhp / 8, pokemon, pokemon, 'dank memes');
				}
			}
		}
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>"
		],
		section: "Other Metagames",
		column: 2,

		ruleset: ['OU'],
		banlist: ['Allow CAP']
	},
	{
		name: "Battle Factory",
		section: "Other Metagames",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause']
	},
	{
		name: "Challenge Cup 1v1",
		section: "Other Metagames",

		team: 'randomCC',
		teamLength: {
			battle: 1
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview']
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3515725/\">Balanced Hackmons Suspect Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547823/\">Balanced Hackmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter']
	},
	{
		name: "1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3496773/\">1v1</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536109/\">1v1 Viability Ranking</a>"
		],
		section: 'Other Metagames',

		teamLength: {
			validate: [1, 3],
			battle: 1
		},
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky',
			'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew', 'Perish Song'
		]
	},
	{
		name: "Monotype",
		desc: [
			"All Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3544507/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550310/\">Monotype Resources</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Altarianite', 'Charizardite X', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Metagrossite', 'Salamencite', 'Slowbronite', 'Smooth Rock', 'Soul Dew'
		]
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, and NU or lower get +15.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3532973/\">Tier Shift</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536719/\">Tier Shift Viability Ranking</a>"
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Shadow Tag', 'Swift Swim', 'Chatter']
	},
	{
		name: "PU",
		desc: [
			"The unofficial tier below NU.",
			"&bullet; <a href=\"https://www.smogon.com/forums/forums/pu.327/\">PU</a>"
		],
		section: "Other Metagames",

		ruleset: ['NU'],
		banlist: ['NU', 'BL4', 'Chatter', 'Shell Smash + Baton Pass']
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew'
		],
		onNegateImmunity: function (pokemon, type) {
			if (type in this.data.TypeChart && this.runEvent('Immunity', pokemon, null, null, type)) return false;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		}
	},
	{
		name: "Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528058/\">Almost Any Ability</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551063/\">Almost Any Ability Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Arceus', 'Archeops', 'Bisharp', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mamoswine', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Slaking', 'Smeargle', 'Terrakion', 'Weavile', 'Xerneas', 'Yveltal',
			'Zekrom',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew', 'Chatter'
		],
		onValidateSet: function (set) {
			var bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Protean': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		}
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon gain access to either Attacking moves or Status moves of their typing, but not both at the same time.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548559/\">STABmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Diggersby', 'Keldeo', 'Porygon-Z', 'Sylveon', 'Aerodactylite', 'Altarianite', "King's Rock", 'Lopunnite', 'Metagrossite', 'Razor Fang'],
		validateSet: function (set, teamHas) {
			var statusProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Status':1}});
			if (!statusProblems.length) return;
			var attackProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Physical':1, 'Special':1}});
			if (!attackProblems.length) return;

			var problems = [];
			for (var i = 0; i < statusProblems.length; i++) {
				problems.push('(Status) ' + statusProblems[i]);
			}
			for (var i = 0; i < attackProblems.length; i++) {
				problems.push('(Attack) ' + attackProblems[i]);
			}
			return problems;
		}
	},
	{
		name: "LC UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3523929/\">LC UU</a>"],
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Bunnelby', 'Carvanha', 'Chinchou', 'Cottonee', 'Croagunk', 'Diglett',
			'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Gothita', 'Honedge', 'Larvesta',
			'Lileep', 'Magnemite', 'Mienfoo', 'Munchlax', 'Omanyte', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Scraggy',
			'Shellder', 'Snivy', 'Snubbull', 'Spritzee', 'Staryu', 'Stunky', 'Surskit', 'Timburr', 'Tirtouga', 'Vullaby',
			'Shell Smash', 'Corphish', 'Pancham', 'Vulpix', 'Zigzagoon'
		]
	},
	{
		name: "Hackmons Cup",
		section: "Other Metagames",

		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>"
		],
		section: "Other Metagames",

		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2
		},
		ruleset: ['Doubles OU'],
		banlist: ['Perish Song']
	},
	{
		name: "Averagemons",
		desc: [
			"Every Pok&eacute;mon has a stat spread of 100/100/100/100/100/100.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526481/\">Averagemons</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Sableye + Prankster', 'Shedinja', 'Smeargle', 'Venomoth',
			'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Gengarite', 'Kangaskhanite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club',
			'Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Chatter'
		]
	},
	{
		name: "Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['OU']
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3541537/\">OU Theorymon</a>"],
		section: "Other Metagames",

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Monotype Random Battle",
		section: "Other Metagames",

		team: 'randomMonotype',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",
		column: 3,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Doubles OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3485044/\">BW2 Doubles Viability Ranking</a>"],
		section: 'BW2 Doubles',
		column: 3,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",
		column: 3,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 4] Doubles Custom Game",
		section: 'Past Generations',

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 3] OU",
		section: "Past Generations",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>"
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Random Battle",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: []
	},
	{
		name: "[Gen 1] OU (tradeback)",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Random Battle",
		section: "Past Generations",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Stadium",
		section: "Past Generations",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
		{
		name: "Eos Staff Bros.",
		section: "Other Metagames",

		mod: 'eosstaffbros',
		team: 'randomOMAuth',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			// This seasonal gets a bit from Super Smash Bros., that's where the initial message comes from.
			this.add('message', "GET READY FOR THE NEXT BATTLE!");
			// This link leads to a post where all signature moves can be found so the user can use this resource while battling.
			this.add("raw|Eos Staff Bros. information can be found <a href='http://pastebin.com/nVr0aiHX'>here.</a>");
			this.add("raw|~coded by Mr. CGTNathan.");
			// This variable saves the status of a spammy conversation to be played, so it's only played once.
			this.convoPlayed = false;
 
			// This code here is used for the renaming of moves showing properly on client.
			var globalRenamedMoves = {
				
			};
			var customRenamedMoves = {};
			var allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
 
			for (var i = 0, len = allPokemon.length; i < len; i++) {
				var pokemon = allPokemon[i];
				var last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (var j = 0; j < pokemon.moveset.length; j++) {
					var moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}
					if (customRenamedMoves[pokemon.name] && customRenamedMoves[pokemon.name][moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedMoves[pokemon.name][moveData.id];
						pokemon.baseMoveset[j].move = customRenamedMoves[pokemon.name][moveData.id];
					}
				}
				if (pokemon.name === '~fender') {
					var hprat = pokemon.hp/pokemon.maxhp;
					pokemon.baseStats = {atk:276, def:164, spa:134, spd:144, spe:260};
					pokemon.maxhp = 275;
					pokemon.hp = Math.floor(pokemon.maxhp*hprat);
				}
			}
		},
		// Here we treat many things, read comments inside for information.
		onSwitchIn: function (pokemon) {
			var name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			// Add here more hacky stuff for mega abilities.
			// This happens when the mega switches in, as opposed to mega-evolving on the turn.
			var oldAbility = pokemon.ability;
			if (pokemon.template.isMega) {
				if (name === 'leafshield' && pokemon.getAbility().id !== 'chlorophyll') {
					pokemon.setAbility('chlorophyll');
					this.add('-ability', pokemon, pokemon.ability);
				}
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Bypass one mega limit.
			}
 
			// Add here special typings, done for flavour mainly.
			if (name === 'sparkychild' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Electric/Psychic');
				pokemon.typesData = [
					{type: 'Electric', suppressed: false,  isAdded: false},
					{type: 'Psychic', suppressed: false,  isAdded: false}
				];
			}
			if (name === 'arkenciel' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Fighting/Fire');
				pokemon.typesData = [
					{type: 'Fighting', suppressed: false,  isAdded: false},
					{type: 'Fire', suppressed: false,  isAdded: false}
				];
			}
			
			// Edgy switch-in sentences go here.
			// Sentences vary in style and how they are presented, so each Pokémon has its own way of sending them.
			var sentences = [];
			var sentence = '';
		   
			// Administrators.
			if (name === 'naten') {
				this.add('c|~Naten|I think I\'m getting tired of your bullshit');
			}
			if (name === 'neosoul') {
				this.add('c|~Neo Soul|Ayyy lmao, whaddup fam?');
			}
			if (name === 'amtesla') {
				this.add('c|~AM Tesla|A wild creampuff approaches!');
			}
			if (name === 'fender') {
				this.add('c|Scrub User|WOW!! Hackkker what are you doing!? Play fair!!');
				this.add('c|~fender|no xaa');
			}
			if (name === 'nineage') {
				this.add('c|~Nineage|Fuck the police');
			}
			if (name === 'arkenciel') {
				this.add('c|~ArkenCiel|It\'s okay to feel helpless. You\'re just being yourself.');
			}
			
			// Leaders
			if (name === 'dreameatergengar') {
				this.add('c|&Dream Eater Gengar|Will dream eater gengar be viable one day?');
			}
			if (name === 'sparkychild') {
				this.add('c|&sparkychild|t-this is gonna be fun!~ n_n');
			}
			if (name === 'eosbot') {
				this.add('c|&Eosbot|beep boop');
			}
			if (name === 'masterfloat') {
				this.add('c|&Master Float|I\'m just floating around, minding my own business. feelsgd');
			}
			if (name === 'piersnivans') {
				this.add('c|&Piers Niνans|Let\'s go, Captain!');
			}
			if (name === 'allendbb') {
				this.add('c|&AllenDBB|( ͡° ͜ʖ ͡°) D A B I C B O I ( ͡° ͜ʖ ͡°)');
			}
			
			// Moderators
			if (name === 'piscean') {
				this.add('c|@Piscean|You\'re a new user, I can tell.');
			}
			if (name === 'princesshigh') {
				this.add('c|@PrincessHigh|Prepare yourself for the goddess herself ~ ');
			}
			if (name === 'chiefsokka') {
				this.add('c|@Chief Sokka|Paging Doctor Sokka!');
			}
			if (name === 'dankrabbit') {
				this.add('c|@Dank Rabbit|Your favorite anime is shit.');
			}
			if (name === 'franchescoenzo') {
				this.add('c|@FranchescoEnzo|Welcome to the rice fields!');
			}
			if (name === 'bostonian') {
				this.add('c|@Bostonian|I\'m driving by with something to end you all!');
			}
			
			// Drivers.			
			if (name === 'mrcgtnathan') {
				this.add('c|%Mr. CGTNathan|Welcome to Super Staff Bros. May I show you the door?');
			}
			if (name === 'swlneski') {
				this.add('c|%SWL Neßki|Flying Master Race');
			}
			if (name === 'allianceerica') {
				this.add('c|%Alliance - Erica|Mhm, hello. How are you?');
			}
			if (name === 'koikazma') {
				this.add('c|%Koikazma|YOU CALLED FOR THE SWAG?');
			}
			if (name === 'xvenomiizz') {
				this.add('c|%xVeNoMiiZz|Wallside Windows pitching change. xVeNoMiiZz has entered the game.');
			}
			if (name === 'trickster') {
				this.add('c|%Trickster|(◕‿◕✿)');
			}
			
			// Operators.			
			if (name === 'duskcryptis') {
				this.add('c|$Dusk Cryptis|So I need a new league...');
			}
			if (name === 'crystalvanitas') {
				this.add('c|$Crystal Vanitas|It was only a rumor - Sephiroth');
			}
			if (name === 'sundar18') {
				this.add('c|$Sundar18|Prepare to to be blazed by my metal fury!');
			}
			if (name === 'seoking') {
				this.add('c|$SeoKing|bring dat ass here boi');
			}
			if (name === 'vi') {
				this.add('c|$Vi (Victini)|/me crashes into the battlefield with a fire explosion!');
			}
			/*if (name === 'vileman') {
				this.add('c|$Vileman|Hi');
			}*/
			if (name === 'audinoprimal') {
				this.add('c|$AudinoPrimal|I\'m swear i\'m not cancer.. Please I try to help users.. ');
			}
			if (name === 'alphaninja') {
				this.add('c|$Alpha Ninja|Yo, I\'m an annoying bulky pokémon.');
			}
			
			// Voices.			
			if (name === 'dusktesting') {
				this.add('c|+Dusk Testing|Lights Out');
			}
			/*if (name === 'hallie') {
				this.add('c|+Hallie|Hi');
			}*/
			if (name === 'swlgryphon') {
				this.add('c|+SWL Gryphon|h-hi im birb');
			}
			/*if (name === 'pkkaiser') {
				this.add('c|+Pk-Kaiser|Hi');
			}
			if (name === 'njnp') {
				this.add('c|+NJNP|Hi');
			}*/
			if (name === 'solorbeam') {
				this.add('c|+Solorbeam|Bitches gon die today');
			}
			/*if (name === 'jd') {
				this.add('c|+jd|Can I have admin?');
			}*/
			if (name === 'kammi') {
				this.add('c|+Kammi|^^(o+++o)^^');
			}
			if (name === 'panpawn') {
				this.add('c|+panpawn|ayy lmao');
			}
			if (name === 'safetyshark') {
				this.add('c|+Safety Shark|Cupcakes are bad for your health.');
			}
		},
		
		// Various
		onModifyPriority: function (priority, pokemon, target, move) {
			var name = toId(pokemon.name);
			if (name === 'franchescoenzo' && move.id === 'filth') {
				if (pokemon.activeTurns > 1) {
					return priority + 0;
				} else {
					return priority + 4;
				}
			}
			if (name === 'bostonian' && move.id === 'doubletieraddition') {
				if (pokemon.activeTurns > 1) {
					return priority + 0;
				} else {
					return priority + 4;
				}
			}
		},
		// Add here salty tears, that is, custom faint phrases.
		onFaint: function (pokemon) {
			if (pokemon.illusioTransformed) {
				pokemon.name = '+Illusio';
				pokemon.illusioTransformed = false;
			}
			var name = toId(pokemon.name);
			var sentences = [];
			var sentence = '';
 
			if (name === 'naten') {
				this.add('c|~Naten|#BlameNine');
			}
			if (name === 'neosoul') {
				this.add('c|~Neo Soul|#freewolf Hello? Nah nigga......fuck this...');
			}
			if (name === 'amtesla') {
				this.add('c|~AM Tesla|A true tesla never dies even when he\'s killed');
			}
			if (name === 'fender') {
				this.add('c|~fender|I blame naten');
			}
			if (name === 'nineage') {
				this.add('c|~Nineage|Fender fucked up');
			}
			if (name === 'arkenciel') {
				this.add('c|~ArkenCiel|Haha, so you\'re not as helpless as you seem. Later.');
			}
			
			// Leaders
			if (name === 'dreameatergengar') {
				this.add('c|&Dream Eater Gengar|Ghosts never faint, they vanish into the darkness to restore energy. I will come back soon.');
			}
			if (name === 'sparkychild') {
				this.add('c|&sparkychild|Trickster!....~');
				this.add('c|&sparkychild|h-help....~');
			}
			if (name === 'eosbot') {
				this.add('c|&Eosbot|beep boooooooop.......');
			}
			if (name === 'masterfloat') {
				this.add('c|&Master Float|Shitzel. feelsbd');
			}
			if (name === 'piersnivans') {
				this.add('c|&Piers Niνans|I won\'t be going with you after all, Chris.....');
			}
			if (name === 'allendbb') {
				this.add('c|&AllenDBB|gg ( ͡° ʖ̯ ͡°)');
			}
			
			// Moderators
			if (name === 'piscean') {
				this.add('c|@Piscean|Stop that\'s bullying! ლ(ಥ Д ಥ )ლ');
			}
			if (name === 'princesshigh') {
				this.add('c|@PrincessHigh|You have defeated me.... Oh well back to netflix');
			}
			if (name === 'chiefsokka') {
				this.add('c|@Chief Sokka|Hey, im not a miracle worker >:(!!');
			}
			if (name === 'dankrabbit') {
				this.add('c|@Dank Rabbit|It\'s corpse party all over again ;A; ');
			}
			if (name === 'franchescoenzo') {
				this.add('c|@FranchescoEnzo|b-b0ss...');
			}
			if (name === 'bostonian') {
				this.add('c|@Bostonian|Well crap, my engine broke down. :(');
			}
			
			// Drivers.			
			if (name === 'mrcgtnathan') {
				this.add('c|%Mr. CGTNathan|**MY ANKLE!**');
			}
			if (name === 'swlneski') {
				this.add('c|%SWL Neßki|Wasn\'t motivated to care enough');
			}
			if (name === 'allianceerica') {
				this.add('c|%Alliance - Erica|/me hopes you take care and stay safe.');
			}
			if (name === 'koikazma') {
				this.add('c|%Koikazma|I DID IT FOR HER');
			}
			if (name === 'xvenomiizz') {
				this.add('c|%xVeNoMiiZz|1, 2, 3 Strikes, you\'re out, at the old ball game.');
			}
			if (name === 'trickster') {
				this.add('c|%Trickster|(¤﹏¤✿)');
			}
			
			// Operators.
			
			if (name === 'duskcryptis') {
				this.add('c|$Dusk Cryptis|Fuck it I\'m done I quit');
			}
			if (name === 'crystalvanitas') {
				this.add('c|$Crystal Vanitas|I hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate hate you! - Kefka');
			}
			if (name === 'sundar18') {
				this.add('c|$Sundar18|I shall never die, as I\'m Immortal!');
			}
			if (name === 'seoking') {
				this.add('c|$SeoKing|I hope you get meme\'d so hard');
			}
			if (name === 'vi') {
				this.add('c|$Vi (Victini)|:S');
			}
			/*if (name === 'vileman') {
				this.add('c|$Vileman|Hi');
			}*/
			if (name === 'audinoprimal') {
				this.add('c|$AudinoPrimal|FUCK! Naten Caught Me...');
			}
			if (name === 'alphaninja') {
				this.add('c|$Alpha Ninja|Fuck off hax0r');
			}
			
			// Voices.
			
			if (name === 'dusktesting') {
				this.add('c|+Dusk Testing|Ban Me?');
			}
			/*if (name === 'hallie') {
				this.add('c|+Hallie|Hi');
			}*/
			if (name === 'swlgryphon') {
				this.add('c|+SWL Gryphon|rip in birb');
			}
			/*if (name === 'pkkaiser') {
				this.add('c|+Pk-Kaiser|Hi');
			}
			if (name === 'njnp') {
				this.add('c|+NJNP|Hi');
			}*/
			if (name === 'solorbeam') {
				this.add('c|+Solorbeam?|I\'m not a whore i\'m an entrepreneur!!');
			}
			/*if (name === 'jd') {
				this.add('c|+jd|No? Ok :(');
			}*/
			if (name === 'kammi') {
				this.add('c|+Kammi|i said gg but i really meant fuck you.');
			}
			if (name === 'panpawn') {
				this.add('c|+panpawn|rip');
			}
			if (name === 'safetyshark') {
				this.add('c|+Safety Shark|+leave');
			}
		},
		
		onModifyPokemon: function (pokemon) {
			var name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			// qtrx only has one move anyway. This isn't implemented for Cathy since her moves are all custom. Don't trick her a Scarf!
			if (name !== 'qtrx' && name !== 'Cathy') {
				var moves = pokemon.moveset;
				if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
					for (var i = 0; i < 3; i++) {
						if (!moves[i].disabled) {
							pokemon.disableMove(moves[i].id, false);
							moves[i].disabled = true;
						}
					}
				}
			}
			for (var p in pokemon.side.pokemon) {
				if (pokemon.side.pokemon[p].name === '%Pikachuun') {
					pokemon.side.pokemon[p].baseStats = {atk:348, def:155, spa:266, spd:207, spe:419};
					//This corresponds to 70 / 132 / 72 / 120 / 90 / 149 Stats, because I keep forgetting them...
				}
				if (pokemon.side.pokemon[p].name === '+insanelegend') {
					pokemon.side.pokemon[p].baseStats = {hp:334, atk:150, def:217, spa:129, spd:138, spe:108};
				}
				if (pokemon.side.pokemon[p].name === '+Mamp') {
					pokemon.side.pokemon[p].baseStats = {hp:324, atk:201, def:225, spa:284, spd:224, spe:312};
				}
			}
		},
		// Specific residual events for custom moves.
		// This allows the format to have kind of custom side effects and volatiles.
		onResidual: function (battle) {
			for (var s in battle.sides) {
				var thisSide = battle.sides[s];
				if (thisSide.premonTimer > 4) {
					thisSide.premonTimer = 0;
					thisSide.premonEffect = true;
				} else if (thisSide.premonTimer > 0) {
					if (thisSide.premonTimer === 4) thisSide.addSideCondition('safeguard');
					thisSide.premonTimer++;
				}
				for (var p in thisSide.active) {
					var pokemon = thisSide.active[p];
					var name = toId(pokemon.name);

					if (pokemon.side.premonEffect) {
						pokemon.side.premonEffect = false;
						this.add('c|@zdrup|...dary! __**LEGENDARY!**__');
						this.boost({atk:1, def:1, spa:1, spd:1, spe:1, accuracy:1}, pokemon, pokemon, 'legendary premonition');
						pokemon.addVolatile('aquaring');
						pokemon.addVolatile('focusenergy');
					}
					if (pokemon.volatiles['paranoid'] && !pokemon.fainted && (pokemon.hp !== pokemon.maxhp)) {
						this.heal(pokemon.maxhp / 8, pokemon, pokemon);
						this.add('-message', pokemon.name + "'s stalling healed itself!");
					}
					if (pokemon.volatiles['unownaura'] && !pokemon.fainted && !pokemon.illusion) {
						this.add('-message', "Your keyboard is reacting to " + pokemon.name + "'s Unown aura!");
						if (this.random(2) === 1) {
							this.useMove('trickroom', pokemon);
						} else {
							this.useMove('wonderroom', pokemon);
						}
					}
					if (name === 'beowulf' && !pokemon.fainted && !pokemon.illusion) {
						this.add('c|@Beowulf|/me buzzes loudly!');
					}
					if (name === 'cathy' && !pokemon.fainted && !pokemon.illusion) {
						var messages = [
							'kicking is hilarious!',
							'flooding the chat log with kicks makes me lol',
							'please don\'t stop me from having fun',
							'having fun is great!',
							'isn\'t this so much fun?',
							'let\'s all have fun by spamming the channel!',
							'FUN FUN FUN',
							'SO MUCH FUN!',
							'^_^ fun times ^_^',
							'/me is having so much fun!',
							'having fun is great!',
							'/me thinks spam is fun!',
							'/me loves spamming this channel, because it\'s completely inconsequential!',
							'this is just the internet -- nothing matters!',
							'let\'s have fun ALL NIGHT LONG!!!!!!!!!!!!!!!!!!!!!!'
						];
						this.add('c|HappyFunTimes|' + messages[this.random(15)]);
					}
					if (pokemon.volatiles['parry']) {
						// Dell hasn't been attacked.
						pokemon.removeVolatile('parry');
						this.add('-message', "Untouched, the Aura Parry grows stronger still!");
						this.boost({def:1, spd:1}, pokemon, pokemon, 'Aura Parry');
					}
					if (name === 'snaquaza' && pokemon.template.isMega && !pokemon.ascended) {
						if (pokemon.ascensionCount < 0) {
							this.add('-message', "@Snaquaza is too powerful for this metagame, and needs to ascend to Anything Goes!");
							this.add('-message', "@Snaquaza has 3 turns remaining before he faints automatically! Use Ascension to get him into Anything Goes as soon as possible!");
							pokemon.ascensionCount = 1;
						} else if (pokemon.ascensionCount !== 3) {
							this.add('-message', "@Snaquaza has " + (3 - pokemon.ascensionCount) + " turns remaining before he faints automatically! Use Ascension to get him into Anything Goes as soon as possible!");
							pokemon.ascensionCount++;
						} else {
							this.add('-message', "@Snaquaza was unable to ascend in time!");
							pokemon.ascensionCount++;
							pokemon.ascended = -1;
							pokemon.faint();
						}
					}
				}
				for (var q in thisSide.pokemon) {
					if (q.name === '%Pikachuun') {
						var hprat = q.hp/q.maxhp;
						q.baseStats = {atk:348, def:155, spa:266, spd:207, spe:419};
						//This corresponds to 70 / 132 / 72 / 120 / 90 / 149 Stats, because I keep forgetting them...
					}
					if (q.name === '+insanelegend') {
						var hprat = q.hp/q.maxhp;
						q.baseStats = {hp:334, atk:150, def:217, spa:129, spd:138, spe:108};
					}
				}
			}
		},
		// This is where the signature moves are actually done.
		onModifyMove: function (move, pokemon, target) {
			var name = toId(pokemon.illusion && move.sourceEffect === 'allyswitch' ? pokemon.illusion.name : pokemon.name);
			// Prevent visual glitch with Spell Steal.
			move.effectType = 'Move';
			// Just because it's funny. It still is.

			// Room Owner signature moves.

			/*if (move.id === 'vividdreams' && name === 'naten') {
				move.name = 'Vivid Dreams';
				this.add("c|~Naten|Oh shit.");
			}*/
			if (move.id === 'fakeout' && name === 'swlneski' && pokemon.ability === 'aerialrage') {
				delete move.secondary;
				delete move.secondaries;
				move.secondaries = [{chance: 100, volatileStatus: 'flinch'}];
				move.self = {boosts: {atk:-1}};
			}
			if (move.id === 'extremespeed' && name === 'swlneski' && pokemon.ability === 'aerialrage') {
				move.self = {boosts: {atk:-1}};
			}
		}
	},
	{
		name: "One Of Us",
		section: "Other Metagames",

		mod: 'oneofus',
		team: 'randomOMAuth',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			// This seasonal gets a bit from Super Smash Bros., that's where the initial message comes from.
			this.add('message', "GET READY FOR THE NEXT BATTLE!");
			// This link leads to a post where all signature moves can be found so the user can use this resource while battling.
			this.add("raw|Eos Staff Bros. information can be found <a href='http://pastebin.com/nVr0aiHX'>here.</a>");
			this.add("raw|~coded by Mr. CGTNathan.");
			// This variable saves the status of a spammy conversation to be played, so it's only played once.
			this.convoPlayed = false;
 
			// This code here is used for the renaming of moves showing properly on client.
			var globalRenamedMoves = {
				
			};
			var customRenamedMoves = {};
			var allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
 
			for (var i = 0, len = allPokemon.length; i < len; i++) {
				var pokemon = allPokemon[i];
				var last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (var j = 0; j < pokemon.moveset.length; j++) {
					var moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}
					if (customRenamedMoves[pokemon.name] && customRenamedMoves[pokemon.name][moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedMoves[pokemon.name][moveData.id];
						pokemon.baseMoveset[j].move = customRenamedMoves[pokemon.name][moveData.id];
					}
				}
				if (pokemon.name === '~fender') {
					var hprat = pokemon.hp/pokemon.maxhp;
					pokemon.baseStats = {atk:276, def:164, spa:134, spd:144, spe:260};
					pokemon.maxhp = 275;
					pokemon.hp = Math.floor(pokemon.maxhp*hprat);
				}
			}
		},
		// Here we treat many things, read comments inside for information.
		onSwitchIn: function (pokemon) {
			var name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			// Add here more hacky stuff for mega abilities.
			// This happens when the mega switches in, as opposed to mega-evolving on the turn.
			var oldAbility = pokemon.ability;
			if (pokemon.template.isMega) {
				if (name === 'leafshield' && pokemon.getAbility().id !== 'chlorophyll') {
					pokemon.setAbility('chlorophyll');
					this.add('-ability', pokemon, pokemon.ability);
				}
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Bypass one mega limit.
			}
 
			// Add here special typings, done for flavour mainly.
			if (name === 'voidchrono' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Fighting/Fire');
				pokemon.typesData = [
					{type: 'Fighting', suppressed: false,  isAdded: false},
					{type: 'Fire', suppressed: false,  isAdded: false}
				];
			}
			if (name === 'desolatenightmare' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Electric/Dark');
				pokemon.typesData = [
					{type: 'Fighting', suppressed: false,  isAdded: false},
					{type: 'Fire', suppressed: false,  isAdded: false}
				];
			}
			if (name === 'upstrokingtotodile' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Water/Dragon');
				pokemon.typesData = [
					{type: 'Water', suppressed: false,  isAdded: false},
					{type: 'Dragon', suppressed: false,  isAdded: false}
				];
			}
			
			// Edgy switch-in sentences go here.
			// Sentences vary in style and how they are presented, so each Pokémon has its own way of sending them.
			var sentences = [];
			var sentence = '';
		   
			// Room Owners
			if (name === 'mrcgtnathan') {
				this.add('c|#Mr. CGTNathan|Welcome to One Of Us. May I show you the door?');
			}
			if (name === 'ikray') {
				this.add('c|#iKray|Cupcakes are bad for your health.');
			}
			if (name === 'jzb') {
				this.add('c|#Jzb|Cupcakes are bad for your health.');
			}
			if (name === 'kgbeast') {
				this.add('c|#KGBeast|Cupcakes are bad for your health.');
			}
			if (name === 'ntgs') {
				this.add('c|#NTGs|hax.....Hax.....HAx.....HAX.....HAAAAAAAAAAAAAAAAAAX');
			}
			if (name === 'oreohunter') {
				this.add('c|#Oreo Hunter|get ready to get rest m8');
			}
			if (name === 'ralker') {
				this.add('c|#Ralker|BANG BANG INTO THE ROOM');
			}
			if (name === 'sonichoot') {
				this.add('c|#Sonic Hoot|Face the wrath of Hoot!');
			}
			if (name === 'voidchrono') {
				this.add('c|#Void Chrono|Don\'t let your dreams be memes!');
			}
			if (name === 'voidcryptis') {
				this.add('c|#Void Cryptis|So I need a new league...');
			}
			if (name === 'xpiratex') {
				this.add('c|#xPiratex|Cupcakes are bad for your health.');
			}
			if (name === 'safetyshark') {
				this.add('c|#Safety Shark|Cupcakes are bad for your health.');
			}
			
			// Moderators
			if (name === 'simonsciences') {
				this.add('c|@Simon Sciences|shall we begin the experiment?');
			}
			
			// Drivers
			if (name === 'desolatenightmare') {
				this.add('c|%Desolate Nightmare|I\'m tired, what do you want?');
			}
			if (name === 'icarus') {
				this.add('c|%Icarus|Cupcakes are bad for your health.');
			}
			if (name === 'impkswiss') {
				this.add('c|%Imp Kswiss|Cupcakes are bad for your health.');
			}
			if (name === 'mariav') {
				this.add('c|%Maria V|KILL IT WITH FIRE!!!');
			}
			if (name === 'tacoboymc') {
				this.add('c|%TacoboyMC|Rollin in');
			}
			if (name === 'upstrokingtotodile') {
				this.add('c|%Upstroking Totodile|Thx Mom');
			}
			
			// Voices
			if (name === 'lttesla') {
				this.add('c|+Lt. Tesla|A wild creampuff approaches!');
			}
			if (name === 'neosoul') {
				this.add('c|+Neo Soul|Ayyy lmao, whaddup fam?');
			}
			if (name === 'vinpyre') {
				this.add('c|+Vin Pyre|Cupcakes are bad for your health.');
			}
			if (name === 'warlic') {
				this.add('c|+warlic|Salutations good Sir or Madam user.');
			}
		},
		
		// Various
		onModifyPriority: function (priority, pokemon, target, move) {
			var name = toId(pokemon.name);
			if (name === 'franchescoenzo' && move.id === 'filth') {
				if (pokemon.activeTurns > 1) {
					return priority + 0;
				} else {
					return priority + 4;
				}
			}
			if (name === 'bostonian' && move.id === 'doubletieraddition') {
				if (pokemon.activeTurns > 1) {
					return priority + 0;
				} else {
					return priority + 4;
				}
			}
		},
		// Add here salty tears, that is, custom faint phrases.
		onFaint: function (pokemon) {
			if (pokemon.illusioTransformed) {
				pokemon.name = '+Illusio';
				pokemon.illusioTransformed = false;
			}
			var name = toId(pokemon.name);
			var sentences = [];
			var sentence = '';
 
			// Room Owners	
			if (name === 'mrcgtnathan') {
				this.add('c|#Mr. CGTNathan|Fun.');
			}
			if (name === 'ikray') {
				this.add('c|#iKray|Cupcakes are bad for your health.');
			}
			if (name === 'jzb') {
				this.add('c|#Jzb|Cupcakes are bad for your health.');
			}
			if (name === 'kgbeast') {
				this.add('c|#KGBeast|Cupcakes are bad for your health.');
			}
			if (name === 'ntgs') {
				this.add('c|#NTGs|Congratz on beating one of my hax pokes, till the next time with a different one ;)');
			}
			if (name === 'oreohunter') {
				this.add('c|#Oreo Hunter|i got rest m8 ');
			}
			if (name === 'ralker') {
				this.add('c|#Ralker|I hate everyone, except Kray. Kray is bae');
			}
			if (name === 'sonichoot') {
				var delta = ['#Mr. CGTNathan', '#Void Chrono', '#Oreo Hunter', '%UpstrokingTotodile', '%Desolate Nightmare', '%Maria V', '#Ralker', '#KGBeast', '%Icarus'][this.random(9)];
				this.add('c|' + delta + '|Hoooooooooooottttt did yoooou loooooose');
			}
			if (name === 'voidchrono') {
				this.add('c|#Void Chrono|You can\'t ヽ༼◐ل͜◑༽ﾉ defeat ヽ༼◐ل͜◑༽ﾉ the squid!');
			}
			if (name === 'voidcryptis') {
				this.add('c|#Void Cryptis|Fuck it I\'m done I quit');
			}
			if (name === 'xpiratex') {
				this.add('c|#xPiratex|Whatever, I\'m too fucking old for this shit.');
			}
			if (name === 'safetyshark') {
				this.add('c|#Safety Shark|+leave');
			}
			
			// Moderators
			if (name === 'simonsciences') {
				this.add('c|@Simon Sciences|FFFFFFFFFFFFFFFF');
			}
			
			// Drivers
			if (name === 'desolatenightmare') {
				this.add('c|%Desolate Nightmare|Welp, I tried. I\'m going back to sleep. Wake me up when I give a shit.');
			}
			if (name === 'icarus') {
				this.add('c|%Icarus|Cupcakes are bad for your health.');
			}
			if (name === 'impkswiss') {
				this.add('c|%Imp Kswiss|Cupcakes are bad for your health.');
			}
			if (name === 'mariav') {
				this.add('c|%Maria V|AHH! Fire! My greatest weakness! Dammit, Nightmare!');
			}
			if (name === 'tacoboymc') {
				this.add('c|%TacoboyMC|RAWWRRRRrrrrr..........r');
			}
			if (name === 'upstrokingtotodile') {
				var phrases = ['You\'re not my dad!', '¡Tú no eres mi padre!'][this.random(2)];
				this.add('c|%Upstroking Totodile|' + phrases);
			}
			// Voices
			if (name === 'lttesla') {
				this.add('c|+Lt. Tesla|A true tesla never dies even when he\'s killed');
			}			
			if (name === 'neosoul') {
				this.add('c|+Neo Soul|#freewolf Hello? Nah nigga......fuck this...');
			}
			if (name === 'vinpyre') {
				this.add('c|+Vin Pyre|Cupcakes are bad for your health.');
			}
			if (name === 'warlic') {
				this.add('c|+warlic|warlic*');
			}
		},
		
		onModifyPokemon: function (pokemon) {
			var name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			// qtrx only has one move anyway. This isn't implemented for Cathy since her moves are all custom. Don't trick her a Scarf!
			if (name !== 'qtrx' && name !== 'Cathy') {
				var moves = pokemon.moveset;
				if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
					for (var i = 0; i < 3; i++) {
						if (!moves[i].disabled) {
							pokemon.disableMove(moves[i].id, false);
							moves[i].disabled = true;
						}
					}
				}
			}
			for (var p in pokemon.side.pokemon) {
				if (pokemon.side.pokemon[p].name === '%UpstrokingTotodile') {
					pokemon.side.pokemon[p].baseStats = {hp:373, atk:301, def:236, spa:194, spd:202, spe:202};
					//This corresponds to 70 / 132 / 72 / 120 / 90 / 149 Stats, because I keep forgetting them...
				}
				if (pokemon.side.pokemon[p].name === '+insanelegend') {
					pokemon.side.pokemon[p].baseStats = {hp:334, atk:150, def:217, spa:129, spd:138, spe:108};
				}
				if (pokemon.side.pokemon[p].name === '+Mamp') {
					pokemon.side.pokemon[p].baseStats = {hp:324, atk:201, def:225, spa:284, spd:224, spe:312};
				}
			}
		},
		// Specific residual events for custom moves.
		// This allows the format to have kind of custom side effects and volatiles.
		onResidual: function (battle) {
			for (var s in battle.sides) {
				var thisSide = battle.sides[s];
				if (thisSide.premonTimer > 4) {
					thisSide.premonTimer = 0;
					thisSide.premonEffect = true;
				} else if (thisSide.premonTimer > 0) {
					if (thisSide.premonTimer === 4) thisSide.addSideCondition('safeguard');
					thisSide.premonTimer++;
				}
				for (var p in thisSide.active) {
					var pokemon = thisSide.active[p];
					var name = toId(pokemon.name);

					if (pokemon.side.premonEffect) {
						pokemon.side.premonEffect = false;
						this.add('c|@zdrup|...dary! __**LEGENDARY!**__');
						this.boost({atk:1, def:1, spa:1, spd:1, spe:1, accuracy:1}, pokemon, pokemon, 'legendary premonition');
						pokemon.addVolatile('aquaring');
						pokemon.addVolatile('focusenergy');
					}
					if (pokemon.volatiles['paranoid'] && !pokemon.fainted && (pokemon.hp !== pokemon.maxhp)) {
						this.heal(pokemon.maxhp / 8, pokemon, pokemon);
						this.add('-message', pokemon.name + "'s stalling healed itself!");
					}
					if (pokemon.volatiles['unownaura'] && !pokemon.fainted && !pokemon.illusion) {
						this.add('-message', "Your keyboard is reacting to " + pokemon.name + "'s Unown aura!");
						if (this.random(2) === 1) {
							this.useMove('trickroom', pokemon);
						} else {
							this.useMove('wonderroom', pokemon);
						}
					}
					if (name === 'beowulf' && !pokemon.fainted && !pokemon.illusion) {
						this.add('c|@Beowulf|/me buzzes loudly!');
					}
					if (name === 'cathy' && !pokemon.fainted && !pokemon.illusion) {
						var messages = [
							'kicking is hilarious!',
							'flooding the chat log with kicks makes me lol',
							'please don\'t stop me from having fun',
							'having fun is great!',
							'isn\'t this so much fun?',
							'let\'s all have fun by spamming the channel!',
							'FUN FUN FUN',
							'SO MUCH FUN!',
							'^_^ fun times ^_^',
							'/me is having so much fun!',
							'having fun is great!',
							'/me thinks spam is fun!',
							'/me loves spamming this channel, because it\'s completely inconsequential!',
							'this is just the internet -- nothing matters!',
							'let\'s have fun ALL NIGHT LONG!!!!!!!!!!!!!!!!!!!!!!'
						];
						this.add('c|HappyFunTimes|' + messages[this.random(15)]);
					}
					if (pokemon.volatiles['parry']) {
						// Dell hasn't been attacked.
						pokemon.removeVolatile('parry');
						this.add('-message', "Untouched, the Aura Parry grows stronger still!");
						this.boost({def:1, spd:1}, pokemon, pokemon, 'Aura Parry');
					}
					if (name === 'snaquaza' && pokemon.template.isMega && !pokemon.ascended) {
						if (pokemon.ascensionCount < 0) {
							this.add('-message', "@Snaquaza is too powerful for this metagame, and needs to ascend to Anything Goes!");
							this.add('-message', "@Snaquaza has 3 turns remaining before he faints automatically! Use Ascension to get him into Anything Goes as soon as possible!");
							pokemon.ascensionCount = 1;
						} else if (pokemon.ascensionCount !== 3) {
							this.add('-message', "@Snaquaza has " + (3 - pokemon.ascensionCount) + " turns remaining before he faints automatically! Use Ascension to get him into Anything Goes as soon as possible!");
							pokemon.ascensionCount++;
						} else {
							this.add('-message', "@Snaquaza was unable to ascend in time!");
							pokemon.ascensionCount++;
							pokemon.ascended = -1;
							pokemon.faint();
						}
					}
				}
				for (var q in thisSide.pokemon) {
					if (q.name === '%Pikachuun') {
						var hprat = q.hp/q.maxhp;
						q.baseStats = {atk:348, def:155, spa:266, spd:207, spe:419};
						//This corresponds to 70 / 132 / 72 / 120 / 90 / 149 Stats, because I keep forgetting them...
					}
					if (q.name === '+insanelegend') {
						var hprat = q.hp/q.maxhp;
						q.baseStats = {hp:334, atk:150, def:217, spa:129, spd:138, spe:108};
					}
				}
			}
		},
		// This is where the signature moves are actually done.
		onModifyMove: function (move, pokemon, target) {
			var name = toId(pokemon.illusion && move.sourceEffect === 'allyswitch' ? pokemon.illusion.name : pokemon.name);
			// Prevent visual glitch with Spell Steal.
			move.effectType = 'Move';
			// Just because it's funny. It still is.

			// Room Owner signature moves.

			/*if (move.id === 'vividdreams' && name === 'naten') {
				move.name = 'Vivid Dreams';
				this.add("c|~Naten|Oh shit.");
			}*/
			if (move.id === 'fakeout' && name === 'swlneski' && pokemon.ability === 'aerialrage') {
				delete move.secondary;
				delete move.secondaries;
				move.secondaries = [{chance: 100, volatileStatus: 'flinch'}];
				move.self = {boosts: {atk:-1}};
			}
			if (move.id === 'extremespeed' && name === 'swlneski' && pokemon.ability === 'aerialrage') {
				move.self = {boosts: {atk:-1}};
			}
		}
	}
];
