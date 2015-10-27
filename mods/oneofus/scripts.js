exports.BattleScripts = {
	randomOMAuthTeam: function (side) {
		var team = [];
		var variant = this.random(2);
		// Hardcoded sets of the available Pokémon.
		var sets = {
			// Room Owners
			'#Mr. CGTNathan': {
				species: 'Cofagrigus', ability: 'Graveyard', item: 'Leftovers', gender: 'M',
				moves: ['destinybond', 'recover', 'healbell'],
				baseSignatureMove: 'graveyardstrike', signatureMove: "Graveyard Strike",
				evs: {hp:252, def:4, spd:252}, ivs: {spe:0, atk:0}, nature: 'Sassy'
			},
			/*'#dialga3021': {
				species: 'Sceptile-Mega', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			'#iKray': {
				species: 'Sceptile-Mega', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			'#Jzb': {
				species: 'Meloetta', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			'#KGBeast': {
				species: 'Gliscor', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			'#NTGs': {
				species: 'Dragonite', ability: 'Ultimate Hax', item: 'Weakness Policy', gender: 'M',
				moves: ['iron head', 'waterfall', 'dragon dance', 'steel wing', 'earthquake', 'thunder punch'],
				baseSignatureMove: 'megahax', signatureMove: "Mega Hax",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},*/
			'#Oreo Hunter': {
				species: 'Metagross-Mega', ability: 'Steel Heart', item: 'Life Orb', gender: 'M',
				moves: [['bullet punch', 'meteor mash'][this.random(2)], 'zen headbutt', 'close combat', 'earthquake', 'recover'],
				baseSignatureMove: 'oreoonslaught', signatureMove: "Oreo Onslaught",
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant'
			},
			'#Ralker': {
				species: 'Umbreon', ability: 'Dark Presence', item: 'Leftovers', gender: 'M', shiny: true,
				moves: ['wish', 'protect', ['foul play', 'toxic', 'will-o-wisp', 'knockoff', 'taunt'][this.random(5)]],
				baseSignatureMove: 'hellunleashed', signatureMove: "Hell Unleashed",
				evs: {hp:248, def:104, spd:156}, nature: 'Calm'
			},
			'#Sonic Hoot': {
				species: 'Poliwrath', ability: 'Harvesting', item: 'Sitrus Berry', gender: 'M',
				moves: ['waterfall', ['ice punch', 'sucker punch'][this.random(2)], 'bulk-up'],
				baseSignatureMove: 'rocklemon', signatureMove: "Rock lemon",
				evs: {hp:252, def:252, spd:4}, nature: 'Impish'
			},
			'#Void Chrono': {
				species: 'Victini', ability: 'Objection!', item: 'Air Balloon', gender: 'M',
				moves: ['will-o-wisp', 'fire punch', 'extremespeed'],
				baseSignatureMove: 'ayylmao', signatureMove: "ayylmao",
				evs: {hp:124, atk: 132, spe:252}, nature: 'Jolly'
			},
			'#Void Cryptis': {
				species: 'Latios-Mega', ability: 'Leaguehopper', item: 'Soul Dew', gender: 'M', shiny: true,
				moves: ['dracometeor', ['energyball', 'icebeam'][this.random(2)], 'psyshock', ['reflect', 'lightscreen'][this.random(2)]],
				baseSignatureMove: 'roomowner', signatureMove: "Room Owner",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid'
			},
			/*'#xPiratex': {
				species: 'Lilligant', ability: 'Irresistible Charm', item: 'Assault Vest', gender: 'F',
				moves: ['flamethrower', 'energy ball', 'hurricane', 'spore', 'nasty plot', 'scald', 'ice beam', 'earth power', 'sludge wave', 'moonblast'],
				baseSignatureMove: 'ihaveavagina', signatureMove: "I HAVE A VAGINA",
				evs: {hp:252, spa:252, spe:4}, nature: 'Modest'
			},*/
			'#Safety Shark': {
				species: 'Garchomp', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			
			// Moderators
			'@Simon Sciences': [
				{species: 'Venomoth', ability: 'Simonitis', item: 'Leftovers', gender: 'M',
				moves: ['searing shot', 'earth power', 'ice beam'],
				baseSignatureMove: 'quivernido', signatureMove: "Quivernido",
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid'},
				{species: 'Altaria-Mega', ability: 'Simonitis', item: 'Fairy Gem', gender: 'M',
				moves: ['shift gear', 'earthquake', 'diamondstorm'],
				baseSignatureMove: 'madfluff', signatureMove: "Mad Fluff",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'},
				{species: 'Magcargo', ability: 'Simonitis', item: 'Leftovers', gender: 'M',
				moves: ['recover', 'searing shot', 'earth power'],
				baseSignatureMove: 'searingrocks', signatureMove: "Searing Rocks",
				evs: {hp:252, def:252, spa:4}, ivs: {atk:0}, nature: 'Bold'},
				{species: 'Scolipede', ability: 'Simonitis', item: 'Life Orb', gender: 'M',
				moves: ['shift gear', 'thousand arrows', 'gunk shot'],
				baseSignatureMove: 'kapow', signatureMove: "KAPOW",
				evs: {hp:4, atk:252, spe:252}, ivs: {atk:0}, nature: 'Jolly'},
				{species: 'Kingdra', ability: 'Simonitis', item: 'Scope lens', gender: 'M',
				moves: ['vacuum wave', 'steam eruption', 'spacial rend'],
				baseSignatureMove: 'aaandsweep', signatureMove: "Aaand sweep",
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid'},
				{species: 'Stunfisk', ability: 'Simonitis', item: 'Assault Vest', gender: 'M',
				moves: ['steam eruption', 'earth power', 'volt switch'],
				baseSignatureMove: 'corrupt', signatureMove: "Corrupt",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'},
				{species: 'Banette-Mega', ability: 'Simonitis', item: 'Choice Scarf', gender: 'M',
				moves: ['shadow force', 'gunk shot', 'sacred fire'],
				baseSignatureMove: 'kapow', signatureMove: "KAPOW",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'}
			][this.random(7)],
			
			// Drivers
			'%Desolate Nightmare': {
				species: 'Luxray', ability: 'Evil Intent', item: 'Kings Rock', gender: 'M', shiny: true,
				moves: ['volt tackle', 'extremespeed', 'crunch', 'protect'],
				baseSignatureMove: 'fuckoff', signatureMove: "Fuck off",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			/*'%Icarus': {
				species: 'Dragonite', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			'%Imp Kswiss': {
				species: 'Charizard-Mega-Y', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},*/
			'%Maria V': {
				species: 'Abomasnow-Mega', ability: 'Freeze, Bitch!', item: 'Leftovers', gender: 'F', shiny: true,
				moves: [['blizzard', 'earthquake', 'earth power'][this.random(3)], ['wood hammer', 'giga drain', 'flare blitz', 'fire blast'][this.random(4)], 'ice shard'],
				baseSignatureMove: 'insertfrozensong', signatureMove: "[insert Frozen song]",
				evs: {hp:248, atk:188, spa:68, spd:4}, nature: 'Quiet'
			},
			'%TacoboyMC': {
				species: 'Bastiodon', ability: 'Tacoitis', item: 'Leftovers', gender: 'M',
				moves: [['reflect', 'light screen'][this.random(2)], ['toxic', 'metalburst'][this.random(2)], 'recover'],
				baseSignatureMove: 'rawr', signatureMove: "RAWR!",
				evs: {hp:252, def:4, spd:252}, nature: 'Calm'
			},
			'%UpstrokingTotodile': {
				species: 'Totodile', ability: 'Cancer', item: 'Life Orb', gender: 'M',
				moves: ['waterfall', ['shell smash', 'earthquake', 'crunch', 'ice punch'][this.random(4)], 'outrage'],
				baseSignatureMove: 'deathroll', signatureMove: "Death Roll",
				evs: {hp:248}, nature: 'Jolly'
			},
			
			// Voices
			'+Lt. Tesla': {
				species: 'Zapdos', ability: 'Beard Coat', item: 'Leftovers', gender: 'M',
				moves: ['roost', 'defog', ['flamethrower', 'geomancy'][this.random(2)]],
				baseSignatureMove: 'sideboffledge', signatureMove: "side b off ledge",
				evs: {hp:248, spa:252, spe:8}, nature: 'Modest'
			},
			'+Neo Soul': {
				species: 'Wobbuffet', ability: 'Fuck you feel this is?', item: 'Focus Sash', gender: 'M',
				moves: ['protect', 'recover', 'will-o-wisp'],
				baseSignatureMove: 'sodone', signatureMove: "So done",
				evs: {hp:252, def: 21, spa:224}, nature: 'Calm'
			},
			/*'+Vin Pyre': {
				species: 'Steelix-Mega', ability: 'Safety First', item: 'Assault Vest', gender: 'M',
				moves: ['earthquake', 'dragon claw', 'flamethrower'],
				baseSignatureMove: 'quote', signatureMove: "+quote",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},*/
			/*'+warlic': {
				species: 'Arceus', ability: 'Grammar Check', item: 'Dome Fossil', gender: 'M',
				moves: ['healbell', 'metronome', 'present'],
				baseSignatureMove: 'salutations', signatureMove: "Salutations",
				evs: {hp:248, atk:8, spe:252}, nature: 'Jolly'
			}*/
		};
		// Generate the team randomly.
		var pool = Object.keys(sets).randomize();
		var ranks = {'#':'room owners', '@':'mods', '%':'drivers', '+':'voices'};
		var levels = {'#':100, '@':100, '%':100, '+':100};
		for (var i = 0; i < 6; i++) {
			var rank = pool[i].charAt(0);
			var set = sets[pool[i]];
			set.level = levels[rank];
			set.name = pool[i];
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (var iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = set.ivs[iv] ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal. LOLOLOLOLOL
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = set.moves.sample(3).concat(set.baseSignatureMove);
			team.push(set);
		}
 
		// Check for Illusion.
		if ((team[5].name === '+Illusio' && team[4].name === '+Kit Kasai') || (team[4].name === '+Illusio' && team[5].name === '+Kit Kasai')) {
			var temp = team[3];
			team[3] = team[5];
			team[5] = temp;
		} else if (team[5].name === '+Illusio' || team[5].name === '+Kit Kasai') {
			var temp = team[4];
			team[4] = team[5];
			team[5] = temp;
		}
		return team;
    },
	
	runMegaEvo: function (pokemon) {
		var template = this.getTemplate('Garchomp-Mega');
		var template2 = this.getTemplate('Nidoking');
		var venomoth = this.getTemplate('Venomoth');
		var garchomp = this.getTemplate('Garchomp');
		var side = pokemon.side;
		if (pokemon.baseTemplate === garchomp) {

			pokemon.formeChange(template);
			pokemon.baseTemplate = template; // mega evolution is permanent
			pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
			this.add('detailschange', pokemon, pokemon.details);
			this.add('-mega', pokemon, template.baseSpecies, template.requiredItem);
			pokemon.baseAbility = 'safetyfirst';

			// Limit one mega evolution
			for (var i = 0; i < side.pokemon.length; i++) {
				side.pokemon[i].canMegaEvo = false;
			}
			return true;
		} else if (pokemon.baseTemplate === venomoth) {

			pokemon.formeChange(template2);
			pokemon.baseTemplate = template2; // mega evolution is permanent
			pokemon.details = template2.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
			this.add('detailschange', pokemon, pokemon.details)
			this.add("raw|@Simon Sciences transformed into Nidoking!");
			pokemon.baseAbility = 'simonitis';

			// Limit one mega evolution
			for (var i = 0; i < side.pokemon.length; i++) {
				side.pokemon[i].canMegaEvo = false;
			}
			return true;
		}
	}
};
