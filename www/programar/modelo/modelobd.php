<?php 
@session_start();
require "../conexion/conexion.php";
require "../util/csCorreo.php";
class Usuario{

      public function registroUser($n,$a,$c,$p,$cod_active,$inactivo,$rol){

      $classconex= new conex();
      $conn=$classconex->conec();

      $imagedata = file_get_contents("../../img/camara.jpg");
                  // alternatively specify an URL, if PHP settings allow
      $base64 = base64_encode($imagedata);
      $img= "data:image/jpeg;base64,".$base64 ;
      $conn->enviarquery("INSERT INTO usuario(nombre,apellido,correo,password,idrol,cod_active,idestado,foto) VALUES($n,$a,$c,'$p','$rol','$cod_active','$inactivo','$img')");
            }
                  /*
      $datosClient=$conn->enviarquery("SELECT *  FROM usuario  order by usuario.Id_usuario desc  limit 1");
            foreach ($datosClient as $tabla) {            
                  $id= $tabla['Id_usuario'];
      
      $to = "emersonkonecta@gmail.com";
      $subject = "Samsung";
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
      $headers .= 'From: Samsung' . "\r\n";
      $headers .= 'Cc: emersonkonecta@gmail.com' . "\r\n";
      $txt ='http://192.168.1.20/apptivos/cuentacreada.php?activar='.$cod_active.'&id='.$id.'';
      $envio=mail($to,$subject,$txt,$headers);
      */


      public function login($correo,$password){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM usuario WHERE correo=$correo and password='$password'");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
            }
      }
      public function ValidarUser($correo,$codigo){
            $link = mysqli_connect("localhost", "root", "", "apptivos");
            $query="SELECT * FROM usuario WHERE correo='".$correo."'" ;
            $result = mysqli_query($link, $query);
            if ($row =  mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                  if ($row['cod_active'] == $codigo) {
                        $iduser=$row['Id_usuario'] ;
                        $classconex= new conex();
                        $conn=$classconex->conec();
                        $datosfoto=$conn->enviarquery("UPDATE usuario  set idestado=1 WHERE Id_usuario=".$iduser);
                        echo "Usuario activo";
                        return $datosfoto;
                        if (!$datosfoto) {
                        echo $this->error="error";
                        }
                  }
                  else{
                   echo "Código  invalido";
                  } 
             }
             else{
                  echo "Correo electrónico invalido";
             }      
      }
      public function recuperarCodigoUser($correo){
            $respuesta=false;
            $link = mysqli_connect("localhost", "root", "", "apptivos");
            $query="SELECT * FROM usuario WHERE correo='".$correo."'" ;
            $result = mysqli_query($link, $query);
            if ($row =  mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                  $csCorreo= new csCorreo();
                  if ($csCorreo->correo($row['correo'],'La contraseña es '.$row['password'],'mensaje enviado')) {
                        $iduser=$row['Id_usuario'] ;
                        $classconex= new conex();
                        $conn=$classconex->conec();
                        //$datos=$conn->enviarquery("UPDATE usuario  set idestado=2 WHERE Id_usuario=".$iduser);
                        return $datos;
                        if (!$datos) {
                        echo $this->error="error";
                  }
                  } else {
                        # code...
                  }
                  
                  
             }
             else{
                  echo "Correo electrónico invalido";
             }      
      }

      public function fotousuario($iduser,$foto){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosfoto=$conn->enviarquery("UPDATE usuario  set  foto=$foto WHERE Id_usuario=$iduser");


      return $datosfoto;
      if (!$datosfoto) {
      echo $this->error="error";
      }


      }
      public function updateperfil($iduser,$nombre,$apellido){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosperfil=$conn->enviarquery("UPDATE usuario  set  nombre=$nombre, apellido=$apellido WHERE Id_usuario=$iduser");

      return $datosperfil;
      if (!$datosperfil) {
      echo $this->error="error";
      }


      }




      public function listadehijos($iduser){
            $classconex= new conex();
            $conn=$classconex->conec();
            $datosespecial=$conn->enviarquery("SELECT * FROM usuario WHERE Id_usuario=$iduser");
            if ($datosespecial!="") 
            {
                  $datosusuarios=$conn->enviarquery("SELECT distinct detalle_control.id_hijo FROM detalle_control");
                  if ($datosusuarios!="") {

                        $datoshijo=("SELECT max(detalle_control.fecha_control),estado.estado,detalle_control.id_hijo,hijos.id_hijo,avatar.avatares,hijos.nombrehijo,hijos.apellidohijo, detalle_control.fecha_control FROM detalle_control inner join estado on estado.idestado=detalle_control.idestado inner join hijos on hijos.id_hijo=detalle_control.id_hijo inner join avatar on avatar.idavatar = hijos.idavatar  WHERE");

                        //inner join avatar on avatar.idavatar = hijos.idavatar

                        foreach ($datosusuarios as  $value) {
                              $idhijo=$value['id_hijo'];
                              $datoshijo.=(" detalle_control.id_hijo=$idhijo or ");
                        }
                        $data = trim($datoshijo,' or');
                        $data.=(" group by detalle_control.id_hijo desc");
                        $enviodar=$conn->enviarquery($data);
                  }
            }
            return $enviodar;
            if (!$datosusuarios) {
             echo $this->error="error";
            }


      }


      public function noticiausuario($idusuario){
            $classconex= new conex();
            $conn=$classconex->conec();
                  $datosespecial=$conn->enviarquery("SELECT * FROM usuario WHERE Id_usuario=$idusuario");
                  if ( $datosespecial!=null) {
                        $datosnotica=$conn->enviarquery("SELECT * FROM blog inner join usuario on usuario.Id_usuario=blog.Id_usuario inner join
                        hoja_de_vida on usuario.Id_usuario =hoja_de_vida.Id_usuario order by blog.idblog desc");
                  }
            return $datosnotica;
            if (!$datosnotica) {
                  echo $this->error="error";
            }
      }


      public function usuariolocal($idusuario){
            $classconex= new conex();
            $conn=$classconex->conec();
            $datosespecial=$conn->enviarquery("SELECT * FROM usuario WHERE Id_usuario=$idusuario");
            foreach ($datosespecial as $datos) {
                  $idrol=$datos['idrol'];
            }
                  switch ($idrol) {
                        case '2':
                              $datosClientu=$conn->enviarquery("SELECT * FROM usuario inner join hoja_de_vida on usuario.Id_usuario =hoja_de_vida.Id_usuario  WHERE Id_usuario=$idusuario");
                        break;
                        case '3':
                              $datosClientu=$conn->enviarquery("SELECT * FROM usuario  WHERE Id_usuario=$idusuario");
                        break;
                        default:
                              echo "error";
                        break;
                  }
            return $datosClientu;
            if (!$datosClientu) {
                  echo $this->error="error";
            }
      }


      public function especialistasusuarios($idusuario){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosespecial=$conn->enviarquery("SELECT * FROM usuario WHERE Id_usuario=$idusuario");

            foreach ($datosespecial as $datos) {
            $idrol=$datos['idrol'];
            }
            switch ($idrol) {
                  case '2':
                  $datosClientu=$conn->enviarquery("SELECT * FROM usuario inner join hoja_de_vida on usuario.Id_usuario =hoja_de_vida.Id_usuario  WHERE usuario.idrol=3");

                        break;
                              case '3':
                  $datosClientu=$conn->enviarquery("SELECT * FROM usuario  WHERE idrol=2");

                        break;
                  
                  default:
                        echo "error";
                        break;
            }
            return $datosClientu;
            if (!$datosClientu) {
            echo $this->error="error";
      }
      }




      public function ExistUser($correo){
            $classconex= new conex();
            $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM usuario WHERE correo=".$correo."");
            return $datosClient;
            if (!$datosClient) {
                  echo $this->error="error";
            }
      }

      public function PresentacionAvatar(){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM avatar WHERE idavatar=7 and posicion=1665");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }

      public function AvataresSeleccionar(){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM avatar");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }
      public function CuentaUsuario($id){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM usuario where Id_usuario=$id");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }
      public function hijos($id){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM usuario INNER JOIN detallehijos on  usuario.Id_usuario=detallehijos.Id_usuario  INNER JOIN hijos on detallehijos.id_hijo = hijos.id_hijo INNER JOIN avatar on avatar.idavatar=hijos.idavatar   where usuario.Id_usuario=$id");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }



      public function consultaridhijos($nombre,$apellido,$sexo,$fecha,$id_avatar,$idusuario,$ciudad,$idhijo){
      $classconex= new conex();
      $conn=$classconex->conec();
      $hoy = date("Y-m-d");
      $idhijso=$conn->enviarquery("SELECT * FROM hijos where id_hijo=$idhijo");

      if ($idhijso==0) {

            $inserhijos=$conn->enviarquery("INSERT INTO hijos(nombrehijo,apellidohijo,sexo,fecha_nacimiento,ciudad,idavatar) VALUES($nombre,$apellido,$sexo,$fecha,$ciudad,$id_avatar)");
            $datosClient=$conn->enviarquery("SELECT * FROM hijos");
            if ( $datosClient!="") {
      foreach ($datosClient as  $tabla) {
            $idhijo=$tabla['id_hijo'];
      }
      $INSERTdetall=$conn->enviarquery("INSERT INTO detallehijos(fecha_registro,id_hijo,Id_usuario) VALUES('".$hoy."',$idhijo,$idusuario)");
            }


      }else{
      $modificar=$conn->enviarquery("UPDATE hijos SET nombrehijo=$nombre,apellidohijo=$apellido,sexo=$sexo,fecha_nacimiento=$fecha,ciudad=$ciudad,idavatar=$id_avatar WHERE id_hijo=$idhijo");
      }

      return "datos ingresados";



            if (!$datosClient) {
            echo $this->error="error";
      }
      }



      public function actividad(){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM actividad");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }




      public function consulDatImc($id){
            $classconex= new conex();
            $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM detalle_control INNER JOIN hijos  on hijos.id_hijo = detalle_control.id_hijo inner join estado on detalle_control.idestado =estado.idestado
                        inner join actividad on detalle_control.idactividad = actividad.idactividad inner join avatar on avatar.idavatar= hijos.idavatar
                        WHERE hijos.id_hijo=$id order by detalle_control.iddetalle_control desc  limit 1");
            return $datosClient;
            if (!$datosClient) {
                  echo $this->error="error";
            }
      }


      public function consulDatImcgrafica($id){
            $classconex= new conex();
            $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM detalle_control INNER JOIN hijos  on hijos.id_hijo = detalle_control.id_hijo inner join estado on detalle_control.idestado =estado.idestado
            WHERE hijos.id_hijo=$id");
            return $datosClient;
            if (!$datosClient) {
                  echo $this->error="error";
            }
      }



      public function consulDatAvatar($id){
      $classconex= new conex();
      $conn=$classconex->conec();
            $datosClient=$conn->enviarquery("SELECT * FROM  hijos  inner join avatar on hijos.idavatar =avatar.idavatar
                  WHERE hijos.id_hijo=$id");
            return $datosClient;
            if (!$datosClient) {
            echo $this->error="error";
      }
      }

      public function inserResult($numhijo,$imc,$peso,$estatura,$estado,$actividad,$tmb){
            $classconex= new conex();
            $conn=$classconex->conec();
            $hoy = date("Y-m-d");
            $mesfecha=date("n");
            $aniactual=date("Y");
            $avasadomes=$mesfecha+1;

            if ($mesfecha==12) {
            $sumaanio=$aniactual+1;
            $restames=$mesfecha-11;
            $fechanueva=date("Y-".$restames."-"+$sumaanio);

            }else{
            $fechanueva=date("Y-".$avasadomes."-d");  
            }



            $insertControl=$conn->enviarquery("INSERT INTO detalle_control(imc,fecha_control,id_hijo,peso,estatura,idestado,idactividad,tmb,mes_control) VALUES($imc,'".$hoy."',$numhijo,$peso,$estatura,$estado,$actividad,$tmb,'".$fechanueva."')");


      }
      
      }

?>