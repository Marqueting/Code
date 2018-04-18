<?php
	
	//importamos el archivo de conexion
include '../php/db.php';

//recojemos los datos del formulario
$cedula = trim(strtoupper($_POST['cedula']));
$nombre = trim(strtoupper($_POST['nombre']));
$apellido = trim(strtoupper($_POST['apellido']));


$sql = "SELECT * FROM tlogin WHERE cedula = '$cedula'";

$eje = mysql_query($sql);

if ($row = mysql_fetch_array($eje) == 0) {
	//registramos los datos en la base de datos
	$sql = "INSERT INTO tlogin (cedula,nombre,apellido,estatus) VALUES ('$cedula','$nombre','$apellido','1')";
	//ejecutamos la consulta
	$resul = mysql_query($sql);

	if ($resul) {
		echo true;
	} else{
		echo false;
	}
} else{
	echo false;
}

?>