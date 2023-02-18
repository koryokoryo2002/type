let Q = ["apple","banana","melon","mango","starwberry","blueberry","orange"];//問題文
let Q_No;

let Q_index = -1;

  
window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){
	new Audio('audio/click.mp3').play(); //audio key click

	let typeword = document.getElementById("start")
	let keyCode = event.key;


	if(Q_index == -1) {
		createNewType(typeword)
	}
	else {
		let Q_length = Q[Q_No].length;
		if (Q[Q_No].charAt(Q_index) == keyCode) { //押したキーが合っていたら
			Q_index++;
			document.getElementById("done").innerHTML = Q[Q_No].substring(0, Q_index);
			typeword.innerHTML = Q[Q_No].substring(Q_index, Q_length); //問題を書き出す
			if (Q_length == Q_index){ //全部正解したら
				new Audio('audio/sucess.mp3').play();
				createNewType(typeword)
			}
		}
	}
}

function createNewType(typeword) {
	Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
	Q_index = 0;
	typeword.innerHTML = Q[Q_No];
	document.getElementById("done").innerHTML = "";
}
