<?php
include "config.php";
$data = array();
$q = mysqli_query($con, "SELECT * FROM 'tlb_productos'");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);