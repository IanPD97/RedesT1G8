function solonumeros_k(e){
	let key=e.keyCode || e.which;//almacena la entrada del teclado
	let teclado=String.fromCharCode(key);//almacenar lo que haya en la entrada del teclado
	let numeros='0123456789.-kK';
	let especiales='46';
	let teclado_especial=false;
	for(var i in especiales){
		if(key==especiales[i]){
		teclado_especial=true;
		}
	}
	if(numeros.indexOf(teclado)==-1 && !teclado_especial){
		return false;
	}
}

function sololetras(e){ 
	let key=e.keyCode || e.which;
	let teclado=String.fromCharCode(key).toLowerCase();
	let letras=" áéíóúabcdefghijklmnñopqrstuvwxyz";
	let especiales="8-37-38-46-163";
	let teclado_especial=false;
	for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
			break;
		}
	}
	if(letras.indexOf(teclado)==-1 && !teclado_especial){
		return false;
	}
}
