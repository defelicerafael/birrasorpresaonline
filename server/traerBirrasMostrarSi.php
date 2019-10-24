<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('birras');
$array = array('mostrar'=>'si');
$select = $sql->selectTablaNew('birras',$array,'id','ASC','999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
