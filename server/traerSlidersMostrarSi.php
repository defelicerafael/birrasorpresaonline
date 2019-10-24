<?php
include_once 'class_sql.php';
$cer = $_GET['c'];


$sql = new Sql;
$columnas = $sql->showColumnNames('slider');
$array = array("mostrar"=>"si");
$select = $sql->selectTablaNew('slider',$array,'orden','ASC','10');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
