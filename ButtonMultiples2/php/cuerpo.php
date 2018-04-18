<body>
	<h1>Datos Personales</h1>
	<form method="POST">
		<div class="form-group"> 
		    <input class="form-control" id="cedula" name="cedula" type="text" placeholder="Cedula"  required="" onkeypress="return SoloNumeros(event)" />
		    <span id="info-cedula"></span>
		</div>
		<div class="form-group"> 
		    <input class="form-control" id="nombre" name="nombre" type="text" placeholder="Nombre"  required="" onkeypress="return SoloLetras(event)" />
		    <span id="info-campos"></span>
		</div>
		<div class="form-group"> 
		    <input class="form-control" id="apellido" name="apellido" type="text" placeholder="Apellido"  required="" onkeypress="return SoloLetras()" />
		    <span id="info-campos"></span>
		</div>
		<div class="btn-group">
		<input class="btn btn-success" type="submit" id="incluir" value="Incluir">
		</div>
		<div class="btn-group">
		<input class="btn btn-info" type="button" id="consultar" value="Consultar">
		</div>
		<div class="btn-group">
		<input class="btn btn-warning" type="button" id="modificar" value="Modificar">
		</div>
		<div class="btn-group">
		<input class="btn btn-danger" type="button" id="eliminar" value="Eliminar">
		</div>
		<div class="btn-group">
		<input class="btn btn-normal" type="reset" id="limpiar" value="Limpiar">
		</div>
		<div class="form-group">
			<i class="fa fa-refresh fa-spin"></i>
		</div>
	</form>
	<div class="form-group alert" id="mensaje">
		<span id="info-validacion"></span>
	</div>
</body>