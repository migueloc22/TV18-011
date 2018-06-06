var ipServe = "http://10.73.52.147/GitHub/TV18-011/";
var ruta = "www/programar/controlador/Clogin.php";
var urlServe = ipServe + ruta;
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {})
  .controller('RhijoCtrl', function ($scope) {})
  .controller('AppCtrl', function ($scope) {})

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })


  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/tab-hijo.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });


    $ionicModal.fromTemplateUrl('templates/tab-control.html', {
      scope: $scope
    }).then(function (modalcontrol) {
      $scope.modalcontrol = modalcontrol;
    });



    $ionicModal.fromTemplateUrl('templates/tab-crearnoticia.html', {
      scope: $scope
    }).then(function (modalnoticia) {
      $scope.modalnoticia = modalnoticia;
    });


    $scope.noticias = function () {
      $scope.modalnoticia.show();
      datosnuevos();

    };

    $scope.closenoticia = function () {
      $scope.modalnoticia.hide();
    }

    $scope.closehijo = function () {
      $(".obligatorio").text("");
      $scope.modal.hide();
    }

    $scope.control = function () {
      $("#img").hide(500);
    }

    $scope.perfil = function () {
      $("#img").show(500);
    }
    $scope.atras = function () {
      $("#img").hide(500);


    }
    $scope.closeLogin = function () {
      var nombre = $("#nombrehijo1").val();
      var apellido = $("#apellidohijo2").val();
      //var colegio=$("#colegiohijo").val();
      var sexo = $("#sexohijo").val();
      var fechanew = $("#fechahijo").val();
      var ciudad = $("#ciudadhijo2").val();
      var resul = 0;
      var cantidadmeses = 0;
      var array_fechasol = fechanew.split("-");
      var anio = parseInt(array_fechasol[0]);
      var mes = parseInt(array_fechasol[1]);
      var dia = parseInt(array_fechasol[2]);

      var fecha = new Date();
      var meshoy = parseInt(fecha.getMonth() + 1);
      var aniohoy = parseInt(fecha.getFullYear());
      var edad = (parseInt(anio) - aniohoy) + 1;
      var edadpositivo = Math.abs(edad);
      var fechahoy = dia + "-" + meshoy;
      var fechanacimiento = dia + "-" + mes;


      cantidadmeses = (resul * 12) + meshoy;

      vlNombre_hijo();
      vlApellido_hijo();
      vlFecha_hijo();
      vlCiudad_hijo();
      vlSexo_hijo();
      if (vlNombre_hijo() && vlApellido_hijo() && vlFecha_hijo() && vlCiudad_hijo() && vlSexo_hijo()) {
        hijoinsert(nombre, apellido, sexo, fechanew, ciudad);
        $scope.modal.hide();
        var nombre = $("#nombrehijo1").val("");
        var apellido = $("#apellidohijo2").val("");
        //var colegio=$("#colegiohijo").val("");
        var sexo = $("#sexohijo").val("");
        var fecha = $("#fechahijo").val("");
        var ciudad = $("#ciudadhijo2").val("");
        $(".obligatorio").text("");

      }



    };

    // Open the login modal

    $scope.controldatos = function () {
      alert("que pasa");
      $scope.modalcontrol.show();

    };


    $scope.login = function () {
      $("#img").show();


      $scope.modal.show();
      myfunction("primr7");
      consultas();

      function consultas() {
        alert(urlServe);
        var avataresnuevos = "";

        $("#nombrehijo1").val("");
        $("#apellidohijo2").val("");
        $("#colegiohijo").val("");
        $("#sexohijo").val("");
        $("#fechahijo").val("");
        $("#ciudadhijo2").val("");
        $.ajax({
            url: urlServe,
            type: 'POST',
            data: {
              action: 'sessionavatar'
            }

          })
          .done(function (data) {

            var datos = JSON.parse(data);
            console.log(data);
            avataresnuevos += "<table>";
            avataresnuevos += "<tr>";
            $.each(datos.avatarnueno, function (fila, valor) {

              avataresnuevos += "<td>";
              avataresnuevos += "<a href='#' id=" + valor.idavatar + " onclick=myfunction(" + valor.idavatar + ");><img class='img-circle-niños8 imagesnino' src=" + valor.avatares + " /></a>";
              avataresnuevos += "</td>";

            });
            avataresnuevos += "</tr>";
            avataresnuevos += "</table>";
            $("#emoticones").html(avataresnuevos);

          });

      }
    };





    $scope.continuar = function () {

      $("#img").hide(500);


    };



    $scope.tmb = function () {

      tmbimc();
    }
    $scope.doLogin = function () {





      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();

      }, 1000);
    };

  })