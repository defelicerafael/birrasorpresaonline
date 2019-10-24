<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('birras');
$array = array();
$select = $sql->selectTablaNew('birras','no','nombre','ASC','999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
