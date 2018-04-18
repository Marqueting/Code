$(document).ready(function() {
	$('#cedula').focus();

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: 'http://localhost/ButtonMultiples2/php/process.php',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			beforeSend: function() {
				$('.fa').css('display','inline');
			}
		})
		.done(function(resultado) {  //true
			$('#info-validacion').html("Registro exitoso =)")
			setTimeout(function() {
				location.reload();
			}, 2000);
		
		})
		.fail(function() {  //false
			$('#info-validacion').html("La persona ya esta registrada (¬.¬)");
		})
		.always(function() {
			setTimeout(function() {
				$('.fa').hide();
			}, 1000);
		});
		
	})
})