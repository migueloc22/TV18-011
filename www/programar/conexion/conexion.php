<?php 

class conex{
public function conec(){
	$conn =new conexion('50.62.209.186:3306','emerson','123456789','apptivos');
	return $conn;
}
}

class conexion{
 
private $username;
private $root;
private $password;
private $base;
private $conexion;
public $error;

function __construct($username,$root,$password,$base){

$this->username= $username;
$this->root=$root;
$this->password=$password;
$this->base=$base;
$this->conecc();



}

	private function conecc(){
		$this->conexion =mysqli_connect($this->username,$this->root,$this->password,$this->base); 

		
		if (!$this->conexion) {
			  echo "conexion no realizada";
				
		}
	} 



public function enviarquery($query){

$tipo=strtoupper(substr($query,0,6));


switch ($tipo) {
	
	case 'SELECT':
	$resultado= mysqli_query($this->conexion,$query);
		 if (!$resultado) {
		 	$this->error="error al consultar";
		 }else{
		 	if($f=mysqli_num_rows($resultado)==0){

		 		return false;
		 	}else{
		 		while ($f=mysqli_fetch_assoc($resultado)) {
		 			 $r[]=$f;
		 		
		 		}
		 		mysqli_free_result($resultado);
              return $r;

		 	}

		 }
		break;
	case 'INSERT':
	
		$resultado=mysqli_query($this->conexion,$query);

		 if (!$resultado) {
		 echo "error al insertar";
		echo mysql_error();

		 }
		break;
	case 'UPDATE':
	
		$resultado=mysqli_query($this->conexion,$query);
		 if (!$resultado) {

		 echo "error al modifcar";
		 }
		break;

	default:
		$this->error="tipo de consulta no permitida";
		break;
}

}

}


?>