<?php 

//importamos el archivo de conexion
include '../php/db.php';

//recojemos los datos del formulario
$id = $_POST['id'];
$cedula = trim(strtoupper($_POST['cedula']));
$nombre = trim(strtoupper($_POST['nombre']));
$apellido = trim(strtoupper($_POST['apellido']));

if ($cedula!= "") {
	//registramos los datos en la base de datos
	$sql = "UPDATE tlogin SET nombre='$nombre', apellido='$apellido' WHERE cedula = '$cedula' and estatus = 1";
	//ejecutamos la consulta
	if (mysql_query($sql)) {
		echo true;
	} else {
		echo false;
	}
} else {
	echo false;
}


 ?>