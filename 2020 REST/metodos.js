function solonumeros(e){
	key=e.keyCode || e.which;//almacena la entrada del teclado
	teclado=String.fromCharCode(key);//almacenar lo que haya en la entrada del teclado
	numeros='0123456789';
	especiales='46';
	teclado_especial=false;
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
	key=e.keyCode || e.which;
	teclado=String.fromCharCode(key).toLowerCase();
	letras=" áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales="8-37-38-46-163";
	teclado_especial=false;
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