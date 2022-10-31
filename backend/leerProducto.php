<?php      
include 'config.php';

//declara array para guardar datos
$data = array();

//se configura los datos para conectarse a la BD
$query = new mysqli('localhost','root', '', 'supermercado_pp2.sql');

//se realiza la consulta
$resultado = $query->query('select * from tbl_producto');

//se recorren los datos obtenidos y se guarda en el $data
while($row = mysqli_fetch_array($resultado)){
    $data[] = $row;
}


//se devuelve los datos obtenidos $data o se devuelve el detalle del error en la consulta $query
echo json_encode($data);
echo mysqli_error($query);

