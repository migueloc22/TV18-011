  //inicio
  var ipServe = "http://10.73.52.235/GitHub/TV18-011/";
  var ruta = "www/programar/controlador/Clogin.php";
  var urlServe = ipServe + ruta;
  $("[name=sesion]").on('click', function () {
    // alert(urlServe);
    var correo = $("#emailI").val();
    var password = $("#passwordI").val();
    vltxtCorreo_crear();
    vlPass1_crear();
    if (vltxtCorreo_crear() && vlPass1_crear()) {
      $.ajax({
        url: urlServe,
        data: {
          action: 'datosUsuarios',
          correoI: "'" + correo + "'",
          passwordI: "'" + password + "'",
        },
        type: 'POST',
        success: function (salida) {

          if (salida != "1") {
            var Id_usuariovar = "";
            var nombre = "";
            var apellido = "";
            var correo = "";
            var foto = "";
            var password = "";
            var idrol = "";
            var cod_active = "";
            var idestado = "";
            var datos = JSON.parse(salida);
            for (var i in datos) {
              Id_usuario = datos[i].Id_usuario;
              nombre = datos[i].nombre;
              apellido = datos[i].apellido;
              correo = datos[i].correo;
              foto = datos[i].foto;
              password = datos[i].password;
              idrol = datos[i].idrol;
              cod_active = datos[i].cod_active;
              idestado = datos[i].idestado;
            }
            var objUser = {
              Id_usuario: Id_usuario,
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              foto: foto,
              password: password,
              idrol: idrol,
              cod_active: cod_active,
              idestado: idestado
            };
            sessionStorage.setItem("objUser", JSON.stringify(objUser));
            switch (objUser.idestado) {
              case "2":
                window.location.href = "programar/vista/usuario.html";
                break;
              case "3":
                window.location.href = "programar/vista/especialista.html";
                break;
              default:
                console.log("active su cuenta");
                break;
            }
          } else {
            console.log("No existe Usuario");
          }
        }
      });
    }




  });

  datos();

  function datos() {

    // if ((correo != undefined) && (password != undefined)) {
    //   $.ajax({
    //     url: urlServe,
    //     data: {
    //       action: 'datosUsuarios',
    //       correoI: "'" + correo + "'",
    //       passwordI: "'" + password + "'",
    //     },
    //     type: 'POST',
    //     success: function (salida) {
    //       switch (salida) {
    //         case "2":
    //           window.location.href = "programar/vista/usuario.html";
    //           break;
    //         case "3":
    //           window.location.href = "programar/vista/especialista.html";
    //           break;
    //         case "false1":
    //           window.location.href = "puerta1.html#/tab/cuenta";
    //           break;
    //         case "false2":
    //           window.location.href = "puerta1.html#/tab/cuenta";
    //           break;
    //       }
    //     }
    //   });

    // } else {
    //   window.location.href = "puerta1.html#/tab/cuenta";
    // }
    if (sessionStorage.getItem("objUser")) {
      var objUser = JSON.parse(sessionStorage.getItem("objUser"));
      window.location.href = "puerta1.html#/tab/cuenta"
      console.log("hay objeto");
    } else {
      window.location.href = "puerta1.html#/tab/cuenta"
      console.log("no objeto");
    }

  }
  //fin inicio