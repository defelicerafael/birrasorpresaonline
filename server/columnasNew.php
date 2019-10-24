<?php
include_once 'class_sql.php';

$objDatos = json_decode(file_get_contents("php://input"));


    
$tabla = $objDatos->tabla;
$filtro_por = $objDatos->filtro_por;
$filtro = $objDatos->filtro;
$orden = $objDatos->orden;
$limit = $objDatos->limit;

//echo "entre";

//echo $filtro;
//echo "Filtro es : $filtro";

//$tabla = 'agenda';
//$array = array('id'=>'22');

$sql = new Sql;
$columnas = $sql->showColumnNames($tabla); 
if ($filtro==="no"){
   // echo "Filtro es igual a no";
    $select = $sql->selectTablaNew($tabla,'no',$filtro_por,$orden,$limit);     
}else{
    $array = json_decode(json_encode($filtro), True);
    $select = $sql->selectTablaNew($tabla,$array,$filtro_por,$orden,$limit);    
}
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
//$sql->jsonConverter($select);  


    


