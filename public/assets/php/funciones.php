<?php

date_default_timezone_set ( "America/Mexico_City" ) ;

function carga(){
    $host = "127.0.0.1";

    $user =  "root";
    
    $password = "j1l2e3p4t5E!";
    
    $db = "portfolio";
    
    $con = mysqli_connect($host,$user,$password,$db);
    
    $sql = "insert into conexiones (fecha , hora , direccion , tipo )  values  ( ? , ?, ? ,'carga' ) ";

    $date =  date("Y-m-d");

    $hora = date("H:i:s");

    $host =  $_SERVER['REMOTE_ADDR'];

    $stmt = $con -> prepare($sql);

    $stmt -> bind_param("sss",$date , $hora , $host);

    $stmt->execute();

    $con -> close();

}


?>