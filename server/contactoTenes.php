<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
header('Access-Control-Allow-Methods: GET, POST, PUT');

if (file_exists("class.phpmailer.php")) {
    require "class.phpmailer.php";
}
else {
    echo "Please try back in five minutes...\n";
}
if (file_exists("class.smtp.php")) {
    require "class.smtp.php";
}
else {
    echo "Please try back in five minutes...\n";
}
//require("class.phpmailer.php");
//require("class.smtp.php");



$smtpHost = "c1490387.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "hola@birrasorpresa.com.ar";  // Mi cuenta de correo
$smtpClave = "B1rr4s0rpr3s4";  // Mi contraseña
$date = date("d/m/Y");

$objDatos = json_decode(file_get_contents("php://input"));



$datos = $objDatos->datos;
$tabla = $objDatos->tabla;
$array = json_decode(json_encode($datos), True);
/*
print_r($datos);
echo $tabla;
print_r($array);

*/
/*
$array['nombre'] = "rafael";
$array['apellido'] = "defelice";
$array['email'] = "defelicerafael@gmail.com";
$array['texto'] = "Hola como estas?";
*/

$mensaje .= "<b>Hola, ". $array['nombre'] ."</b> <br>";
$mensaje .= "Tu amigo ".$array['amigo']." ya disfrut� de su BIRRA!<br/>";
$mensaje .= "Gracias por confiar en BIRRA SORPRESA!";


// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = $array['email'];

$mail = new PHPMailer(true);
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $array['nombre'];
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Tu amigo ".$array['nombre']." ya disfuto su BIRRA SORPRESA"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "{$mensajeHtml}"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje}"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}
