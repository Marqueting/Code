

/*  Validar Solo Numeros */
function SoloNumeros(evt,id){
	if(window.event){// IE
		keynum = evt.keyCode;
	}else{
		keynum = evt.which;
	}
	//comprobamos si se encuentra en el rango
	if((keynum>47 && keynum<58) || keynum == 8 || keynum == 0){
		$('#info-cedula').html("");
		return true;
	}else{
		// solo se permiten numeros
		$('#info-cedula').html("Solo se permiten numeros");
		return false;
	}
}
/*  Validar Solo Letras */
function SoloLetras(e){
	tecla = (document.all) ? e.keyCode : e.which; 
	   if (tecla==8) return true; // backspace
	if (tecla==32) return true; // espacio
	if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
	if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
	if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
	 
	patron = /[A-ZñÑa-z]/; //patron
	 
	te = String.fromCharCode(tecla); 
	//return patron.test(te); // prueba de patron
	if (!patron.test(te)){
		//solo se perimiten letras
		$('#info-campos').html("Solo se permiten letras");
		return false;
	} else{
		$('#info-campos').html("");
		return true;
	}
}
/*  Validar Solo Numeros y Letras */
function SoloLetrasYnumeros(e){
	tecla = (document.all) ? e.keyCode : e.which; 
	   if (tecla==8) return true; // backspace
	if (tecla==32) return true; // espacio
	if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
	if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
	if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
	 
	patron = /[A-ZñÑa-z0-9]/; //patron
	 
	te = String.fromCharCode(tecla); 
	//return patron.test(te); // prueba de patron
	if (!patron.test(te)){
		//solo se permiten letras y números
		alert("solo se permiten números y/o letras");
		return false;
	}
}
