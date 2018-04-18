<?php
//creamos la funcion para conectar la basede datos:
function conexion(){
	$con = mysql_connect('localhost','root','root1234') or die('Error al conectar la base de datos'.mysql_error());

	mysql_select_db('login') or die('Error al buscar la base de datos'.mysql_error());
}

//llamamos a la funcion:
conexion();

?>
