<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('invitacion');
$array = array();
$select = $sql->selectTablaNew('invitacion','no','fecha_invitacion','ASC','9999');    
$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
