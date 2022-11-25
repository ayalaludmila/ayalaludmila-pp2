<?php

include 'config.php';
//se configura los datos para conectarse a la BD
$con = mysqli_connect('localhost','root', '', 'supermercado_pp2.sql') or die('could not connect BD');

$user = $_POST[''];
$mail = $_POST[''];


$q = mysqli_query($con, "INSERT INTO `tbl_clientes` (`id_cliente`, `mail`) VALUES('$user', '$mail')");