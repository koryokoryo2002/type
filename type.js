let Q = ["apple","banana","melon","mango","starwberry","blueberry","orange"];//問題文
let typingText;
let Q_index = -1;

  
window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){
	new Audio('audio/click.mp3').play(); //audio key click

	let typingTextDispArea = document.getElementById("start")
	let keyCode = event.key;


	if(Q_index == -1) {
		createNewType(typingTextDispArea)
	}
	else {
		let text_length = typingText.length;
		if (typingText.charAt(Q_index) == keyCode) { //押したキーが合っていたら
			Q_index++;
			document.getElementById("done").innerHTML = typingText.substring(0, Q_index);
			typingTextDispArea.innerHTML = typingText.substring(Q_index, text_length); //問題を書き出す
			if (text_length == Q_index){ //全部正解したら
				new Audio('audio/sucess.mp3').play();
				createNewType(typingTextDispArea)
			}
		}
	}
}

function createNewType(typingTextDispArea) {
	typingText = Q[Math.floor( Math.random() * Q.length)];//問題をランダムで出題する
	Q_index = 0;
	typingTextDispArea.innerHTML = typingText;
	document.getElementById("done").innerHTML = "";
}
