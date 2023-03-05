let Q = ["win","forget","go","come","become","have","find","make","see","hear","meet","lose","read","win","sing","drink","sit","swim","run","begin","take","stand","understand","drive","write","ride","break","speak","know","draw","throw","grow","fly","send","spend","build","buy","bring","think","catch","teach","say","pay","keep","sleep","feel","leave","shine","continue","escape","master","pick","hunt","press","guess","damage","marry","cancel","blow","relax","offer","collect","lead","hide","trust","agree","exchange","shock","introduce","join","state","pass","stew","attend","believe","hate","rise","act","bake","shoot","waste","invite","wish","travel","wave","hurt","taste","perform","decide","twist","board","graduate","sound","check","prepare","advise","add","cross","mark","solve","raise","miss","smoke","die","sign","lend","fit","happen","celebrate","forgive","smell","cheer","hold","support","explain","climb","burn","plant","fear","choose","touch","borrow","boil","receive","greet","pull","save","cost","follow","fix","fold","decorate","release","feed","spread","remember","order","deliver","wear","share","steal","roast","right","impossible","tight","crowded","shy","total","rude","foolish","thirsty","boring","official","common","familiar","nervous","expensive","smart","several","alive","cheap","international","enough","public","necessary","possible","serious","basic","comfortable","free","popular","famous","foreign","fresh","amazing","crazy","past","local","extra","correct","bright","dead","own","terrible","tasty","absent","wrong","major","each","excellent","normal","surprised","lazy","polite","same","lonely","fair","electric","elderly","loud","pop","useful","full","fat","private","narrow","helpful","healthy","low","important","natural","afraid","actually","exactly","softly","both","overseas","together","friendly","finally","nearly","recently","carefully","abroad","outdoors","upstairs","badly","downtown","instead","easily","straight","almost","aloud","anyway","nowadays","rather","especially","onto","beside","between","across","during","against","without","behind","while","although","crowd","planet","village","age","port","ceiling","skill","history","trash","cart","shadow","closet","branch","section","platform","cave","item","tournament","manager","middle","language","nest","comb","citizen","stair","hero","tool","vegetable","human","view","castle","shower","capital","shade","festival","field","customer","ladder","apartment","price","culture","future","glove","symbol","volunteer","emotion","airport","law","entrance","accident","nature","twin","cage","seed","courage","mirror","reason","headache","nephew","custom","flavor","gate","information","sunrise","gesture","job","sweater","dictionary","forest","generation","sunshine","case","fact","climate","statue","figure","gas","storm","subject","notice","boss","scissors","league","theater","pan","sign","mayor","note","neighbor","gym","island","model","weather","cause","shrine","dust","coast","chopsticks","soldier","diet","actor","department","highway","person","tradition","area","refrigerator","factory","heat","temperature","pain","rest","bay","schedule","desert","garbage","guide","medicine","tail","experience","aquarium","puppy","meal","million","company","garage","grass","system","adult","purse","period","wallet","fever","promise","novel","project","hole","message","truth","bottom","secret","clothes","government","height","thought","interview","voice","battle","rule","audience","resort","award","role","address","pleasure","continent","exam","leaf","advice","recipe","earthquake","heaven","office","terminal","license","wedding","health","prize","tear","crop","convenience","court","niece"];//問題文
let typingText;
let Q_index = -1;

  
window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){
	new Audio('audio/click.mp3').play();				//audio key click

	let typingTextDispArea = document.getElementById("start")
	let keyCode = event.key;


	if(Q_index == -1) {									//page is loaded
		createNewType(typingTextDispArea)
	}
	else {
		let text_length = typingText.length;
		if (typingText.charAt(Q_index) == keyCode) {	//press key is correct
			Q_index++;
			document.getElementById("done").innerHTML
				= typingText.substring(0, Q_index);		//pressed key become red
			typingTextDispArea.innerHTML
				= typingText.substring(Q_index, text_length);
			
			if (text_length == Q_index){				// complete typing
				new Audio('audio/sucess.mp3').play();
				createNewType(typingTextDispArea)
			}
			else {
				selKeyboardActive(typingText[Q_index]);
			}
		}
	}
}

function createNewType(typingTextDispArea) {
	typingText = Q[Math.floor( Math.random() * Q.length)];
	Q_index = 0;
	typingTextDispArea.innerHTML = typingText;
	document.getElementById("done").innerHTML = "";
	selKeyboardActive(typingText[0]);
}

// アクティブキー処理
function selKeyboardActive(typeWord) {
    const prevActive = document.getElementById('virtual-keyboard').querySelector('.active');
    const selector = '.key_' + typeWord;
    const target = document.getElementById('virtual-keyboard').querySelector(selector);
    if (prevActive) {
		prevActive.classList.remove('active');
    }
    if (target) {
		target.classList.add('active');
    }
}

// 対応キーの変換
function keyConvert(key) {
    const keyMap = {
		'-':'hyphen', '@':'atmark', ';':'semicolon', ':':'colon', ',':'comma',
		'.':'period', '/':'slash', ' ':'space'
    }
	
    if (keyMap[key]) {
		return keyMap[key];
    } else {
		return key;
    }
}
