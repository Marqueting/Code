<?php 

//importamos el archivo de conexion
include '../php/db.php';

//recojemos los datos del formulario
$cedula = trim($_POST['cedula']);


//consultamos los datos en la base de datos
$sql = "SELECT * FROM tlogin WHERE cedula = '$cedula' and estatus = 1";

//ejecutamos la consulta
$eje = mysql_query($sql);


if ($row = mysql_fetch_array($eje)) {
	$id = $row['id'];
	$cedula = $row['cedula'];
	$nombre = $row['nombre'];
	$apellido = $row['apellido'];
	echo json_encode($datos = array($id,$nombre,$apellido));
} else {
	echo false;
}

?>