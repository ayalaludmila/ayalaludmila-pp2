<?php
include "config.php";
header('Access-Control-Allow-Origin: *');
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$descripcion = $data['descripcion'];
$precio = $data['precio'];
$categoria = $data['categoria'];
$img_Producto = $data['img_Producto'];
$codigo_Barra = $data['codigo_Barra'];

$q = mysqli_query($con, "INSERT INTO tbl_productos (descripcion,precio,categoria,img_Producto,codigo_Barra) VALUES ('$descripcion','$precio','$categoria','$img_Producto','$codigo_Barra')");

if ($q){
    http_response_code(201);
    $message['status'] = "Succes";
}else{
    http_response_code(422);
    $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);