<?php
include "config.php";
header('Access-Control-Allow-Origin: *');
$data = array();
$q = mysqli_query($con, "SELECT * FROM 'tbl_productos'");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);