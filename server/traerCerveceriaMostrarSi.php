<?php
include_once 'class_sql.php';
$cer = $_GET['c'];

$sql = new Sql;
$columnas = $sql->showColumnNames('cerveceria');
$array = array('mostrar'=>'si','apodo'=>$cer);
$select = $sql->selectTablaNew('cerveceria',$array,'id','ASC','9999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
