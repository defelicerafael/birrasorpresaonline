<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('invitacion');
$array = array('mostrar'=>'si');
$select = $sql->selectTablaNew('invitacion',$array,'fecha_invitacion','ASC','9999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
