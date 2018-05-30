<?php 
    if(isset($_POST['action'])) {
        $action = $_POST['action'];
        switch($action) {
            case 'sessionavatar' : sessionavatar();
                break;
            case 'sessionUsuario' : sessionUsuario();
                break;
            case 'sessionHijo' : sessionHijo();
                break;
            case 'CrearsessionHijo' : CrearsessionHijo();
                break;
            case 'actividad' : actividad();
                break;
            case 'CrearDtosResult' : CrearDtosResult();
                break;
            case 'ConsultaAvatart' : ConsultaAvatart();
                break;
            case 'Consultaimctmb' : Consultaimctmb();
                break;
            case 'Consulgrafica' : Consulgrafica();
                break;
            case 'chatusuarios' : chatusuarios();
                break;
            case 'sessionchat': sessionchat();
                break;
            case 'usuariolocal': usuariolocal();
                break;
            case 'noticias': noticias();
                break;
            case 'listahijos': listahijos();
                break;
            case 'fotoperfil': fotoperfil();
                break;
            case 'updateregistro': updateregistro();
                break;

        
        }
    }

    function updateregistro(){
    $id= $_SESSION["Idusuario"];
    $nombre= $_POST["nombre"];
    $apellido= $_POST["apellido"];
    $perfilmodificar=new Usuario();
    $fperfil=$perfilmodificar->updateperfil($id,$nombre,$apellido);
    echo ($fperfil);
    }

    function fotoperfil(){
    $id= $_SESSION["Idusuario"];
    $foto= $_POST["foto"];
    $fotoperfilda=new Usuario();
    $fotos=$fotoperfilda->fotousuario($id,$foto);
    echo ($fotos);
    }


    function listahijos(){
    $id= $_SESSION["Idusuario"];
    $claseda=new Usuario();
    $usuarioshijos=$claseda->listadehijos($id);
    echo json_encode($usuarioshijos);
    }

    function noticias(){
    $id= $_SESSION["Idusuario"];
    $clasedat=new Usuario();
    $usuarioschat=$clasedat->noticiausuario($id);
    echo json_encode($usuarioschat);
    }



    function chatusuarios(){
    $id= $_SESSION["Idusuario"];
    $clasedat=new Usuario();
    $usuarioschat=$clasedat->especialistasusuarios($id);
    echo json_encode($usuarioschat);
    }


    function sessionchat(){
    $id=$_POST['iduser'];
    $_SESSION["idchatuser"]=$id;
    }


    function usuariolocal(){
    $id=$_SESSION["idchatuser"];
    $clasedat=new Usuario();
    $usuarioschat=$clasedat->usuariolocal($id);
    echo json_encode($usuarioschat);

    }
    function ConsultaAvatart(){
    $id=$_POST['id'];
    $clase=new Usuario();
    $imc=$clase->consulDatAvatar($id);
    echo json_encode($imc);
    }

    function Consultaimctmb(){
    $id=$_POST['id'];
    $_SESSION["ident"]=$id;
    $clase=new Usuario();
    $imc=$clase->consulDatImc($id);
    echo json_encode($imc);
    }
    function Consulgrafica(){
    $id=$_SESSION["ident"];
    $clase=new Usuario();
    $imc=$clase->consulDatImcgrafica($id);
    echo json_encode($imc);
    }
    function sessionavatar(){
        $nombre= $_SESSION["nombre"];
    $id = $_SESSION["Idusuario"];
    $clase=new Usuario();

    if ($id!="") {

    $presentAvatar=$clase->PresentacionAvatar();
    $avatarnueno=$clase->AvataresSeleccionar();

    $datos = array('nombre' =>  $nombre, 'id' => $id,'presentavatar'=>$presentAvatar,'avatarnueno'=>$avatarnueno);

    echo json_encode($datos);
    }else{

        return "ingreso invalido";
    }
    }


    function sessionUsuario(){
    $id = $_SESSION["Idusuario"];
    $clase=new Usuario();

    $usuario=$clase->CuentaUsuario($id);

    echo json_encode($usuario);

    }
    function sessionHijo(){
    $id = $_SESSION["Idusuario"];
    $clase=new Usuario();
    $usuario=$clase->hijos($id);
    if ($usuario!="") {
        echo json_encode($usuario);
    }else{
    echo "false";
    }



    }


    function CrearsessionHijo(){
    $id = $_SESSION["Idusuario"];
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    //$colegio=$_POST['colegio'];
    $sexo=$_POST['sexo'];
    $fecha=$_POST['fecha'];
    $id_avatar=$_POST['id_avatar'];
    $ciudad = $_POST["ciudad"];
    $idhijos = $_POST["idhijos"];
    $clase=new Usuario();
    $idhijo=$clase->consultaridhijos($nombre,$apellido,$sexo,$fecha,$id_avatar,$id,$ciudad,$idhijos);
    echo $idhijo;
    /*
    foreach ($idhijo as $tabla) {
    echo $tabla['id_hijo'];
    }
    */
    }

    function actividad(){
    $clase=new Usuario();
    $activty=$clase->actividad();
    if ($activty!="") {
        echo json_encode($activty);
    }else{
    echo "false";
    }


    }

    function CrearDtosResult(){


    $imc=$_POST['imc'];
    $peso=$_POST['peso'];
    $estatura=$_POST['estatura'];
    $numhijo=$_POST['numhijo'];
    $estado=$_POST['estado'];
    $actividad=$_POST['actividad'];
    $tmb=$_POST['tmb'];

    $clase=new Usuario();
    $idhijo=$clase->inserResult($numhijo,$imc,$peso,$estatura,$estado,$actividad,$tmb);
    echo $idhijo;
    }

 ?>