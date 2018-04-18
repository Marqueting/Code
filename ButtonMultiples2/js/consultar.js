$(document).ready(function() {

	$('#consultar').click(function(e) {
		
		$.ajax({
			url: 'http://localhost/ButtonMultiples2/php/consultar.php',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			beforeSend: function() {
				$('.fa').css('display','inline');
			}
		})
		.done(function(resultado) {  //true
			var funArray = eval(resultado);
        	$('#nombre').val(funArray[1]);
        	$('#apellido').val(funArray[2]);
			$('#info-validacion').html("Consulta Exitosa :)");


		})
		.fail(function() {  //false
			
			$('#info-validacion').html("No hay Registros :(");
			$('#nombre').val("");
        	$('#apellido').val("");
        	$('#cedula').focus();
		})
		.always(function() {
			setTimeout(function() {
				$('.fa').hide();
			}, 1000);
		});
		
	})
})