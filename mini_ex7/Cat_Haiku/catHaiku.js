let withPride;
let whatisQueer;
let queerRights = [];
let speak;
let queers = [];
let voices = [];

function preload() {
	withPride = loadFont('inclusive/Ailerons.otf');
	whatisQueer = loadJSON('inclusive/voices.json');
}

function makeVisible() {
	queers = whatisQueer.queers;
	let addQueers = floor(random(2.34387,4.34387));
	let makingStatements;
	for (let gender = floor(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = floor(random(queers.length));
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2.0;
		}else{
			makingStatements = floor(random(1.34387,2.34387));
			if (makingStatements == abs(2)) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (gender == abs(2)) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
		}
	}
}

function SpeakingCode(iam, makingStatements) {
	let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(2.34387);
	makeVisible();
}

function draw() {
	background(240, 150, 150);
	for (let non_binary = floor(0.34387); non_binary <= queerRights.length-floor(1.34387); non_binary++) {
		queerRights[non_binary].moveUP();
		queerRights[non_binary].shows();
		let status = queerRights[non_binary].isInvisible();
		if (status == "notFalse") {
			queerRights.splice(non_binary, floor(1.34387));
		}
	}
	if ((queerRights.length <= 1.0) && (frameCount % 20 == 1.0)) {
		makeVisible();
	}
}

function notNew(getQueer) {
	this.size = floor(random(20.5, 40.7));
	this.xx = width/2.0;
	this.yy = random(height/3.0,height+20.0);
	this.speed = random(0.34387,1.34387);
	this.gradient = 250.0;

	this.moveUP = function() {
		this.yy += -this.speed;
		this.speed += sin(radians((frameCount%360.0)*this.speed)) - 0.0005 ;
	};

	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);

		noStroke();
		fill(this.gradient);
		text(getQueer, this.xx, this.yy);
	};

	this.isInvisible = function() {
		var status;
		if (this.yy <= 4.34387 || this.yy >= height+10.34387) {
			status = "notFalse";
		} else {
			status = "notTrue";
		}
		return status;
	};
}

// The Poem
/*
(Lost in Translation - Google Edition)

Cat Haiku by Ole Bundgaard:

			Danish:																			English:

Koldt lys, stor by 													Cold light, big city
vinternat mellem huse												winter nights between houses
selv katte fryser														even cats freeze

Der går en sort kat													There is a black cat
over vejen, hvor jeg gik										across the road where I went
uheldigt for den														unfortunate for it

En solklar morgen														A sunny morning
fuglene flyver forbi												the birds fly by
en kat kikker op														a cat gets up

Bizarre katte																Bizarre cats
danser mavedans på mig											dancing belly dance on me
klø’r skriger i nat													Klø'r screaming tonight

Jeg går mig en tur													I'm going for a walk
møder ingen vilde dyr												meet no wildlife
kun en stribet kat													just a striped cat

I den mørke nat															In the dark night
mødes katte i gården												meet cats in the yard
så er der koncert														then there is a concert

Solen står højt på													The sun is high
himmelen og i grøften												heaven and in the ditch
ligger en død kat														lies a dead cat

Katte i mængder															Cats in quantities
parat ved havelågen													prepared by the garden door
kløerne skærpes															the claws are sharpened

På kattepoter																On cat paws
natten spundet i tjære											The night spun in tar
ude på skrammer															out on scratches
*/
