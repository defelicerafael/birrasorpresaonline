<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('slider');
$array = array();
$select = $sql->selectTablaNew('slider','no','id','DESC','999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
