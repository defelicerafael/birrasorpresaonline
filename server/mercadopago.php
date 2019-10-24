<?php

  require __DIR__  . '/../vendor/autoload.php';
  MercadoPago\SDK::setClientId("8252776030650874");
  MercadoPago\SDK::setClientSecret("r4dzYL5w1HzxSzy5xVOOzMbgRdle5CbY");

  MercadoPago\SDK::setAccessToken("TEST-8252776030650874-081617-1b1bf4c5009fb5db73ddc3a2da18d2d5__LD_LC__-25246282");

  $body = array(
    "json_data" => array(
      "site_id" => "MLA"
    )
  );

  $result = MercadoPago\SDK::post('/users/test_user', $body);

  var_dump($result);
  
  
  # Create a preference object
  $preference = new MercadoPago\Preference();
  # Create an item object
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Incredible Granite Plate";
  $item->quantity = 10;
  $item->currency_id = "ARS";
  $item->unit_price = 34.6;
  # Create a payer object
  $payer = new MercadoPago\Payer();
  $payer->email = "kurt@hotmail.com";
  # Setting preference properties
  $preference->items = array($item);
  $preference->payer = $payer;
  # Save and posting preference
  $preference->save();
  
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="<?php echo $preference->init_point; ?>">Pay</a>
    </body>
</html>
<?php  
/* 
Credenciales
Aplicación: 25246282 - MercadoPago application (mp-app-25246282)   Renovar credenciales
Checkout personalizado
Checkout básico
CLIENT_ID: 8252776030650874
CLIENT_SECRET: r4dzYL5w1HzxSzy5xVOOzMbgRdle5CbY
Modo Sandbox
Public key: TEST-6c9296f2-8a65-4d7a-a64f-342f5a0fc191
Access token: TEST-8252776030650874-081617-1b1bf4c5009fb5db73ddc3a2da18d2d5__LD_LC__-25246282
  
*/
 