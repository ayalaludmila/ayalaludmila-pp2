<?php
include 'config.php';
//se configura los datos para conectarse a la BD
$con = mysqli_connect('localhost','root', '', 'supermercado_pp2.sql') or die('could not connect BD');

$input = file_get_contents('php://input');
$userData = json_decode($input, true);

//echo json_encode($userData);



$id = $_GET['uid'];
//$id = 'ZuLFLInXPxS87p6VzWyrwAazF6D3';
$productos = $_GET['productos'];
//$productosArray = array('producto1' => '123', 'producto2' => '313', 'producto3' => '231');
//$productos = json_encode($productosArray);
$fecha = $_GET['d'];
//$productos = JSON.stringify($productos);
$searchId = mysqli_query($con,"select id_Cliente from tbl_clientes where uid='{$id}'");



$userId= mysqli_fetch_assoc($searchId);

$userId = $userId['id_Cliente'];



//se cargo manualmente los productos
$q = mysqli_query($con, "INSERT INTO tbl_historial (`id_usuario`, `fecha`, `productos`) VALUES('$userId', '$fecha', '$productos')");


if ($q){
    http_response_code(201);
    $message['status'] = 'Succes';
}else{
    http_response_code(422);
    $message['status'] = 'Error';
}
//devuelve Succes o Error segun corresponda
echo json_encode($message);
echo mysqli_error($con);
