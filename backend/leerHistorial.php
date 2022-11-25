<?php      
include 'config.php';

$input = file_get_contents('php://input');

$data = array();

$uid = $_GET['uid'];


//se configura los datos para conectarse a la BD
$con = mysqli_connect('localhost','root', '', 'supermercado_pp2.sql') or die('could not connect BD');

//se obtiene id_cliente para consultar en la tabla historial
$searchId = mysqli_query($con,"select id_Cliente from tbl_clientes where uid='{$uid}'");

$userId= mysqli_fetch_assoc($searchId);
$userId = $userId['id_Cliente'];



//se obtiene el historial del id_cliente obtenido en la consulta anterior
$q = mysqli_query($con, "select * from tbl_historial where id_usuario='{$userId}'");

//se recorren los datos obtenidos y se guarda en el $data

while($row = mysqli_fetch_assoc($q)){
    $data[] = $row;
}

//$data= mysqli_fetch_assoc($resultado);

//se devuelve los datos obtenidos $data o se devuelve el detalle del error en la consulta $query
echo json_encode($data);
echo mysqli_error($con);
