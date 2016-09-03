var bonusList = [],
	font = [],
	monsters = [],
	imgsNames = ["t","e","pad","f"],
	imgs = [],
	score = 0,
	auto = true,
	level,
	sc,
	menu = 1,
	sb;

var maps =  [103,107,115,117,131,135,137,141,147,151,163,169,187,203,205,220,231,245,23,250,253,256,261,265,267,272,277,287,27,317,32,64,7,89,108,113,124,127,130,12,157,159,15,189,193,201,209,211,215,217,241,242,246,251,259,260,262,282,297,1,29,315,316,39,41,46,49,54,57,63,65,5,87,9,109,10,120,123,128,138,139,143,148,13,150,156,14,167,172,173,176,177,183,17,191,192,197,18,199,208,19,216,20,223,225,21,237,22,243,249,263,268,270,285,288,292,313,30,31,35,42,44,45,47,52,53,60,61,69,71,73,75,81,86,91,93,99,105,111,114,11,129,145,160,162,165,174,175,178,16,202,229,233,236,240,248,255,24,25,284,299,301,304,308,33,37,50,51,66,77,78,84,85,95,97,100,101,144,149,210,230,254,274,275,296,28,43,55,56,68];
var dares = ["5UX805VX804U2X804VX90302X9030X202X602T2X203X5J3X205X4U50X2F2X4U402X2J2X4U40X4JX4U302X405X30Xa0",
	"4X604X3X803X2X304H302X2X30HUVH302XX40HVUH40XXT304H30TX2Xa02X4X604X6X206XeXeXeXe0e0e02X705XFX70X4009X4080X203T6X20X203X6",
	"U0UXa0U0UX30G03G20U0UX30G0G40U0UX0G0G03G20U0UX0G0G30G20U0UX20G203G20U0UXa0U0UXa0U0UX0G03G0G0GU0UX2G30G0G0GU0UX0G202G02G0U0UX0G30G0G0GU0UX6G0G0GU0UXa020cX20cX40X306X3X0X0X06X3X0X0X06X3X0X0X06X3X0X0X06X3X0X0X06X02X30X06X60X06X",
	"e0602U60504V50406U4020X8VX202RX8UX2R2RX8VX2RRcXRe0e0e0e0602X60602X60e0e0e0e0Xc0X2Xa02X",
	"e005X205X050X2UX5050X2VX50504X50",
	"U02XU202XU40302X302X40X302X302X302X302X302X20U2X302X302X0U02X302X30X0302X302X40X302X30X402X302X70U2X302X60U02X302X50302X30X50X302X802X302X7002X30X70202Xa0302X9040X90",
	"504G50402G202G40302G402G30202G602G2002G302X302G02G304X302GG40X2UX40G30X60X30202X602X2002XV60V2X002XV60V2X0202X602X20302X402X30402X2W2X40504X50602X60",
	"2H0U202U20U02H30U202U20U3030U202U20U3003U202U203U003U202U203U030U202U20U3030U202U20U302H0UT4UTU02HeXe0e09VX0X2V9VXFX2V9V3X2V",
	"5X405XX502U50XX502U50X40X40X40406X40602X60X502X50XX502X50X2X4U2X4U2X2X4V2X4V2XeW",
	"40X90T20TXFU704U8X205X9040X9040X207X4VX904WX90408X2040X9040X9040X207X40X9040X904U8X20",
	"0Uc03Ub00Uc0bX30UVc0VUc0bX30VWc0WVc0bX30WVc0VWc0bX30VUc0UVc0bX30",
	"e0e0e0e030X6JX30308X30"];

bonusList[1] = { chance: 3, letter:"d", name:"double ball"};
bonusList[2] = { chance: 6, letter:">", name:"increase pad size"};
bonusList[3] = { chance: 6, letter:"<", name:"decrease pad size"};
bonusList[4] = { chance: 6, letter:"+", name:"increase balls speed"};
bonusList[5] = { chance: 6, letter:"-", name:"decrease balls speed"};
bonusList[6] = { chance: 6, letter:"i", time:5, name:"invisibility"};
bonusList[9] = { chance: 15, letter:"t", time:5, name:"tesla"};
bonusList[13] = { chance: 13, letter:"c", time:5, name:"crazy balls"};
bonusList[14] = { chance: 23, letter:"JS", time:2, name:"JS glitch"};
bonusList[15] = { chance: 8, letter:"l", time:10, name:"laser"};
bonusList[16] = { chance: 8, letter:"g",time:20, name:"glue"};

font[0] = "111101101101111";
font[1] = "010110010010111";
font[2] = "111001111100111";
font[3] = "111001111001111";
font[4] = "101101111001001";
font[5] = "111100111001111";
font[6] = "111100111101111";
font[7] = "111001010010010";
font[8] = "111101111101111";
font[9] = "111101111001111";
font["L"] = "100100100100111";
font["E"] = "111100111100111";
font["V"] = "101101101101010";
font["I"] = "111010010010111";
font["F"] = "111100111100100";
font["-"] = "000000111000000";
font[":"] = "000010000010000";
font["D"] = "110101101101110";
font["A"] = "111101111101101";
font["R"] = "111101111110101";
 
monsters[1] = "11:0010000010000010001000001111111000110111011011111111111101111111011010000010100011011000";
monsters[2] = "8:0001100000111100011111101101101111111111001001000100001000100100";
monsters[3] = "12:000011110000011111111110111111111111111001100111111111111111000110011000001001100100000100001000";
monsters[4] = "14:000001111000000001111111100000111111111100011100111100100110000110000101100001100001111000011000011111001111001111111111111111111111111111111111111111111111111111111111111111111111111101110011101110001100110001";
monsters[5]  = "32:0000000011111111111111111000000000000001000000000000000001000000000000100000000000000000001000000000001000000000000000000010000000000010000000000000000000100000000000100000000000110000001011000000001000000000010010000011001011110010000000000100010000100010100110100000000001000011110000101100111000000000010000000000001001100110000000001000000000000001001100100000000010000100000010010001111000000000100011000101100100000110000000001000000000000001000000100000000010000100100100010000001000000000010001111111001000000111000000000010000000000100000010001111111111111111111110000000100110100100000100101001000000001111001110000000111001100000";
monsters[6] = "20:0011000000000000110001100000000000000110011000000000000001101100000000000000001111000000000000000011110000011111100000111100001101101100001111000110011001100011111001001001001001111111110100001011111111111101000010111111111001001001001001111100011001100110001111000011011011000011110000011111100000111100000000000000001111000000000000000011011000000000000001100110000000000000011000110000000000001100";


BRICK0 = function() {
	BRICK.apply(this, arguments);
}
BRICKU = function() {
	BRICK.apply(this, arguments);
	this.value  = 100;
	this.onCollid = function() {
		return 0;
	}
}
BRICKV = function() {
	BRICK.apply(this, arguments);
	this.value  = 200;
	this.onCollid = function() {
		return 0;
	}
}
BRICKW = function() {
	BRICK.apply(this, arguments);
	this.value  = 400;
	this.onCollid = function() {
		return 0;
	}
}
BRICKH = function() {
	BRICK.apply(this, arguments);
	this.onCollid = function() {
		return "U";
	}
}
BRICKI = function() {
	BRICK.apply(this, arguments);
	this.onCollid = function() {
		return "H";
	}
}
BRICKJ = function() {
	BRICK.apply(this, arguments);
	this.onCollid = function() {
		return "I";
	}
}
/**
 *  Black hole brick
 */
BRICKF = function() {
	BRICK.apply(this, arguments);
	/**
	 * Seek for a wormholes
	 * @param {BALL} ball
	 */
	this.onCollid = function(ball) {
		if (!ball) { return; }
		var whiteHoles = [];
		for (y=0; y<24; y++) {
			for (x=0; x<14; x++) {
				if (level[y][x].type=="T") {
					whiteHoles.push({x:x, y:y});
				}
			}
		}
		var random = Math.floor(Math.random()*whiteHoles.length);
		ball.x = (whiteHoles[random].x*34)+17;
		ball.y = (whiteHoles[random].y*20)-10;
		ball.angle = ball.angle + ((Math.random()*60)-30);
		return "F";
	}
}
BRICKG = function() {
	BRICK.apply(this, arguments);
}
/**
 *  Bomb brick
 */
BRICKM = function() {
	BRICK.apply(this, arguments);
	this.explosionSize = 2;
	this.explosionColor = [255,62,32];
	this.value  = 400;
	this.explode = false;
	/**
	 * Explode all bricks around
	 */
	this.onCollid = function() {
		this.explode = true;
		for (y=this.y-2; y<=this.y+2; y++) {
			for (x=this.x-2; x<=this.x+2; x++) {
				if (y==this.y && x==this.x) { continue; }
				if (level[y] && level[y][x]) {
					var l = level[y][x];
					if (l.type!=0) {
						if (l.type!="M" || !l.explode) {
							l.onTouch(null);
						}
					}
				}
			}
		}
		return 0;
	}
}
/**
 *  New ball brick
 */
BRICKN = function() {
	BRICK.apply(this, arguments);
	this.value  = 100;
	this.explosionColor = [234,213,34];
	/**
	 * Add a new ball
	 */
	this.onCollid = function() {
		GAME.addBall(this.x*34+17,this.y*20+10,Math.random()*360);
		return 0;
	}
}
/**
 *  Reborn brick
 */
BRICKR = function() {
	BRICK.apply(this, arguments);
	this.explosionColor = [228,106,218];
	this.value  = 400;
	this.onCollid = function() {
		setTimeout(this.reborn.bind(this), 10000);
		return 0;
	}
	this.reborn = function() {
		this.explosionColor = [228,106,218];
		this.type = "R";
		this.value  = 50;
	}
}
BRICKT = function() {
	BRICK.apply(this, arguments);
}
BRICKX = function() {
	BRICK.apply(this, arguments);
}
/**
 * Brick object
 * @param {float} x
 * @param {float} y
 * @param {int} type
 */
BRICK = function(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.value = 0;
	this.explosionColor = [203,174,169];
	this.explosionSize = 1;
	/**
	 * Call when a something collid a brick 
	 * @param {BALL} ball Ball that collides. Optional
	 */
	this.onTouch = function(ball) {
		if (this.type!=0 && this.onCollid) {
			var newType = this.onCollid(ball);
			if (newType==0) {
				GAME.addText(this.x*34, this.y*20, this.value);
				score+=this.value;
				GAME.addExplosion(this.x*34, this.y*20, this.explosionColor, this.explosionSize);
				GAME.nbBrick-=["G","R","N","M"].indexOf(this.type)!=-1 ? 0 : 1;
				if (GAME.nbBrick==0) {
					GAME.explodeAll();
					setTimeout("GAME.endLevel(true)",3000);
				}
				this.type = "0";
				// 1 on 3 chance to add a bonus. (Only if there's not already 3 bonus in game)
				if (Math.random()*10<3 && GAME.bonus.length<=3) {
					var chance = Math.round(Math.random()*100);
					var chanceCount = 0;
					var bonusType = false;
					for (var type in bonusList) {
						chanceCount+=bonusList[type].chance;
						if (chance<=chanceCount) {
							bonusType = type;
							break;
						}
					}
					GAME.addBonus(this.x*34, this.y*20,parseInt(bonusType));
				}
			} else if (newType) {
				var obj = new window["BRICK"+newType](this.x, this.y, newType);
				for (var properties in obj) {
					this[properties] = obj[properties];
				}
			}
		}
	}
}

/**
 * Main
 */
GAME = {
	balls:[],
	sprites:[],
	players : [],
	monsters:[],
	bonus:[],
	effects:[],
	glitchMode:false,
	mode:"menu",
	text:"",
	life:1,
	portalTime:10000,
	/**
	 * Check if we can open a portal
	 */
	checkPortal:function() {
		if (Math.random() < 0.5) { return }
		var portals = [];
		if (level[6][0].type==0 && level[7][0].type==0 ) {
			portals.push(1);
		}
		if (level[14][0].type==0 && level[15][0].type==0 ) {
			portals.push(2);
		}
		if (level[6][13].type==0 && level[7][13].type==0 ) {
			portals.push(5);
		}
		if (level[14][13].type==0 && level[15][13].type==0 ) {
			portals.push(6);
		}
		if (portals.length) {
			portal = portals[Math.floor(Math.random()*portals.length)];
			document.getElementById("portal"+portal).classList.add("opened");
			setTimeout("GAME.addMonsterInPortal("+portal+")",1500);
		}
	},
	/**
	 * Add a monster from a portal and close the portal
	 * @param {int} portal The portal number
	 */
	addMonsterInPortal:function(portal) {
		document.getElementById("portal"+portal).classList.remove("opened");
		var x, y;
		switch (portal) {
			case 1:	x=0;y=130;break;
			case 2:	x=0;y=285;break;
			case 5:	x=500;y=130;break;
			case 6:	x=500;y=285;break;
		}
		GAME.addMonster(x,y,Math.floor(Math.random()*(monsters.length-1))+1);
	},
	/**
	 * Init the beginning of a game. Add a player, a ball, and wait for the player to click
	 */
	initStart:function() {
		this.players = [];
		this.addPlayer(175);
		this.addBall(238,478,0);
		this.balls[0].speed = 0;
		this.wait = true;
	},
	/**
	 * Add a ball
	 * @param {float} x
	 * @param {float} y
	 * @param {float} angle
	 */
	addBall : function(x,y,angle) {
		this.balls.push(new BALL(x, y, angle));
	},
	/**
	 * Add a text that will disappear in a second
	 * @param {float} x
	 * @param {float} y
	 * @param {string} text
	 */
	addText : function(x, y, text) {
		this.sprites.push(new TEXT(x, y, text));
	},
	/**
	 * Add a text (with the big font). One frame only
	 * @param {float} x
	 * @param {float} y
	 * @param {string} text
	 */
	drawText : function(x, y, text) {
		new TEXT2(x,y,text);
	},
	addPlayer: function(x) {
		this.players.push(new PLAYER(x));
	},
	/**
	 * Add explosion
	 * @param {float} x
	 * @param {float} y
	 * @param {array} color Color of this explosion [red,greend,blue]
	 * @param {float} factorSize 1 mean 1 pixel for each particles. 2 mean 2...
	 * @param {float} gravity 0 mean no gravity. 0.05 look like heart acceleration. Optional
	 */
	addExplosion : function(x, y, color, factorSize, gravity) {
		this.sprites.push(new EXPLOSION(x, y, color, factorSize, gravity));
	},
	/**
	 * Add laser from the gun of the player (if he have a gun)
	 */
	addLaser : function() {
		var p = this.players[0];
		if (p.gun) {
			this.sprites.push(new LASER(p.x+24, 478,0));
			this.sprites.push(new LASER(p.x+p.size-22, 478,0));
		}
	},
	/**
	 * Add a monster in game
	 * @param {float} x
	 * @param {float} y
	 * @param {int} type
	 */
	addMonster : function(x, y, type) {
		this.monsters.push(new MONSTER(x, y, type));
	},
	/**
	 * Add a bonus in game
	 * @param {float} x
	 * @param {float} y
	 * @param {int} type
	 */
	addBonus:function(x, y, type) {
		this.bonus.push(new BONUS(x,y, type));
	},
	/**
	 * Activate an effect
	 * @param {int} type The effect (see bonusList)
	 */
	setEffects:function(type) {
		var p = this.players[0];
		switch (type) {
			case 9:
				p.rope = true;
				break;
			case 6:
				p.invisibility = true;
				break;
			case 13:
				p.crazy = true;
				break;
			case 14:
				this.glitchMode = true;
				break;
			case 15:
				p.gun = true;
				break;
			case 16:
				p.glue = true;
				break;
		}
		this.effects[type] = bonusList[type].time*60;
		document.querySelector("#bonus"+type+">span").style.height = "100%";
	},
	/**
	 * Cancel an effect
	 * @param {int} type
	 */
	cancelEffects:function(type) {
		var p = this.players[0];
		switch (type) {
			case 9:
				p.rope = false;
				break;
			case 6:
				p.invisibility = false;
				break;
			case 13:
				p.crazy = false;
				break;
			case 14:
				this.glitchMode = false;
				break;
			case 15:
				p.gun = false;
				break;
			case 16:
				p.glue = false;
				p.dropGlueBalls();
				break;
		}
		document.querySelector("#bonus"+type+">span").style.height = "0%";
		delete (this.effects[type]);
	},
	/**
	 * Update the effects bars. Cancel the effect if it's time
	 */
	updateEffects:function() {
		for (var type in this.effects) {
			this.effects[type]--;
			if (this.effects[type]<=0) {
				this.cancelEffects(parseInt(type));
			}
			document.querySelector("#bonus"+type+">span").style.height = (100/(bonusList[type].time*60)*this.effects[type])+"%";
		}
	},
	/**
	 * Cancel all the effects
	 */
	cancelAllEffects:function() {
		this.cancelEffects(9);
		this.cancelEffects(6);
		this.cancelEffects(13);
		this.cancelEffects(14);
		this.cancelEffects(15);
		this.cancelEffects(16);
	},
	/**
	 * Explode all elements in game (balls, bricks and monsters)
	 */
	explodeAll:function() {
		for (y=0; y<24; y++) {
			for (x=0; x<14; x++) {
				if (level[y][x].type!="0") {
					this.addExplosion(x*34, y*20,[127+Math.floor(Math.random()*127),127+Math.floor(Math.random()*127),127+Math.floor(Math.random()*127)],2);
					level[y][x].type = 0;
				}
			}
		}
		for (var i=0; i<this.balls.length; i++) {
			this.addExplosion(this.balls[i].x, this.balls[i].y,[255,255,255],2);
		}
		for (i=0; i<this.monsters.length; i++) {
			this.addExplosion(this.monsters[i].x, this.monsters[i].y,[255,255,255],2);
		}
		this.balls=[];
		this.monsters=[];
	},
	/**
	 * Display the good end level screen 
	 * @param {boolean} win Indicate if we end the level because the player win the level
	 */
	endLevel:function(win) {
		auto = false;
		this.cancelAllEffects();
		displayEndLevel(win);
	},
	/**
	 * Update the lives counter
	 */
	updateLives:function() {
		sp.fillStyle = "#FFF";
		sp.fillRect(740,263,152,118);
		sp.fillStyle = "#F00";
		drawDigits(776, 286, "LIFE", sp);
		var l=this.life.toString();
		drawDigits(816-10*l.length, 333, l, sp);
	}
}
/**
 * BONUS object
 * @param {float} x
 * @param {float} y
 * @param {int} type
 * @returns {BONUS}
 */
BONUS = function(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.time = bonusList[this.type].time ? bonusList[this.type].time : 0;
	/**
	 * Update position of the bonus
	 * @returns {boolean} false if the bonus must be remove. True otherwise
	 */
	this.update = function() {
		var i,p,toAdd,b,sizeBefore,grd;
		this.y+=2;
		if (this.y>500) {
			return false;
		}
		if (this.y>460) {
			p = GAME.players[0];
			// Check if the player catch the bonus
			if (this.x>p.x-32 && this.x<p.x+p.size) {
				switch (this.type) {
					case 1: //Double balls
						toAdd = [];
						for (i=0; i<GAME.balls.length; i++) {
							b = GAME.balls[i];
							toAdd.push({x:b.x, y:b.y, angle:b.angle+15});

						}
						for (i=0; i<toAdd.length; i++) {
							GAME.addBall(toAdd[i].x, toAdd[i].y, toAdd[i].angle+15);
						}
						break;
					case 2: //Increase pad size
						sizeBefore = p.size;
						p.size = Math.min(p.size*1.2,250);
						p.x-=(p.size - sizeBefore)/2;
						break;
					case 3: //Decrease pad size
						sizeBefore = p.size;
						p.size = Math.max(p.size/1.2,80);
						p.x-=(p.size - sizeBefore)/2;
						break;
					case 4:	// Increase speed
						for (i=0; i<GAME.balls.length; i++) {
							GAME.balls[i].speed = Math.min(GAME.balls[i].speed*1.2,12);
						}
						break;
					case 5:	// Decrease speed
						for (i=0; i<GAME.balls.length; i++) {
							GAME.balls[i].speed = Math.max(GAME.balls[i].speed/1.2,2);
						}
						break;
				}
				GAME.text = bonusList[this.type].name;
				GAME.textX = 500;
				GAME.textFrame = 0;
				if (bonusList[this.type].time) {
					GAME.setEffects(this.type);
				}
				return false;
			}
		}
		
		x = this.x;
		y = this.y;
		ctx.beginPath();
		ctx.moveTo(x + 6, y);
		ctx.lineTo(x + 24, y);
		ctx.arcTo(x + 30, y, x+30, y + 6, 6);
		ctx.lineTo(x + 30, y+14);
		ctx.arcTo(x + 30, y+20, x + 24, y + 20, 6);
		ctx.lineTo(x + 6, y+20);
		ctx.arcTo(x, y+20, x, y + 14, 6);
		ctx.lineTo(x, y+6);
		ctx.arcTo(x, y, x+6, y, 6);
		ctx.closePath();

		grd=ctx.createLinearGradient(x,y,x,y+20);
		grd.addColorStop(0,"#466BA9");
		grd.addColorStop(0.25,"#6FB5FF");
		grd.addColorStop(0.5,"#6FB5FF");
		grd.addColorStop(0.75,"#6FB5FF");
		grd.addColorStop(1,"#4772B8");

		ctx.fillStyle = grd;
		ctx.fill();
		ctx.strokeStyle = "rgba(37,60,99,0.5)";
		ctx.stroke();	
		ctx.fillStyle = "#FFF";
		ctx.fillRect(x+4,y+4,22,12);

		GAME.drawText(x+8, y+3, bonusList[this.type].letter);
		return true;
	}
}

/**
 * MONSTER object
 * @param {int} x
 * @param {int} y
 * @param {int} type
 * @returns {MONSTER}
 */
MONSTER = function(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.speed = 1;
	this.angle = 90;
	var def = monsters[type].split(":");
	this.width = def[0];
	this.pixels = def[1];
	this.height = this.pixels.length / this.width;
	
	this.factor = type==5 ||type==6 ? 1 : 2;
	/**
	 * Explode the monster
	 */
	this.explode = function() {
		score+=1000;
		GAME.addText(this.x, this.y, 1000);
		GAME.addExplosion(this.x, this.y, [255,255,255], 2);
		for (var i=0; i<GAME.monsters.length; i++) {
			if (GAME.monsters[i]==this) {
				GAME.monsters.splice(i,1);
				return;
			}
		}
	}
	/**
	 * Update position of the monster each frame
	 * @returns {boolean} false if the monster must be remove. True otherwise
	 */
	this.update = function() {
		var oldX = this.x;
		var oldY = this.y;

		this.x += (Math.sin((this.angle/180)*3.14))*this.speed;
		this.y += (Math.cos((this.angle/180)*3.14))*this.speed;
		this.angle += (Math.random()*10)-5;

		var col = false;
		if (this.y>500) {
			return false;
		}
		for (var x=this.x; x<=this.x+(this.width*this.factor); x+=this.width*this.factor) {
			for (var y=this.y; y<=this.y+this.height*this.factor; y+=this.height*this.factor) {
				var tile = {x: Math.floor(x/34), y: Math.floor(y/20)};
				if (tile.x>=0 && tile.x<14 && tile.y>=0) {
					if (level[tile.y][tile.x].type!="0") {
						col = true;
					}
				}
			}
		}
		if (col) {
			this.x = oldX;
			this.y = oldY;
			this.angle=Math.random()*360;
		}
		if (this.y < 0) {
			this.angle -= 180;
			this.y = 0;
		}
		if (this.x < 0) {
			this.angle = 360-this.angle;
			this.x = 0;
		}
		if (this.x > 476-this.width*this.factor) {
			this.angle = 360-this.angle;
			this.x = 476-this.width*this.factor;
		}

		ctx.fillStyle = "#FFFFFF";
		var index = 0;
		for (y=0; y<this.pixels.length/this.width; y++) {
			for (x=0; x<this.width; x++) {
				if (this.pixels[index]=="1") {
					ctx.fillRect(this.x+x*this.factor,this.y+y*this.factor,this.factor,this.factor); 
				}
				index++;
			}
		}
		return true;
	}
}

/**
 * EXPLOSION object
 * @param {float} x
 * @param {float} y
 * @param {array} color Color of this explosion [red,greend,blue]
 * @param {float} factorSize 1 mean 1 pixel for each particles. 2 mean 2...
 * @param {float} gravity 0 mean no gravity. 0.05 look like heart acceleration. Optional
 * @returns {EXPLOSION}
 */
EXPLOSION = function(x, y, color, size, gravity) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = size;
	this.opacity = 1;
	this.pixels = [];
	this.gravity = gravity ? gravity : 0;
	for (var x=0; x<34; x+=3) {
		for (var y=0; y<24; y+=3) {
			var pixel = {};
			pixel.x = this.x+x;
			pixel.y = this.y+y;
			pixel.tx = (x-17)*(Math.random()-0.5);
			pixel.ty = (y-10)*(Math.random()-0.5);
			this.pixels.push(pixel);
		}
	}
	/**
	 * Update position of all particles of the explosion each frame
	 * @returns {boolean} false if the explosion must be remove. True otherwise
	 */
	this.update = function() {
		this.opacity-=0.01;
		if (this.opacity<=0) { return false; }
		ctx.fillStyle = "rgba("+this.color[0]+","+this.color[1]+","+this.color[2]+","+this.opacity+")";
		for (var i=0; i<this.pixels.length; i++) {
			var p = this.pixels[i];
			p.ty+=this.gravity;
			p.x+=p.tx;
			p.y+=p.ty;
			ctx.fillRect(p.x,p.y,2*this.size,2*this.size); 
		}
		return true;
	}
}

/**
 * PLAYER objects
 * @param {float} x
 * @returns {PLAYER}
 */
PLAYER = function(x) {
	this.x = x;
	this.size = 125;
	this.invisibility = false;
	this.crazy = false;
	this.rope = false;
	this.gun = false;
	this.glue = false;
	this.visible = true;
	this.blocked = true;
	/**
	 * Explode the player pad
	 */
	this.explode = function() {
		var p = GAME.players[0];
		for (var x=p.x; x<p.x+p.size; x+=10) {
			GAME.addExplosion(x, 470,[255,(255/p.size)*(x-p.x),50],2, 0.05);
		}
		this.visible = false;
		GAME.cancelAllEffects();
		GAME.life--;
		GAME.updateLives();
		if (GAME.life==0) {
			setTimeout("GAME.endLevel(false)",3000);
		} else {
			setTimeout("GAME.initStart()",2000);
		}
	}
	/**
	 * Draw the pad
	 */
	this.update = function() {
		if (!this.visible) { return false; }
		ctx.drawImage(imgs["pad"], 0,0,34,18,this.x, 480,34,18);
		ctx.drawImage(imgs["pad"], 34,0,1,18,this.x+34, 480,this.size-67, 18);
		ctx.drawImage(imgs["pad"], 35,0,33,18,this.x+this.size-33, 480,33, 18);
		
		if (this.gun) {
			ctx.drawImage(imgs["t"], 0, 0, 10, 27,  this.x+20, 464, 10, 27);
			ctx.drawImage(imgs["t"], 0, 0, 10, 27,  this.x+this.size-27, 464, 10, 27);
		}
		if (this.glue) {
			ctx.drawImage(imgs["t"], 11,0,81,9,this.x+34, 483,this.size-67,9);
		}
	};
	/**
	 * Drop all glued balls
	 */
	this.dropGlueBalls = function() {
		for (var i=0; i<GAME.balls.length; i++) {
			var g = GAME.balls[i];
			if (g.glue) {
				g.glue = false;
				g.speed = g.oldSpeed;
			}
		}
	}	
}

/**
 * LASER object
 * @param {float} x
 * @param {float} y
 * @param {float} angle
 * @returns {LASER}
 */
LASER = function(x, y, angle) {
	this.x = x;
	this.y = y;
	this.angle = angle;
	/**
	 * Update position each frame
	 * @returns {boolean} false if the laser must be remove. True otherwise
	 */
	this.update = function() {
		var l,mID,m;
		
		//check collision on bricks
		var tile = {x: Math.floor(this.x/34), y: Math.floor(this.y/20)};
		if (tile.x>=0 && tile.x<14 && tile.y>=0) {
			l=level[tile.y][tile.x];
			if (l.type!="0") {
				l.onTouch(null);
				return false;
			}
		}
		
		//check collision on monsters
		for (mID=0; mID<GAME.monsters.length; mID++) {
			m = GAME.monsters[mID];
			if (this.x > m.x) {
				if (this.x < m.x+(m.width*2)) {
					if (this.y > m.y) {
						if (this.y < m.y+(m.height*2)) {
							m.explode();
							return false;
						}
					}
				}
			}
		}
		this.x+= Math.sin(this.angle/180*Math.PI) * 20;
		this.y-=20;
		ctx.fillStyle = "#F00";
		ctx.fillRect(this.x,this.y,2,20);
		return true;
	}
}
/**
 * TEXT object
 * @param {float} x
 * @param {float} y
 * @param {string} text
 * @returns {TEXT}
 */
TEXT = function(x, y, text) {
	this.x = x;
	this.y = y;
	this.text = text.toString();
	this.frame = 0;
	this.opacity = 1;
	/**
	 * Update position each frame
	 * @returns {boolean} false if the text must be remove. True otherwise
	 */
	this.update = function() {
		var i;
		this.frame++;
		this.y-=0.5;
		if (this.frame>30) {
			this.opacity -= 0.05;
		}
		if (this.opacity<0) {
			return false;
		}
		ctx.fillStyle = "rgba(80,80,255,"+this.opacity+")";
		var posX = this.x+5;
		for (i=0; i<this.text.length; i++) {
			var digit = this.text[i];
			var index = 0;
			for (y=0; y<5; y++) {
				for (x=0; x<3; x++) {
					if (font[digit][index++]=="1") {
						ctx.fillRect(posX+x*2,this.y+5+y*2,2,2); 
					}
				}
			}
			posX += 8;
		}
		return true;
	}
}
/**
 * 
 * @param {float} x
 * @param {float} y
 * @param {string} text
 * @param {RenderingContext} context
 * @param {float} zoom
 * @returns {TEXT2}
 */
TEXT2 = function(x, y, text, context, zoom) {
	this.x = x;
	this.y = y;
	this.text = text.toString();
	this.frame = 0;
	this.opacity = 1;
	var reflection,i,d,j;
	if (!context) {
		context = ctx;
		reflection  = false;
	} else {
		reflection = true;	
	}
	var match = "abcdefghijklmnopqrstuvwxyz0123<>!.+-JS";
	context.fillStyle = "rgba(0,0,255,"+this.opacity+")";
	var posX = x;
	var posY = y;
	for (i=0; i<this.text.length; i++) {
		var c = this.text[i];
		if (c=="@") { continue }
		if (c=="#") { posX = x; posY+=18*zoom; continue }
		if (c=="J") { posX-=7; }
		if (!reflection) {
			context.drawImage(imgs["f"], 14*match.indexOf(c), 0, 14, 14, posX, posY, 14, 14);
			posX+= c=="J" ? 14 : 16;
		} else {
			context.mozImageSmoothingEnabled = false;
			context.webkitImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
			context.drawImage(imgs["f"], 14*match.indexOf(c), 0, 14, 14, posX, posY, 14*zoom, 14*zoom);
			var imageData = context.getImageData(posX, posY,  14*zoom,  14*zoom);
			d = imageData.data;
			line = 0;
			for (j=0; j < d.length; j += 4) {
				if (j%(56*zoom)==0) {line++;}
				if (d[j]==255) {
					
				} else if (line<zoom) {
					d[j] = 154;
					d[j+1] = 134;
					d[j+2] = 249;
				} else if (line > (13*zoom)) {
					d[j] = 81;
					d[j+1] = 59;
					d[j+2] = 191;					
				} else if (j%(56*zoom)>=52*zoom) {
					d[j] = 81;
					d[j+1] = 59;
					d[j+2] = 191;
				} else if (j%(56*zoom)<=4*zoom) {
					d[j] = 154;
					d[j+1] = 134;
					d[j+2] = 249;
				} else {
					d[j] = this.text[0]=="@" ? 205 : 114;
					d[j+1] = this.text[0]=="@" ? 155 : 84;
					d[j+2] = this.text[0]=="@" ? 252 : 252;
				}
			}
			context.putImageData(imageData, posX, posY, 0, 0, 14*zoom,14*zoom);
			posX+= 16*zoom;
		}
	}
}

/**
 * BALL object
 * @param {float} x
 * @param {float} y
 * @param {float} angle
 * @returns {BALL}
 */
BALL = function(x, y, angle) {
	this.x = x;
	this.y = y;
	this.speed = 5;
	this.angle = angle;
	this.glue = false;
	this.size = 5;
	/**
	 * Update position and check colision each frame
	 * @returns {boolean} false if the text must be remove. True otherwise
	 */
	this.update = function() {
		this.angle+=0.01;
		if (this.speed) { this.speed+=0.0005; }
		var g = GAME.players[0];
		var x,y,i,p,m,r,M;
		// if the crazy bonus is enabled, change angle randomly
		if (g.crazy) {
			this.angle+=(Math.random()*20)-10;
		}
		/*
		 * when the ball speed is high (for exemple when it go to 10 pixels per frame),
		 * we have to cut the move into passes. 
		 * Moving one pixel, check colision, moving one pixel, check colision, etc...
		 */
		var nbPass = Math.ceil(this.speed);
		for (var pass=0; pass<nbPass; pass++) {
			this.x+= Math.sin(this.angle/180*Math.PI) * (this.speed/nbPass);
			this.y-= Math.cos(this.angle/180*Math.PI) * (this.speed/nbPass);
			var colidX = false;
			var colidY = false;
			var colidCorner = false;

			// if the ball fall down, drop it
			if (this.y>500-this.size) {
				return false;
			}
			//check collision on left/right border
			if (this.x>476-this.size || this.x<this.size) {
				colidX = true;
				this.x = Math.max(this.x, this.size);
				this.x = Math.min(this.x, 476-this.size);
			}
			//check coliision on top border
			if (this.y<this.size) {
				colidY = true;
				this.y = Math.max(this.y, this.size);
			}

			var tiles = [];
			var value = 1;
			var col=0;
			var alreadyMarked = [];
			//check collision on bricks
			for (x=this.x-5; x<=this.x+5; x+=5) {
				for (y=this.y-5; y<=this.y+5; y+=5) {
					var tile = {x: Math.floor(x/34), y: Math.floor(y/20)};
					if (tile.x>=0 && tile.x<14 && tile.y>=0 && tile.y<30) {
						if (level[tile.y][tile.x].type!="0") {
							var found = false;
							for (i=0; i<alreadyMarked.length; i++) {
								if (alreadyMarked[i]==tile.y+"/"+tile/x) {
									found = true;
								}
							}
							if (!found) {
								alreadyMarked.push(tile.y+"/"+tile/x);
								tiles.push(tile);
							}
							col+=value;
						}
					}
					value*=2;
				}
			}
			//check collision on pad
			if (this.y > 480) {
				if (this.x+5 > g.x && this.x-5 < g.x+g.size) {
					this.angle=360-((50*g.x+25*g.size-50*this.x)/g.size)*1.9;
					col = 0;
					if (g.glue) {
						this.y = 480;
						this.glue = true;
						this.oldSpeed = this.speed;
						this.speed = 0;
					}
				}
			}
			//check collision on monsters
			for (m=0; m<GAME.monsters.length; m++) {
				M = GAME.monsters[m];
				if (this.x > M.x) {
					if (this.x < M.x+(M.width*2)) {
						if (this.y > M.y) {
							if (this.y < M.y+(M.height*2)) {
								this.angle = Math.random()*360;
								this.speed.vitesse += this.speed/10;
								M.explode();
							}
						}
					}
				}
			}
			//if it touch a brick
			if (col) {
				if (col&2 || col&128) {
					colidX = true;
				}
				if (col&8 || col&32) {
					colidY = true;
				}
				if (!colidX && !colidY) {
					r = Math.random()*10;
					if (col&1) {
						this.angle = 135+r;
					} else if (col&64) {
						this.angle = 225+r;
					} else if (col&4) {
						this.angle = 45+r;
					} else if (col&256) {
						this.angle = 315+r;
					} else {
						colidX = colidY = true;
					}
					if (col&1 || col&64 || col&4 || col&256) { colidCorner = true; }
				}
			}
			if (colidX || colidY || colidCorner) {
				for (i=0; i<tiles.length; i++) {
					tile = tiles[i];
					level[tile.y][tile.x].onTouch(this);
				}
			}

			if (g.rope && this.y>450) {
				colidY = true;
			}
			
			if (colidX && colidY) {
				this.angle -= 180;
			} else if (colidX) {
				this.angle = 360-this.angle;
			} else if (colidY) {
				this.angle = 180-this.angle;
			}
			if (this.angle<0) {
				this.angle = 360 + this.angle;
			}
			this.angle = this.angle%360;
		}

		this.draw();
		return true;
	}
	/**
	 * draw the ball
	 */
	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		ctx.fillStyle = "rgba(255,255,255,"+(GAME.players[0].invisibility ? "0.05" :"1")+")";
		ctx.fill();
	}
}
/**
 * Draw a star
 * @param {float} x
 * @param {float} y
 * @param {float} size
 * @param {RenderingContext} c
 */
drawStar = function(x, y, size, c) {
	if (!c) { c=ctx; }
	var g = c.createRadialGradient(x,y,0,x,y,size);
	g.addColorStop(0, "rgba(255,255,255,0.7)");
	g.addColorStop(0.10, "rgba(255,255,255,0.7)");
	g.addColorStop(0.11, "rgba(127,127,127,0.3)");
	g.addColorStop(1, "rgba(127,127,127,0)");
	c.fillStyle = g;
	c.fillRect(x-size,y-size,size*2,size*2);
}
/**
 * Draw a text 
 * @param {type} posX
 * @param {type} posY
 * @param {type} number
 * @param {type} context
 * @returns {undefined}
 */
drawDigits = function(posX, posY, number, context) {
	for (var i=0; i<number.length; i++) {
		var index = 0;
		for (y=0; y<5; y++) {
			for (x=0; x<3; x++) {
				if (number[i]==" ") { continue; }
				if (font[number[i]][index++]=="1") {
					context.fillRect(posX+x*5,posY+y*5,4,4); 
				}
			}
		}
		posX += 20;
	}
}
/**
 * Main game loop, call each frame
 */
gameLoop = function() {
	if (!auto) {
		return;
	}
	window.requestAnimationFrame(gameLoop);
	var grd=ctx.createLinearGradient(0,0,476,500);
	grd.addColorStop(0,"rgba(15, 0, 63,0.3)");
	grd.addColorStop(1,"rgba(53, 1, 84,0.3)");
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,476,500);

	drawStar(444, 6, 19);
	drawStar(328, 333, 10);
	drawStar(146, 181, 17);
	drawStar(153, 204, 15);
	drawStar(303, 368, 12);
	drawStar(312, 353, 14);
	drawStar(112, 447, 15);
	drawStar(170, 242, 11);
	drawStar(169, 280, 13);
	drawStar(184, 60, 12);
	drawStar(61, 140, 16);
	drawStar(28, 238, 18);
	drawStar(291, 330, 11);
	drawStar(143, 183, 10);
	drawStar(350, 222, 11);
	drawStar(253, 162, 13);
	drawStar(200, 451, 11);
	drawStar(55, 128, 17);
	drawStar(361, 288, 11);
	drawStar(178, 144, 15);
	var l,i;
	// draw bricks
	for (y=0; y<24; y++) {
		for (x=0; x<14; x++) {
			l=level[y][x];
			if (l.type!="0") {
				switch (l.type) {
					case "R":
					case "M":
						drawBrick(x*34,y*20, 1, 1, 1, l.type);
						break;	
					default:
						drawBrick(x*34,y*20, l.r, l.g, l.b, l.type);
				}
			}
		}
	}
	//update balls
	for (i=0; i<GAME.balls.length; i++) {
		if (!GAME.balls[i].update()) {
			GAME.balls.splice(i--,1);
			if (GAME.balls.length==0) {
				GAME.players[0].explode();
			}
		}
	}
	//update sprites
	for (i=0; i<GAME.sprites.length; i++) {
		if (!GAME.sprites[i].update()) {
			GAME.sprites.splice(i--,1);
		}
	}
	//update players
	for (i=0; i<GAME.players.length; i++) {
		GAME.players[i].update();
	}
	//update monsters
	for (i=0; i<GAME.monsters.length; i++) {
		if (!GAME.monsters[i].update()) {
			GAME.monsters.splice(i--,1);
		}
	}
	//update bonus
	for (i=0; i<GAME.bonus.length; i++) {
		if (!GAME.bonus[i].update()) {
			GAME.bonus.splice(i--,1);
		}
	}
	//update score
	if (GAME.mode=="career" || GAME.mode=="challenge") {
		var number = score;
		number = number.toString();
		number = (GAME.mode=="career" ? "LEVEL" : "DARE")+ " "+GAME.level+" - "+("0000000"+number).substring(number.length);
		sp.fillStyle = "#FFF";
		sp.fillRect(522,206,370,45);
		sp.fillStyle = "#F00";
		drawDigits(707-10*number.length, 216, number, sp);
	}
	//draw rope
	if (GAME.players[0].rope) {
		ctx.shadowBlur = 10;
		ctx.shadowColor = "rgba(172,19,222,1)";
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.moveTo(0,450);
		for (i=0; i<500; i+=10) {
			ctx.lineTo(i,450+(Math.random()*10));
		}
		ctx.strokeStyle = "#FFF";
		ctx.stroke(); 
	}
	//draw a message
	if (GAME.text) {
		GAME.textFrame++;
		if (GAME.textFrame>60) {
			GAME.text = false;
		} else if (GAME.textFrame<10 || GAME.textFrame>50) {
			GAME.textX-= (4*GAME.text.length+131)/5;
		} else {
			GAME.textX = 238-8*GAME.text.length;
		}
		ctx.shadowBlur = 20; 
		ctx.shadowColor = "rgba(255,255,255,1)";
		ctx.fillStyle = "rgba(255,255,255,0.5)";
		ctx.fillRect(0,50,476,50); 
		new TEXT2(GAME.textX,68,GAME.text,null, 2);
	}
	ctx.shadowBlur = 0; 
	//apply a glitch to canva
	if (GAME.glitchMode) {
		glitch(0,0,476,100,-10,0);
		glitch(0,100,476,100,10,100);
		glitch(0,200,476,100,-22,200);
		glitch(0,300,476,100,7,300);
		glitch(0,400,476,100,-80,400);
	}
	GAME.updateEffects();
	
	if (GAME.wait) {
		ctx.fillStyle = "#E4BD3B";
		ctx.fillRect(50,370,376,70); 
		new TEXT2(110,398,"click on the ball");
	}
}
/**
 * Glitch canva
 * @param {int} x
 * @param {int} y
 * @param {int} width
 * @param {int} height
 * @param {int} x2
 * @param {int} y2
 */
glitch = function(x, y, width, height, x2, y2) {
	var imgd = ctx.getImageData(x, y, width, height);
	var pix = imgd.data;
	var scanLine = Math.random()>0.5 ? 7 : 2;
	for (var i=0; i<pix.length; i+=1+scanLine) {
		pix[i] = pix[i+1];
	}
	ctx.putImageData(imgd,x2,y2);
}
/**
 * Draw a brick
 * @param {int} x
 * @param {int} y
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {string} type
 */
drawBrick = function(x, y, r, g, b, type) {
	if (r) {
		ctx.fillStyle = "rgb("+r+","+g+","+b+")";
		ctx.fillRect(x+2,y+2,30,16);
		
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo(x,y);
		ctx.lineTo(x,y+20);
		ctx.lineTo(x+34,y+20);

		ctx.moveTo(x+1,y+1);
		ctx.lineTo(x+1,y+19);
		ctx.lineTo(x+33,y+19);

		ctx.strokeStyle = "#765954";
		ctx.stroke(); 

		ctx.beginPath();
		ctx.moveTo(x+1,y);
		ctx.lineTo(x+34,y);
		ctx.lineTo(x+34,y+20);

		ctx.moveTo(x+2,y+1);
		ctx.lineTo(x+33,y+1);
		ctx.lineTo(x+33,y+19);

		ctx.strokeStyle = "#e5d7d4";
		ctx.stroke(); 
	}
	if (type=="X" || type=="G") {
		ctx.drawImage(imgs["e"], x+2, y+2);
	}
	if (type=="R" || type=="M") {
		ctx.drawImage(imgs["t"], (type=="M" ? 44 : 14), 11, 30, 16,  x+2, y+2, 30, 16);
	}
	if (["H","I","J"].indexOf(type)>-1) {
		r*=1.2;
		g*=1.2;
		b*=1.2;

		ctx.fillStyle = "rgb("+Math.round(r)+","+Math.round(g)+","+Math.round(b)+")";
		ctx.shadowBlur = 10;
		ctx.shadowColor = "#000";
		if (type=="J") {
			ctx.fillRect(x+4,y+4,7,12);
			ctx.fillRect(x+13,y+4,7,12);
			ctx.fillRect(x+22,y+4,7,12);
		}
		if (type=="I") {
			ctx.fillRect(x+4,y+4,11,12);
			ctx.fillRect(x+18,y+4,11,12);
		}
		if (type=="H") {
			ctx.fillRect(x+6,y+4,24,12)
		}
	} else if (type=="T" || type=="F") {
		ctx.beginPath();
		ctx.arc(x+17, y+10, 8, 0, 2 * Math.PI, false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#FFF";
		ctx.stroke();
	} else if (type=="N") {
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "#000";
		ctx.beginPath();
		ctx.arc(x+17, y+10, 4, 0, 2 * Math.PI, false);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#00F";
		ctx.stroke();
		ctx.fillStyle = "#FFF";
		ctx.fill();
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
	}
	ctx.shadowBlur = 0; 
}
/**
 * Init
 */
init = function() {
	generateLevel();
	auto = true;
	GAME.sprites=[];
	GAME.players=[];
	GAME.effects=[];
	GAME.bonus=[];
	GAME.monsters=[];

	ctx = document.getElementById("c").getContext("2d");
	if (GAME.intervalPortal) {
		clearInterval(GAME.intervalPortal);
	}
	GAME.intervalPortal = setInterval("GAME.checkPortal()",GAME.portalTime);
	GAME.level++;
	GAME.updateLives();
	GAME.initStart();
	gameLoop();
}

/**
 * Init level (create bricks objects and set colors)
 * @param {array} area
 */
initLevel = function(area) {
	GAME.nbBrick=0;
	level = [];
	for (y=0; y<30; y++) {
		level[y] = [];
		if (!area[y]) {
			area[y] = "00000000000000";
		}
		for (x=0; x<14; x++) {
			level[y][x] = new window["BRICK"+area[y][x]](x, y, area[y][x]);
		}
	}
	
	for (y=0; y<24; y++) {
		for (x=0; x<14; x++) {
			var b = level[y][x];
			switch (b.type) {
				case "U":
				case "V":
				case "W":
				case "H":
				case "I":
				case "J":
					GAME.nbBrick++;
					var bA = [];
					bA[1] = level[y-1] && level[y-1][x-1] ? level[y-1][x-1] : false;
					bA[2] = level[y-1] && level[y-1][x] ? level[y-1][x] : false;
					bA[3] = level[y-1] && level[y-1][x+1] ? level[y-1][x+1] : false;
					bA[4] = level[y][x-1];

					var NbColor = 0;
					var RTmp = 0;
					var GTmp = 0;
					var BTmp = 0;

					for (var NbTmp = 1; NbTmp<5; NbTmp++) {
						if (bA[NbTmp] && bA[NbTmp].r && bA[NbTmp].type==b.type) {
							NbColor++;
							RTmp+= bA[NbTmp].r;
							GTmp+= bA[NbTmp].g;
							BTmp+= bA[NbTmp].b;
						}
					}
					if (NbColor>=1) {
						if (b.type=="U" || b.type=="V") {
							Facteur = NbColor>1 ? 8 : 32;
						} else {
							Facteur = NbColor>1 ? 4 : 8;
						}
						b.r = Math.floor(RTmp/NbColor + ((Math.random()*Facteur)-(Facteur/2)));
						b.g = Math.floor(GTmp/NbColor + ((Math.random()*Facteur)-(Facteur/2)));
						b.b = Math.floor(BTmp/NbColor + ((Math.random()*Facteur)-(Facteur/2)));
						if (b.r>255) { b.r = 255-(b.r%255); }
						if (b.g>255) { b.g = 255-(b.g%255); }
						if (b.b>255) { b.b = 255-(b.b%255); }
					} else {
						switch (b.type) {
							case "V":
								b.r = 136;
								b.g = 204;
								b.b = 136;
								break;
							case "W":
								b.r = 87;
								b.g = 168;
								b.b = 221;
								break;
							case "H":
							case "I":
							case "J":
							case "U":
								b.r = 221;
								b.g = 168;
								b.b = 87;
								break;
						}
					}
				break;
			case "T":
				b.r = 27;
				b.g = 54;
				b.b = 81;
				break;
			case "X":
				b.r = 255;
				b.g = 255;
				b.b = 255;
				break;
			case "G":
				b.r = 236;
				b.g = 234;
				b.b = 35;
				break;
			case "N":
				b.r = 231;
				b.g = 34;
				b.b = 169;
				break;
			} 
		}
	}
	GAME.balls = [];
}

/**
 * read or generate a level
 * if it is a challenge level, decode entry
 * if it is a career level, take a seed and generate a level with it
 */
generateLevel = function() {
	GAME.portalTime = 10000;
	if (GAME.mode!="career") {
		if (GAME.level==11) {
			GAME.portalTime = 1000;
		}
		return inflateLevel(dares[GAME.level]);
	} else {
		seed = maps[GAME.level];
	} 
	var possible = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,"U","U","U","U","U","U","V","V","V","V","V","W","W","W","W","H","H","H","I","I","J","G","X","X","X","R","M","N","F"];
	function chance(type) {
		switch (type) {
			case 0:
			case "U":
			case "V":
			case "W":
			case "X":
				return 3;
			case "M":
			case "F":
			case "N":
				return 0;
			default:
				return 1;
		}	
	}
	fakeRand = function() {
		seed = (seed%10000);
		ret = seed/10000;
		seed *= 1215154987;
		return ret;
	}
	rand = function(min, max) {
		return min + Math.round(fakeRand()*(max-min));
	}
	gettype = function(y, x) {
		return (Tab[y] && Tab[y][x]) ? Tab[y][x].type : false;
	}
	var Tab = [];
	for (y=0; y<21; y++) {
		Tab[y] = [];
		for (x=0; x<14; x++) {
			Tab[y][x] = {type:0};
		}
	}
	areas = [];
	for (y=0; y<rand(8,21); y++) {
		area = "";
		for (x=0; x<14; x++) {
			if (gettype(y,x-1)!==false && gettype(y-1,x)!==false) {
				if (rand(0,1)==0) {
					if (rand(0,chance(gettype(y,x-1)))==0) {
						type = possible[rand(0,possible.length-1)];
						Tab[y][x].type = type;
					} else {
						Tab[y][x].type = gettype(y,x-1);
					}
				
				} else {
					if (rand(0,chance(gettype(y-1,x)))==0) {
						type = possible[rand(0,possible.length-1)];
						Tab[y][x].type = type;
					} else {
						Tab[y][x].type = gettype(y-1,x);
					}
				}
			} else if (gettype(y,x-1)!==false) {
				if (rand(0,chance(gettype(y,x-1)))==0) {
					type = possible[rand(0,possible.length-1)];
					Tab[y][x].type = type;
				} else {
					Tab[y][x].type = gettype(y,x-1);
				}
			} else if (gettype(y-1,x)!==false) {
				if (rand(0,chance(gettype(y-1,x)))==0) {
					type = possible[rand(0,possible.length-1)];
					Tab[y][x].type = type;
				} else {
					Tab[y][x].type = gettype(y-1,x);
				}
			} else {
				type = possible[rand(0,possible.length-1)];
				Tab[y][x].type = type;
			}
			if (x>6) {
				Tab[y][x].type = gettype(y,13-x);
			}
			area+=Tab[y][x].type
		}
		areas.push(area);
	}
	
	for (var y=0; y<areas.length; y++) {
		if (areas[y].indexOf("F")!=-1) {
			var nx = rand(1,6);
			var ny = rand(1,areas.length-1);
			areas[ny] = areas[ny].substr(0,nx)+"T"+areas[ny].substr(nx+1);
			areas[ny-1] = areas[ny-1].substr(0,nx)+"0"+areas[ny-1].substr(nx+1);
			areas[ny] = areas[ny].substr(0,13-nx)+"T"+areas[ny].substr(14-nx);
			areas[ny-1] = areas[ny-1].substr(0,13-nx)+"0"+areas[ny-1].substr(14-nx);
			break;
		}
	}
	
	initLevel(areas);
}
/**
 * Inflate level (sort of RLE decoding)
 * @param {type} map
 */
inflateLevel = function(map) {
	var areas = [];
	var line = "";
	var count = 1;
	for (var i=0; i<map.length; i++) {
		if (new RegExp(/^[1-9a-e]$/).test(map[i])) {
			count = parseInt(map[i], 16);
		} else {
			line+=map[i].repeat(count);
			count = 1;
			if (line.length==14) {
				areas.push(line);
				line = "";
			}
		}
	}
	initLevel(areas);
}
/**
 * Display home screen
 */
displayHome = function() {
	sp.clearRect(0,0,898,500);
	new TEXT2(10,40,"popnoid",sp, 8);
	new TEXT2(245,250,(menu==1 ? "@" : "")+" career mode",sp, 2);
	new TEXT2(180,310,(menu==2 ? "@" : "")+" challenges mode",sp, 2);
	new TEXT2(245,370,(menu==3 ? "@" : "")+" how to play",sp, 2);
}
/**
 * Display how to screen
 */
displayHowTo = function() {
	sp.clearRect(0,0,898,500);
	new TEXT2(10,40,"popnoid",sp, 8);
	new TEXT2(270,200,"how to play",sp, 2);
	new TEXT2(20,270,"use mouse to move the pad#you can direct the balls depending on the position of #your pad##there is a lot of bonus you can catch#few of them will help you when others do not...##the career mode request you to finish all the 20 levels#the challenge mode request you to win all the 12 dares#i made for you.",sp, 1);
	new TEXT2(270,480,"click to return to menu",sp, 1);
}
/**
 * Display end level screen
 */
displayEndLevel = function(win) {
	sp.clearRect(0,0,898,500);
	document.body.classList.remove("inGame");
	GAME.players = [];
	new TEXT2(10,40,"popnoid",sp, 8);
	if (win) {
		GAME.mode = GAME.mode=="career" ? "levelCompleted" : "challengeCompleted";
		new TEXT2(220,280,"level completed",sp, 2);
		new TEXT2(270,480,"click to play next level",sp, 1);
	} else {
		GAME.mode="gameOver";
		new TEXT2(310,280,"game over",sp, 2);
		new TEXT2(270,480,"click to return to menu",sp, 1);
	}
}
/**
 * Display ingame screen and init game
 */
displayInGame = function() {
	document.body.classList.add("inGame");
	sp.clearRect(0,0,898,500);
	sp.fillStyle = "#FFF";
	sp.fillRect(522,263,206,118);
	new TEXT2(540,80,"popnoid",sp, 3);
	new TEXT2(541,355,"g",sp, 1);
	new TEXT2(572,355,"l",sp, 1);
	new TEXT2(603,355,"i",sp, 1);
	new TEXT2(633,355,"t",sp, 1);
	new TEXT2(666,355,"c",sp, 1);
	new TEXT2(695,355,"JS",sp, 1);
	init();
}
/**
 * Init board
 * display stars, home screen and create portal
 */
initBoard = function() {
	for (var i=0; i<imgsNames.length; i++) {
		imgs[imgsNames[i]] = new Image(); 
		imgs[imgsNames[i]].onload = function() {
			displayHome();
		}
		imgs[imgsNames[i]].src = imgsNames[i]+".png";
	}

	sb = document.getElementById("bg").getContext("2d");
	sp = document.getElementById("speech").getContext("2d");			
	var grd=sb.createLinearGradient(0,0,476,500);
	grd.addColorStop(0,"rgba(15, 0, 63,1)");
	grd.addColorStop(1,"rgba(53, 1, 84,1)");
	sb.fillStyle =grd;
	sb.fillRect(0,0,1920,1080); 	
	for (var i=0; i<100; i++) {
		drawStar(Math.random()*1920, Math.random()*1080, 10+Math.random()*10, sb);
	}
	
	var portalNumber = 0;
	for (x=0; x<2; x++) {
		for (var y=12; y<500; y+=160) {
			portalNumber++;
			var DIV = document.createElement("DIV");
			DIV.className="portal";
			DIV.id = "portal"+portalNumber;
			if (x==0) { DIV.style.transform="scaleX(-1)"; }
			if (y==492) {
				DIV.className+=" bottom";
			}
			if (x==0) {
				DIV.style.left = "0";
			} else {
				DIV.style.right = "0";
			}

			DIV.style.top = y+"px";
			document.getElementById("game").appendChild(DIV);
		}
	}
	
	/**
	 * Stop the interval for monster enters when the user change browser tab
	 */
	var visibilityChange; 
	if (typeof document.hidden !== "undefined") {
		visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
		visibilityChange = "mozvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		visibilityChange = "webkitvisibilitychange";
	}
	document.addEventListener("visibilitychange", function() {
		if (document.hidden) {
			clearInterval(GAME.intervalPortal);
		} else  {
			GAME.intervalPortal = setInterval("GAME.checkPortal()",GAME.portalTime);
		}
	}, false);

	
	/**
	 * Add interaction with mouse
	 */
	document.addEventListener("mousemove", function(e) {
		var movementX = e.movementX       ||
				e.mozMovementX    ||
				e.webkitMovementX ||
				0;
		if (GAME.players.length) {
			var p = GAME.players[0];
			if (!p.blocked) {
				p.x = e.clientX-((window.innerWidth-898)/2) - p.size/2 - 17;
				if (p.glue) {
					for (var i=0; i<GAME.balls.length; i++) {
						if (GAME.balls[i].glue) {
							GAME.balls[i].x += movementX;
						}
					}
				}
			}
		} else if (GAME.mode=="menu") {
			if (e.clientY>239 && e.clientY<287) {
				menu=1;displayHome();
			}
			if (e.clientY>298 && e.clientY<347) {
				menu=2;displayHome();
			}
			if (e.clientY>359 && e.clientY<407) {
				menu=3;displayHome();
			}
		}	
	}, false);
	
	/**
	 * Check what to do when the player click somewhere
	 * @param {mouseEvent} e
	 */
	document.onmousedown = function(e) {
		if (GAME.wait) {
			var rect = document.getElementById("c").getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			if (x>227 && x<248 && y>466 && y<483) {
				GAME.players[0].blocked = false;
				GAME.balls[0].speed = 5;
				GAME.wait = false;
			}
		} else if (GAME.mode=="gameOver") {
			GAME.mode="menu";
			displayHome();
		} else if (GAME.mode=="levelCompleted") {
			GAME.mode="career";
			displayInGame();
		} else if (GAME.mode=="challengeCompleted") {
			GAME.mode="chalenge";
			displayInGame();
		} else if (GAME.mode=="menu") {
			switch (menu) {
				case 1: GAME.mode="career";GAME.life = 10;GAME.level = 0;displayInGame();break;
				case 2: GAME.mode="challenge";GAME.life = 30;GAME.level = 0;displayInGame();break;
				case 3: GAME.mode="howTo";displayHowTo();break;
			}
		} else if (GAME.mode=="howTo") {
			GAME.mode="menu";
			displayHome();
		} else if (GAME.players.length) {
			GAME.addLaser();	
			GAME.players[0].dropGlueBalls();
		}
	}
	console.log("displayHome", sp);
	displayHome();
}
