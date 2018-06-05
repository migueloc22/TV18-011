<?php 
	header("Access-Control-Allow-Origin: *");
	require "../modelo/modelobd.php";
	//require "Cemail.php";
	if(isset($_POST['action'])) {
		$action = $_POST['action'];
		switch($action) {
			case 'datosUsuarios' : datosUsuarios();
			break;
			case 'registrarUsuarios' : registrarUsuarios();
			break;
			case 'recuperarPass' : recuperarPass();
			break;
			case 'validarUser' : validarUser();
			break;
		}
	}
	function validarUser()
	{
		$correo=$_POST['correo'];
    	$codigo=$_POST['codigo'];
    	$csUusario= new Usuario();
	    $csUusario->ValidarUser($correo ,$codigo);

	}
	function datosUsuarios(){
	
	$correoI = $_POST['correoI'];
	$passwordI = $_POST['passwordI'];
	$VerficarDatos= new Usuario();
	$usuarioI=$VerficarDatos->login("$correoI",md5("$passwordI"));
	if ($usuarioI!="") {
	foreach ($usuarioI as  $tabla) {
	$estado= $tabla["idestado"];
	$rol= $tabla["idrol"];
	$nombre=$tabla["nombre"];
	if ($rol=="") {
		echo "false2";
	}
	$id=$tabla["Id_usuario"];
	switch ($estado) {
		case '1':
	if ($rol=='2') {
		
	$_SESSION["nombre"]=$nombre;
	$_SESSION["Idusuario"]=$id;
	echo "2";
	}

	if ($rol=='3') {
		 
		$_SESSION["nombre"]=$nombre;
		$_SESSION["Idusuario"]=$id;
		echo "3";
	}
			break;
			case '2':
	echo 'false1';
			break;
		default:
			break;
	}
	}
	}else{
		echo "false2";
	}
	}

	function registrarUsuarios(){

		$nombreR = $_POST['nombreR'];
		$apellidoR = $_POST['apellidoR'];
		$correoR = $_POST['correoR'];
		$passwordR = $_POST['passwordR'];
		$inactivo=2;
		$rol=2;
		$cod_active=rand();
		$RegistrarDatos= new Usuario();
		$Rdato=$RegistrarDatos->ExistUser($correoR);
			//$email=new email();

		if ($Rdato=="") {
			//$email->enviar($correoR,$cod_active);

			$RegistrarDatos->registroUser("$nombreR","$apellidoR","'"."$correoR"."'",md5("$passwordR"),"$cod_active","$inactivo","$rol");
			$csCorreo= new csCorreo();
			$csCorreo->correo($correoR,'El codigo es  '.$cod_active,"hola");
			echo (json_encode("La cuenta fue creada con exito, a su correo llego un mensaje para activar la cuenta "));
		}
		else{
			echo (json_encode("el correo ya existe"));
		}
	}
	function recuperarPass()
	{
		$correo=$_POST['correo'];    	
    	$csUusario= new Usuario();
   		$csUusario->recuperarCodigoUser($correo);
	}
	include "Cusuario.php";
 ?>