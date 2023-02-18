let Q = ["apple","banana","melon","mango","starwberry","blueberry","orange"];//問題文
let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する

let Q_index = 0;
let Q_length = Q[Q_No].length;
  
  
window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){
		  
	let keyCode = event.key;
	if (Q_length == Q_length-Q_index){			  
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //問題を書き出す
	}

	new Audio('click.mp3').play();


	if (Q[Q_No].charAt(Q_index) == keyCode) { //押したキーが合っていたら

		Q_index++; //判定する文章に１足す
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //問題を書き出す

		if (Q_length-Q_index === 0){ //全部正解したら
			new Audio('sucess.mp3').play();
	
			Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
			Q_index = 0;//回答初期値・現在どこまで合っているか判定している文字番号
			Q_length = Q[Q_No].length;//計算用の文字の長さ


			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //新たな問題を書き出す

		}
	}
}
