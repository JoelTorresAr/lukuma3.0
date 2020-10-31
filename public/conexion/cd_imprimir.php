<?php
if (isset($_SERVER['HTTP_ORIGIN'])) { 
  // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one 
  // you want to allow, and if so: 
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}"); 
  header('Access-Control-Allow-Credentials: true'); 
  header('Access-Control-Max-Age: 86400'); // cache for 1 day 
 } 
$comanda= filter_input(INPUT_GET, 'imprimmir');
///esto es para borar o aumentar el detalle de productos
if ($comanda==1) {
  $ip = filter_input(INPUT_GET, 'ip');
  $pin = filter_input(INPUT_GET, 'parm_pin');
  $id_mesa = filter_input(INPUT_GET, 'parm_id_mesas');
  $id_prod = filter_input(INPUT_GET, 'parm_id_prod');
  $id_cmd = filter_input(INPUT_GET, 'parm_id_cmd');
  $id_mesero = filter_input(INPUT_GET, 'parm_id_mesero');
  $cant = filter_input(INPUT_GET, 'parm_cant');

  //${this.ip}/?nomFun=tb_item&parm_pin=${this.pin}&parm_piso=20&parm_id_mesas=${this.mesaId}&parm_id_prod=${item.idprod}&parm_cant=${cant}&parm_id_cmd=${this.mesa.id_cmd}&parm_id_mesero=${this.userID}&parm_tipo=M$ 
  $url = $ip."?nomFun=tb_item&parm_pin=".$pin."&parm_piso=20&parm_id_mesas=".$id_mesa."&parm_id_prod=".$id_prod."&parm_cant=".$cant."&parm_id_cmd=".$id_cmd."&parm_id_mesero=".$id_mesero."&parm_tipo=M$";
      $ch_factura = curl_init();
      curl_setopt($ch_factura, CURLOPT_URL, $url);
      curl_setopt($ch_factura, CURLOPT_POST, 1);
      curl_setopt($ch_factura, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch_factura, CURLOPT_POSTFIELDS, $_GET);
      curl_setopt($ch_factura, CURLOPT_RETURNTRANSFER, true);
      $respuesta_factura = curl_exec($ch_factura);
      curl_close($ch_factura);
   
    //echo $array = json_decode( json_encode( $respuesta_factura ), true );
    echo $respuesta_factura;
}

 ///enviar a impirimir 
if ($comanda==2) {
  $ip = filter_input(INPUT_GET, 'ip');
  $pin = filter_input(INPUT_GET, 'parm_pin');
  $id_mesa = filter_input(INPUT_GET, 'parm_id_mesas');
  $id_prod = filter_input(INPUT_GET, 'parm_id_prod');
  $id_cmd = filter_input(INPUT_GET, 'parm_id_cmd');
  $id_mesero = filter_input(INPUT_GET, 'parm_id_mesero');
  
 //http://192.168.0.2:7000/?nomFun=tb_enviar_cmd&parm_pin=${this.pin}&parm_piso=20&parm_id_mesas=${this.mesaId}&parm_id_cmd=${this.mesa.id_cmd}&parm_id_mesero=${this.userID}&parm_tipo=M$
  $url = $ip."?nomFun=tb_enviar_cmd&parm_pin=".$pin."&parm_piso=20&parm_id_mesas=".$id_mesa."&parm_id_cmd=".$id_cmd."&parm_id_mesero=".$id_mesero."&parm_tipo=M$";
      $ch_factura = curl_init();
      curl_setopt($ch_factura, CURLOPT_URL, $url);
      curl_setopt($ch_factura, CURLOPT_POST, 1);
      curl_setopt($ch_factura, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch_factura, CURLOPT_POSTFIELDS, $_GET);
      curl_setopt($ch_factura, CURLOPT_RETURNTRANSFER, true);
      $respuesta_factura = curl_exec($ch_factura);
      curl_close($ch_factura);
   
    //echo $array = json_decode( json_encode( $respuesta_factura ), true );
    echo $respuesta_factura;
}

///enviar a precuenta 
if ($comanda==3) {
  $ip = filter_input(INPUT_GET, 'ip');
  $pin = filter_input(INPUT_GET, 'parm_pin');
  $id_mesa = filter_input(INPUT_GET, 'parm_id_mesas');
  $id_prod = filter_input(INPUT_GET, 'parm_id_prod');
  $id_cmd = filter_input(INPUT_GET, 'parm_id_cmd');
  $id_mesero = filter_input(INPUT_GET, 'parm_id_mesero');
 //${this.ip}/?nomFun=tb_cobrar_mesa&parm_pin=${this.pin}&parm_piso=20&parm_id_mesas=${this.mesaId}&parm_id_cmd=${this.mesa.id_cmd}&parm_dade=1&parm_id_mesero=${this.userID}&parm_tipo=M$
 //http://192.168.0.2:7000/?nomFun=tb_cobrar_mesa&parm_pin=${this.pin}&parm_piso=20&parm_id_mesas=${this.mesaId}&parm_id_cmd=${this.mesa.id_cmd}&parm_dade=1&parm_id_mesero=${this.userID}&parm_tipo=M$
  $url = $ip."?nomFun=tb_cobrar_mesa&parm_pin=".$pin."&parm_piso=20&parm_id_mesas=".$id_mesa."&parm_id_cmd=".$id_cmd."&parm_dade=1&parm_id_mesero=".$id_mesero."&parm_tipo=M$";
      $ch_factura = curl_init();
      curl_setopt($ch_factura, CURLOPT_URL, $url);
      curl_setopt($ch_factura, CURLOPT_POST, 1);
      curl_setopt($ch_factura, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch_factura, CURLOPT_POSTFIELDS, $_GET);
      curl_setopt($ch_factura, CURLOPT_RETURNTRANSFER, true);
      $respuesta_factura = curl_exec($ch_factura);
      curl_close($ch_factura);
   
    //echo $array = json_decode( json_encode( $respuesta_factura ), true );
    echo $respuesta_factura;
}

 ///enviar nota de comanda
 if ($comanda==4) {
  $ip = filter_input(INPUT_GET, 'ip');
  $pin = filter_input(INPUT_GET, 'parm_pin');
  $id_mesa = filter_input(INPUT_GET, 'parm_id_mesas');
  $id_prod = filter_input(INPUT_GET, 'parm_id_prod');
  $id_cmd = filter_input(INPUT_GET, 'parm_id_cmd');
  $id_mesero = filter_input(INPUT_GET, 'parm_id_mesero');
  $nota = filter_input(INPUT_GET, 'parm_nota');
 //http://192.168.0.2:7000/?nomFun=tb_enviar_cmd&parm_pin=${this.pin}&parm_piso=20&parm_id_mesas=${this.mesaId}&parm_id_cmd=${this.mesa.id_cmd}&parm_id_mesero=${this.userID}&parm_tipo=M$
  $url = $ip."?nomFun=tb_new_notacmd&parm_pin=".$pin."&parm_piso=20&parm_id_mesas=".$id_mesa."&parm_id_cmd=".$id_cmd."&parm_id_mesero=".$id_mesero."&parm_nota=".$nota."&parm_tipo=M$";
      $ch_factura = curl_init();
      curl_setopt($ch_factura, CURLOPT_URL, $url);
      curl_setopt($ch_factura, CURLOPT_POST, 1);
      curl_setopt($ch_factura, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch_factura, CURLOPT_POSTFIELDS, $_GET);
      curl_setopt($ch_factura, CURLOPT_RETURNTRANSFER, true);
      $respuesta_factura = curl_exec($ch_factura);
      curl_close($ch_factura);
   
    //echo $array = json_decode( json_encode( $respuesta_factura ), true );
    echo $respuesta_factura;
}