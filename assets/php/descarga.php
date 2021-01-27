<?php

date_default_timezone_set ( "America/Mexico_City" ) ;

$host = "127.0.0.1";

$user =  "root";

$password = "";

$db = "portfolio";

$con = mysqli_connect($host,$user,$password,$db);

$sql = "insert into conexiones (fecha , hora , host , tipo )  values  ( ? , ?, ? ,'descarga' ) ";

$date =  date("Y-m-d");

$hora = date("H:i:s");
$host =  $_SERVER['REMOTE_ADDR'];
$stmt = $con -> prepare($sql);
$stmt -> bind_param("sss",$date , $hora , $host);
$stmt->execute();
$con -> close();


$filePath = "../files/cv-Perez-tapia-Jose-Luis-.pdf";
$fileName = "cv perez tapia jose luis enrique.pdf";


header("Content-disposition: attachment; filename=" . $fileName);
header("Content-type: application/pdf");
readfile($filePath);
