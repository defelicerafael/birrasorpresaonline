<?php
require_once '../vendor/autoload.php';
$mp = new MP ("8252776030650874", "r4dzYL5w1HzxSzy5xVOOzMbgRdle5CbY");
$balance = $mp->get ("/users/USER_ID/mercadopago_account/balance");
print_r ($balance);
?>