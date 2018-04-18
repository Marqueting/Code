$(document).ready(function() {

	$('#modificar').click(function(e) {
		
		$.ajax({
			url: 'http://localhost/ButtonMultiples2/php/modificar.php',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			beforeSend: function() {
				$('.fa').css('display','inline');
			}
		})
		.done(function(resultado) {  //true
				$('#info-validacion').html("Los datos se modificaron correctamente =)");
		})
		.fail(function() {  //false
			$('#info-validacion').html("Error al modificar los datos =(");
        	$('#cedula').focus();
		})
		.always(function() {
			setTimeout(function() {
				$('.fa').hide();
			}, 1000);
		});
		
	})
})