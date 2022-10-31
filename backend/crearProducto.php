<?php
include 'config.php';
//se configura los datos para conectarse a la BD
$con = mysqli_connect('localhost','root', '', 'supermercado_pp2.sql') or die('could not connect BD');

//se cargo manualmente los productos
$q = mysqli_query($con, "INSERT INTO tbl_producto (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(1, 'Aceite de girasol Natura 1.5L', '320.00', 1, 'https://ardiaprod.vtexassets.com/arquivos/ids/197858-500-auto?v=637559816874500000&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(2, 'Arroz Oro Estuche Gallo X1 Kg', '217.00', 1, 'https://diaio.vtexassets.com/arquivos/ids/187241-500-auto?v=1753575503&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(3, 'Galletitas Oreo 182,5Gr', '295.00', 1, 'https://diaio.vtexassets.com/arquivos/ids/231480-500-auto?v=1753575754&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(4, 'Harina De Trigo 0000 Cañuelas 1 Kg', '86.00', 1, 'https://diaio.vtexassets.com/arquivos/ids/230399-500-auto?v=1753575294&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(5, 'Agua Mineral Eco de Los Andes Sin Gas 2L', '173.00', 3, 'https://diaio.vtexassets.com/arquivos/ids/217009-500-auto?v=1753575238&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(6, 'Gaseosa Coca-Cola Sabor Original 2,5Lt', '457.00', 3, 'https://diaio.vtexassets.com/arquivos/ids/228471-500-auto?v=1753576233&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(7, 'Jugo Naranja Citric 1,5L', '532.00', 3, 'https://diaio.vtexassets.com/arquivos/ids/222725-500-auto?v=1753575560&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(8, 'Banana Ecuador Por Kg', '299.00', 4, 'https://diaio.vtexassets.com/arquivos/ids/230802-500-auto?v=1753576534&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(9, 'Tomate Redondo Por Kg', '269.00', 4, 'https://diaio.vtexassets.com/arquivos/ids/220809-500-auto?v=1753575390&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(10, 'Bondiola de Cerdo', '1265.00', 7, 'https://diaio.vtexassets.com/arquivos/ids/226586-500-auto?v=1753571635&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(11, 'Suprema de Pollo', '1299.00', 7, 'https://diaio.vtexassets.com/arquivos/ids/221137-500-auto?v=1753577025&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(12, 'Queso Cremon Cremoso La Serenisima Unidad 1Kg', '899.00', 8, 'https://diaio.vtexassets.com/arquivos/ids/225421-500-auto?v=1753569909&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(13, 'Jamon Paladini Cocido Fetas Finas x200Gr', '552.00', 8, 'https://diaio.vtexassets.com/arquivos/ids/210216-500-auto?v=1753577033&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(14, 'Leche Entera Clasica La Serenisima Sachet 1L', '144.00', 11, 'https://diaio.vtexassets.com/arquivos/ids/184239-500-auto?v=1753577017&width=500&height=auto&aspect=true')");
$q = mysqli_query($con, "INSERT INTO `tbl_producto` (`id_producto`, `descripcion`, `precio`, `categoria`, `img_producto`) VALUES(15, 'Yogurisimo Fort Vain Sachet 1000Gr', '365.00', 11, 'https://diaio.vtexassets.com/arquivos/ids/232115-500-auto?v=1753577255&width=500&height=auto&aspect=true')");

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