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
      localStorage.setItem("correo", correo);
      localStorage.setItem("password", password);

      $.ajax({
        url: urlServe,
        data: {
          action: 'datosUsuarios',
          correoI: "'" + correo + "'",
          passwordI: "'" + password + "'",
        },
        type: 'POST',
        success: function (salida) {
          // alert(salida);
          switch (salida) {
            case "2":
              window.location.href = "programar/vista/usuario.html";
              break;
            case "3":
              window.location.href = "programar/vista/especialista.html";
              break;
            case "false1":
              console.log("active su cuenta");
              break;
            case "false2":
              console.log("correo o contraseña incorrecta");
              break;
          }
        }
      });
    }




  });

  datos();

  function datos() {
    var correo = localStorage.getItem("correo");
    var password = localStorage.getItem("password");
    if ((correo != undefined) && (password != undefined)) {
      $.ajax({
        url: urlServe,
        data: {
          action: 'datosUsuarios',
          correoI: "'" + correo + "'",
          passwordI: "'" + password + "'",
        },
        type: 'POST',
        success: function (salida) {
          switch (salida) {
            case "2":
              window.location.href = "programar/vista/usuario.html";
              break;
            case "3":
              window.location.href = "programar/vista/especialista.html";
              break;
            case "false1":
              window.location.href = "puerta1.html#/tab/cuenta";
              break;
            case "false2":
              window.location.href = "puerta1.html#/tab/cuenta";
              break;
          }
        }
      });

    } else {
      window.location.href = "puerta1.html#/tab/cuenta";
    }


  }
  //fin inicio