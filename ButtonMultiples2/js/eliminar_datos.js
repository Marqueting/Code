$(document).ready(function() {

	$('#eliminar').click(function(e) {
		var conf = confirm('¿Desea eliminar los datos?');
		if (conf) {
			$.ajax({
			url: 'http://localhost/ButtonMultiples2/php/eliminar.php',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			beforeSend: function() {
				$('.fa').css('display','inline');
			}
		})
		.done(function(resultado) {  //true
				$('#info-validacion').html("Los datos se eliminaron correctamente :)");
		})
		.fail(function() {  //false
			$('#info-validacion').html("Error al eliminar los datos :(");
        	$('#cedula').focus();
		})
		.always(function() {
			setTimeout(function() {
				$('.fa').hide();
			}, 1000);
		});
	} else {
		return false;
	}
		
		
	})
})